import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "download" model, go to https://brush-tutorial.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v2",
  storageKey: "X8he94-KYagR",
  fields: {
    customerId: {
      type: "string",
      validations: { required: true },
      storageKey: "9xP6ywnRd6wr",
      filterIndex: false,
    },
    customerName: {
      type: "string",
      validations: { required: true },
      storageKey: "zXyDCnjgLjHK",
      filterIndex: false,
    },
    productId: {
      type: "string",
      validations: { required: true },
      storageKey: "MneL9fseuafy",
      filterIndex: false,
    },
    productTitle: {
      type: "string",
      validations: { required: true },
      storageKey: "ebNmL7Out-1J",
      filterIndex: false,
    },
  },
};
