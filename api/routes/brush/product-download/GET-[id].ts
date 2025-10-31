import { RouteHandler } from "gadget-server";
import { BrushContext } from "../../../../_brush/types";

type RequestParams = { Params: { id: string } };

const handler: RouteHandler<RequestParams> = async (context: BrushContext<RequestParams>) => {
  return context.reply.send({ message: `Requested product ID is ${context.request.params.id}` });
};

export default handler;
