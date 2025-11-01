export const PRODUCT_QUERY = /* GraphQL */ `
  query ProductQuery($id: ID!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    product(id: $id) {
      id
      title
      handle
      description
    }
  }
`;
