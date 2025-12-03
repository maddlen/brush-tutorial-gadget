import { DownloadRecord } from "@gadget-client/brush-tutorial";
import { AutoTable } from "@gadgetinc/react/auto/polaris";
import { api } from "../api";
import { Route } from "../routes/+types/_app.downloads";

type CellProps = {
  record: DownloadRecord;
  loaderData: Route.ComponentProps["loaderData"];
  path: string;
  label: string;
  id: string | number;
};

const LinkCell = ({ loaderData, path, label, id }: CellProps) => {
  const { adminDomain } = loaderData;
  const url = `${adminDomain}${path}/${id}`;

  return (
    <span>
      <s-link href={url}>{label}</s-link>
    </span>
  );
};

export const loader = async ({ context }: Route.LoaderArgs) => {
  const currentShop = await api.shopifyShop.findById(String(context.connections.shopify.currentShopId));
  const adminDomain = `https://admin.shopify.com/store/${currentShop.myshopifyDomain?.split(".").shift()}/`;
  return { adminDomain };
};

export default function Downloads({ loaderData }: Route.ComponentProps) {
  return (
    <s-page heading="Downloads">
      <s-section heading="Products downloads">
        <AutoTable
          model={api.download}
          selectable={false}
          columns={[
            {
              header: "Customer",
              render: ({ record }: { record: DownloadRecord }) => (
                <LinkCell
                  loaderData={loaderData}
                  path="customers"
                  id={record.customerId}
                  label={record.customerName}
                  record={record}
                />
              ),
            },
            {
              header: "Product",
              render: ({ record }: { record: DownloadRecord }) => (
                <LinkCell
                  loaderData={loaderData}
                  path="products"
                  id={record.productId}
                  label={record.productTitle}
                  record={record}
                />
              ),
            },
          ]}
        />
      </s-section>
    </s-page>
  );
}
