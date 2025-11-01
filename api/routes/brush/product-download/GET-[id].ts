import { RouteHandler } from "gadget-server";
import { BrushContext } from "../../../../_brush/types";
import { getProductPdf } from "../../../../app/product-download";

type RequestParams = { Params: { id: string } };

const handler: RouteHandler<RequestParams> = async (context: BrushContext<RequestParams>) => {
  const product = await getProductPdf(context, context.request.params.id);
  return context.reply.send({ message: `Requested product data is ${JSON.stringify(product)}` });
};

export default handler;
