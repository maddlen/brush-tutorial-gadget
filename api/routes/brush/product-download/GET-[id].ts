import { RouteHandler } from "gadget-server";
import { BrushContext } from "../../../../_brush/types";
import { getProductPdf } from "../../../../app/product-download";

type RequestParams = { Params: { id: string } };

const handler: RouteHandler<RequestParams> = async (context: BrushContext<RequestParams>) => {
  const productId = context.request.params.id;
  saveDownload(context, productId);
  const productPdf = await getProductPdf(context, productId);
  return await context.reply
    .header("Content-Type", "application/pdf")
    .header("Content-Disposition", `inline; filename="product-${productId}.pdf"`)
    .send(productPdf);
};

const saveDownload = async (context: BrushContext<RequestParams>, productId: string) => {
  const customerId = context.customerGid?.split("/").pop()!;
  const customer = await context.api.shopifyCustomer.maybeFindById(customerId);
  const product = await context.api.shopifyProduct.maybeFindById(productId);
  await context.api.download.create({
    productId,
    customerId,
    customerName: customer?.displayName || "",
    productTitle: product?.title || "",
  });
};

export default handler;
