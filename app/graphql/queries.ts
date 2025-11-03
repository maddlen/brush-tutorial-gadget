export const PRODUCT_QUERY = /* GraphQL */ `
  query ProductQuery($id: ID!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    product(id: $id) {
      title
      description
      featuredImage {
        url
      }
      variants(first: 1) {
        nodes {
          sku
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;
