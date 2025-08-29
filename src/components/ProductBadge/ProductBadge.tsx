/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
import { FunctionComponent } from 'preact';
import '@/product-badges/components/ProductBadge/ProductBadge.css';


export type Product = {
  inStock?: boolean
};

export const ProductBadge: FunctionComponent<Product> = ({
  inStock
}) => {
  if (
    typeof inStock === "undefined"
  ) {
    return null;
  }

  return (
    <div className="product-badges">
      {inStock ? <span style={{
                                background: "green",
                                color: "white",
                                padding: "4px 8px",
                                borderRadius: "6px",
                                marginRight: "8px",
                                fontSize: "12px"}}>Available
                  </span> : 
                  <span style={{
                                background: "red",
                                color: "white",
                                padding: "4px 8px",
                                borderRadius: "6px",
                                marginRight: "8px",
                                fontSize: "12px"}}> Out of Stock
                  </span>}
    </div>
  );
}