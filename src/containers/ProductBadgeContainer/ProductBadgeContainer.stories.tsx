/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
// https://storybook.js.org/docs/7.0/preact/writing-stories/introduction
// ProductBadgeContainer.stories.tsx
import type { Meta, StoryObj } from '@storybook/preact';
import { ProductBadgeContainer, ProductBadgeContainerProps } from './ProductBadgeContainer';

const meta: Meta<ProductBadgeContainerProps> = {
  title: 'Components/ProductBadgeContainer',
  component: ProductBadgeContainer,
  argTypes: {
    sku: { control: 'text' }, // 👈 enable control for Storybook UI
  },
};

export default meta;

type Story = StoryObj<ProductBadgeContainerProps>;

export const Default: Story = {
  args: {
    sku: '24-WB06', // 👈 required prop passed here
  },
};

export const AnotherSKU: Story = {
  args: {
    sku: '24-WB05',
  },
};

