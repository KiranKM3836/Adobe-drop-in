import { HTMLAttributes } from 'preact/compat';
import { Container } from '@adobe-commerce/elsie/lib';
import { getProductMetadata } from '@/product-badges/api';
import { ProductBadge } from '@/product-badges/components';
import { useEffect, useState } from 'preact/hooks';
// import { events } from '@adobe-commerce/event-bus';
import { events } from "@dropins/tools/event-bus";

export interface ProductBadgeContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  sku: string; // 👈 required prop
}

declare module "@dropins/tools/event-bus" {
  interface Events {
    "product:loaded": { sku: string; stock: string; [key: string]: any };
  }
}

export const ProductBadgeContainer: Container<ProductBadgeContainerProps> = ({ sku, ...props }) => {
  const [productData, setProductData] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;

    getProductMetadata(sku).then(data => {
      if (isMounted) {
        setProductData(data);

        // ✅ Emit here when we actually have the data
        events.emit("product:loaded", data);
        console.log("Event emitted: product:loaded", data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [sku]);

  return (
    <div {...props}>
      <p>product: {productData && <ProductBadge {...productData} />}</p>
    </div>
  );
};
