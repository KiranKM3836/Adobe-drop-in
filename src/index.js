// dist/index.js

// re-export anything you want consumers (EDS, other devs) to import
export { ProductBadgeContainer } from './containers/ProductBadgeContainer.js';
export { default as ProductBadge } from './components/ProductBadge.js';

// if you have any APIs, you can also expose them
export * from './api/api.js';
