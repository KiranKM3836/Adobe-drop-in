/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/

module.exports = {
  name: 'product-badges',
  api: {
    root: './src/api',
    importAliasRoot: '@/product-badges/api',
  },
  components: [
    {
      id: 'Components',
      root: './src/components',
      importAliasRoot: '@/product-badges/components',
      cssPrefix: 'product-badges',
      default: true,
    },
  ],
  containers: {
    root: './src/containers',
    importAliasRoot: '@/product-badges/containers',
  },
  schema: {
    endpoint: process.env.ENDPOINT,
    headers: {}
  }
};
