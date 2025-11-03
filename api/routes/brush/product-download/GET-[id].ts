import { RouteHandler } from "gadget-server";
import { BrushContext } from "../../../../_brush/types";
import { getProductPdf } from "../../../../app/product-download";

type RequestParams = { Params: { id: string } };

const handler: RouteHandler<RequestParams> = async (context: BrushContext<RequestParams>) => {
  const productId = context.request.params.id;
  const productPdf = await getProductPdf(context, productId);
  return await context.reply
    .header("Content-Type", "application/pdf")
    .header("Content-Disposition", `inline; filename="product-${productId}.pdf"`)
    .send(productPdf);
};

export default handler;
