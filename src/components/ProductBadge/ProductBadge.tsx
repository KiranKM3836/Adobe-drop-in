/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
import { FunctionComponent } from 'preact';
// import { HTMLAttributes } from 'preact/compat';
// import { classes } from '@adobe-commerce/elsie/lib';
import '@/product-badges/components/ProductBadge/ProductBadge.css';
// import { Button } from '@adobe-commerce/elsie';
// import { Button } from '@adobe-commerce/elsie/components';

// function MyUiComponent() {
//   return (
//     <div>
//       <Button label="Click Me" />
//     </div>
//   );
// }

// export interface ProductBadgeProps extends HTMLAttributes<HTMLDivElement> {
//   is_new?: boolean;
//   stock_status?: string;
//   only_x_left_in_stock?: number;
// }

// export const ProductBadge: FunctionComponent<ProductBadgeProps> = ({
//   className,
//   children,
//   ...props
// }) => {
//   return (
//     <div {...props} className={classes(['product-badges-product-badge', className])}>
//       {children}
//       {MyUiComponent()}
//     </div>
//   );
// };


export type Product = {
  inStock?: boolean
  // is_new?: boolean;
  // stock_status?: string;
  // only_x_left_in_stock?: number;
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