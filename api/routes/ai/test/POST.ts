import { RouteHandler } from "gadget-server";

/**
 * Route handler for POST ai/test
 *
 * See: https://docs.gadget.dev/guides/http-routes/route-configuration#route-context
 */
const route: RouteHandler = async (context) => {
  const response = await fetch(process.env.FASTAPI_ROOT_URL!);
  const data = (await response.json()) as { message: string };
  return context.reply.send({ message: data.message });
};

export default route;
