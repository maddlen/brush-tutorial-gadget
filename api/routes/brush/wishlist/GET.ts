import { BrushContext } from "../../../../_brush/types";
import { RouteHandler } from "gadget-server";
import { getExistingHandles } from "../../../../service/wishlist";

const handler: RouteHandler = async (context: BrushContext) => {
  return context.reply.send(await getExistingHandles(context));
};

export default handler;
