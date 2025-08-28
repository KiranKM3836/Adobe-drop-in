/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
import { HTMLAttributes } from 'preact/compat';
import { Container } from '@adobe-commerce/elsie/lib';
import { getProductMetadata } from '@/product-badges/api';
import { ProductBadge } from '@/product-badges/components';
import { useEffect, useState } from 'preact/hooks';

export interface ProductBadgeContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  sku: string; // 👈 make sku a required prop
}



export const ProductBadgeContainer: Container<ProductBadgeContainerProps> = ({ sku, ...props }) => {
  const [productData, setProductData] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;
    getProductMetadata(sku).then(data => {
      if (isMounted) setProductData(data);
      console.log(data,"data from getProductMetadata")
    });
    return () => {
      isMounted = false;
    };
  }, [sku]);

  return (
    <div {...props}>
      <p>product:{productData}</p>
      {productData && <ProductBadge {...productData} />}
    </div>
  );
};
