const baseConfig = require('@adobe-commerce/elsie/config/jest');

module.exports = {
  ...baseConfig,

  setupFiles: [
    ...baseConfig.setupFiles,
    './home/kirankumarm/Desktop/AEM_EDS/Aem_Drop_In/Adobe-drop-in/tests/__mocks__/browserMocks.ts',
  ],

  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
