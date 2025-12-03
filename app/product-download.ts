import { Product } from "../_brush/shopify-types/storefront.types";
import { BrushContext } from "../_brush/types";
import { PRODUCT_QUERY } from "./graphql/queries";
import { makeProductPdf } from "./product-pdf";

export const getProductPdf = async (context: BrushContext, productId: string) => {
  const response = await context.storefrontApi?.request<{ product: Product }>(PRODUCT_QUERY, {
    variables: {
      id: `gid://shopify/Product/${productId}`,
      country: context.country,
      language: context.locale,
    },
  });

  const product = response?.data?.product;

  if (!product) {
    throw new Error("Product not found");
  }

  const productData = {
    ...product,
    sku: product.variants.nodes[0].sku || "",
    price: Intl.NumberFormat(context.locale, {
      style: "currency",
      currency: product.variants.nodes[0].price.currencyCode,
    })
      .format(product.variants.nodes[0].price.amount)
      .replace(/\u202F|\u00A0/g, " "), // Replace non-breaking spaces otherwise some may render as `/` in PDF
  };

  return await makeProductPdf(productData);
};
