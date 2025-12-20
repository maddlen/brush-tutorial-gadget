import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "session" model, go to https://brush-tutorial.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v2",
  storageKey: "1fV6B6MyOYx6",
  fields: {
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "HJtzAAscRqD2",
    },
  },
  shopify: { fields: { shop: true, shopifySID: true } },
};
