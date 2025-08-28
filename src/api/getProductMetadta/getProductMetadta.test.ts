/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
import { getProductMetadta } from '@/product-badges/api/getProductMetadta';

describe('product-badges/api/getProductMetadta', () => {
  test('returns value', () => {
    const value = getProductMetadta();

    expect(value).toEqual('Howdy!');
  });
});
