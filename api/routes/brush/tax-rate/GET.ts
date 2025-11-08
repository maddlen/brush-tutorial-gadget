import { RouteHandler } from "gadget-server";
import { BrushContext } from "../../../../_brush/types";

const handler: RouteHandler = async (context: BrushContext) => {
  const calculateMutation = /* GraphQL */ `
    mutation {
      draftOrderCalculate(
        input: {
          lineItems: [
            {
              title: "Test Item"
              quantity: 1
              originalUnitPriceWithCurrency: { amount: 100, currencyCode: ${context.currency} }
              taxable: true
            }
          ]
          shippingAddress: { countryCode: ${context.country} }
        }
      ) {
        calculatedDraftOrder {
          taxLines {
            rate
          }
        }
      }
    }
  `;
  const res = await context.adminApi?.graphql(calculateMutation);
  return context.reply.send({ rate: res.draftOrderCalculate?.calculatedDraftOrder?.taxLines[0]?.rate  || 0});
};

export default handler;
