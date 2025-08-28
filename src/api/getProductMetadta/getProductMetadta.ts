/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
// import { fetchGraphQL } from '@adobe-commerce/fetch-graphql';

import { fetchGraphQl, setFetchGraphQlHeader } from '@adobe-commerce/fetch-graphql';

export async function getProductMetadata(sku: string) {
  const query = `
  query getProductsBySkus(
    $skus: [String!]
    $pageSize: Int
    $currentPage: Int
  ) {
    productSearch(
      phrase: "*"
      filter: [
        { attribute: "sku", in: $skus }
        { attribute: "visibility", in: ["Search", "Catalog, Search"] }
      ]
      page_size: $pageSize
      current_page: $currentPage
    ) {
      total_count
      items {
        productView {
          __typename
          sku
          name
          inStock
          url
          urlKey
        }
      }
      page_info {
        current_page
        page_size
        total_pages
      }
    }
  }
`;

const variables = {
  "phrase": "*",
  "pageSize": 10,
  "currentPage": 1,
  "skus": [sku],
  "filter": [
    {
      "attribute": "sku",
      "in": [sku]
    },
    {
      "attribute": "visibility",
      "in": ["Search", "Catalog, Search"]
    }
  ]
}
  setFetchGraphQlHeader('Magento-Website-Code', 'base');
  setFetchGraphQlHeader('Magento-Store-Code', 'default');
  setFetchGraphQlHeader('Magento-Store-View-Code', 'default');
  const { data } = await fetchGraphQl(query, { variables});

  return data?.productSearch?.items[0].productView ?? null;
}


// export async function getProductMetadata(sku: string) {
//   const query = `
//   query getProductsBySkus(
//     $skus: [String!]
//     $pageSize: Int
//     $currentPage: Int
//   ) {
//     productSearch(
//       phrase: "*"
//       filter: [
//         { attribute: "sku", in: $skus }
//         { attribute: "visibility", in: ["Search", "Catalog, Search"] }
//       ]
//       page_size: $pageSize
//       current_page: $currentPage
//     ) {
//       total_count
//       items {
//         productView {
//           __typename
//           sku
//           name
//           inStock
//           is_new
//           only_x_left_in_stock
//           stock_status
//           url
//           urlKey
//         }
//       }
//       page_info {
//         current_page
//         page_size
//         total_pages
//       }
//     }
//   }
// `;

//   const variables = {
//     skus: [sku],
//     pageSize: 10,
//     currentPage: 1,
//     filter: [
//       {
//         attribute: "sku",
//         in: [sku]
//       },
//       {
//         attribute: "visibility",
//         in: ["Search", "Catalog, Search"]
//       }
//     ]
//   };

//   setFetchGraphQlHeader('Magento-Website-Code', 'base');
//   setFetchGraphQlHeader('Magento-Store-Code', 'default');
//   setFetchGraphQlHeader('Magento-Store-View-Code', 'default');

//   const { data } = await fetchGraphQl(query, { variables });
//   return data?.productSearch?.items?.[0]?.productView ?? null;
// }


