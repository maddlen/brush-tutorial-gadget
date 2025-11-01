import { Product } from "../_brush/shopify-types/storefront.types";
import { BrushContext } from "../_brush/types";
import { PRODUCT_QUERY } from "./graphql/queries";

export const getProductPdf = async (
  context: BrushContext,
  productId: string
): Promise<Product | undefined> => {
  const response = await context.storefrontApi?.request<Product>(PRODUCT_QUERY, {
    variables: {
      id: `gid://shopify/Product/${productId}`,
      country: context.country,
      language: context.locale
    },
  });

  return response?.data;
};
