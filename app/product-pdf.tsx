import React from "react";
import { Product } from "../_brush/shopify-types/storefront.types";

export const makeProductPdf = async (product: Product & { sku: string; price: string }) => {
  const { Page, Text, View, Document, Image, StyleSheet, renderToBuffer } = await import(
    "@react-pdf/renderer"
  );

  const styles = StyleSheet.create({
    page: {
      fontFamily: "Helvetica",
      fontSize: 11,
      padding: 24,
      backgroundColor: "#FFFFFF",
    },
    container: {
      flexDirection: "row",
      border: "1px solid #E0E0E0",
      overflow: "hidden",
    },
    leftColumn: {
      width: "40%",
      padding: 12,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FAFAFA",
    },
    productImage: {
      width: "100%",
      height: 160,
      objectFit: "cover",
      borderRadius: 4,
    },
    rightColumn: {
      width: "60%",
      padding: 14,
      justifyContent: "space-between",
    },
    header: {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 6,
    },
    productName: {
      fontSize: 16,
      fontWeight: 700,
      marginBottom: 6,
    },
    price: {
      fontSize: 18,
      fontWeight: 700,
      color: "#1a73e8",
    },
    description: {
      fontSize: 11,
      lineHeight: 1.4,
      color: "#333333",
      marginTop: 8,
    },
    meta: {
      marginTop: 12,
      fontSize: 10,
      color: "#666666",
    },
    footer: {
      marginTop: 12,
      borderTop: "1px solid #EEEEEE",
      paddingTop: 8,
      fontSize: 9,
      color: "#999999",
    },
  });

  const MyDocument: React.FC = () => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.container}>
            <View style={styles.leftColumn}>
              <Image style={styles.productImage} src={product.featuredImage?.url} />
            </View>

            <View style={styles.rightColumn}>
              <View>
                <View style={styles.header}>
                  <Text style={styles.productName}>{product.title}</Text>
                  <Text style={styles.price}>{product.price}</Text>
                </View>

                <Text style={styles.description}>{product.description}</Text>

                {product.sku && <Text style={styles.meta}>SKU: {product.sku}</Text>}
              </View>

              <View style={styles.footer}>
                <Text>For enquiries, contact sales@example.com • www.example.com</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  };

  return await renderToBuffer(<MyDocument />);
};
