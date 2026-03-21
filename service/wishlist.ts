import { BrushContext } from "../_brush/types";

export const getExistingHandles = async (context: BrushContext) => {
  const customerWishlistItems = await context.api.wishlist.findMany({
    filter: {
      customerGid: {
        equals: context.customerGid,
      },
    },
  });

  return customerWishlistItems.map((i) => i.productHandle);
};

export const addWishlistItems = async (context: BrushContext, handlesToAdd: string[]) => {
  if (!handlesToAdd.length) return;

  return await context.api.wishlist.bulkCreate(
    handlesToAdd.map((productHandle) => ({
      customerGid: context.customerGid,
      productHandle,
    })),
  );
};

export const removeWishlistItems = async (context: BrushContext, handlesToRemove: string[]) => {
  if (!handlesToRemove.length) return;

  const items = await context.api.wishlist.findMany({
    select: { id: true },
    filter: {
      customerGid: { equals: context.customerGid },
      productHandle: { in: handlesToRemove },
    },
  });

  if (!items.length) return;

  return await context.api.wishlist.bulkDelete(items.map(({ id }) => id));
};
