/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
// https://storybook.js.org/docs/7.0/preact/writing-stories/introduction


// components/ProductBadge/ProductBadge.stories.tsx
import type { Meta, StoryObj } from '@storybook/preact';
import { ProductBadge } from './ProductBadge'; // ✅ import component, not container

// Import the actual prop type expected by ProductBadge
import type { Product } from './ProductBadge';

// Use the correct prop type for ProductBadge
type ProductBadgeProps = Product;

const meta: Meta<ProductBadgeProps> = {
  title: 'Components/ProductBadge',
  component: ProductBadge,
  argTypes: {
    inStock: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<ProductBadgeProps>;

// export const NewProduct: Story = {
//   args: {
//     is_new: true,
//     stock_status: 'IN_STOCK',
//     only_x_left_in_stock: undefined,
//   },
// };

export const INStock: Story = {
  args: {
    inStock: true
  },
};

export const OutOfStock: Story = {
  args: {
    inStock: false
  },
};
