/**
 * Shopify Storefront API integration scaffold.
 * Set environment variables to connect:
 * - NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
 * - NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
 */

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function shopifyFetch<T>(query: string, variables = {}): Promise<T> {
  if (!domain || !token) {
    throw new Error("Shopify credentials not configured");
  }

  const res = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

export const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;

export function isShopifyConfigured() {
  return Boolean(domain && token);
}
