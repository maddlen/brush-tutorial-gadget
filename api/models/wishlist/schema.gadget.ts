import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "wishlist" model, go to https://brush-tutorial.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v2",
  storageKey: "PLuISbww7Ev4",
  fields: {
    customerGid: {
      type: "string",
      validations: { required: true },
      storageKey: "BfNvp2l4LcvQ",
      searchIndex: false,
    },
    productHandle: {
      type: "string",
      validations: { required: true },
      storageKey: "NZWtDIutoLTi",
      searchIndex: false,
    },
  },
  searchIndex: false,
};
