import { BrushContext } from "../../../../_brush/types";
import { RouteHandler } from "gadget-server";
import { addWishlistItems, getExistingHandles, removeWishlistItems } from "../../../../service/wishlist";

type Body = { Body: { handles: string[] } };

const handler: RouteHandler<Body> = async (context: BrushContext<Body>) => {
  const handles = context.request.body.handles;
  const existingHandles = await getExistingHandles(context);

  const handlesToAdd = handles.filter((h) => !existingHandles.includes(h));
  const handlesToRemove = existingHandles.filter((h) => !handles.includes(h));

  await Promise.all([addWishlistItems(context, handlesToAdd), removeWishlistItems(context, handlesToRemove)]);
};

export default handler;
