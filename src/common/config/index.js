const moment = require('moment')

const shared = {
  ENDPOINT: '/',
  DATE_FORMAT: 'YYYY-MM-DD',
};

const lists = {
  LIST_BUYER_ROLES: ['BAR', 'BOWLING ALLEY', 'C.CLUB PRIVATE', 'CLUB STORE', 'COCKTAIL LOUNGE', 'CONVENIENCE',
    'CONVENTION CENT', 'DRUG STORE', 'GAY BAR', 'GOLF - PRIVATE', 'GOLF - PUBLIC', 'GROCERY', 'HOTEL/MOTEL', 'MASS MERCH',
    'OTHER OFF-PREMISE', 'OTHER ON - SALE', 'PACKAGE LIQUOR', 'RACE TRACK', 'RESTAURANT', 'SERVICE ORG', 'SUPERMARKET',
    'TAVERN'],
  LIST_PACKAGES: ['1/2 bbl', '1/6 bbl', '6/4/16oz can', 'Pallets'],
  PKGS: ['DFT', 'PKG', 'NA'],
  PREMISES: ['on', 'off', 'on-off', 'on-and-off'],
  GP_CATEGORIES: [
    { title: 'Low GP (Less Than $3.80/CE)', field: 'low' },
    { title: 'Medium GP ($3.80-$5.20/CE)', field: 'medium' },
    { title: 'High GP ($5.20-$6.30/CE)', field: 'high' },
    { title: 'Very High GP ($6.30-$8.00/CE)', field: 'veryHigh' },
    { title: 'Super High GP ($8.00+/CE)', field: 'superHigh' },
  ],
  VOL_CATEGORIES: [
    { title: 'Low Volume', field: 'low' },
    { title: 'Medium Volume', field: 'medium' },
    { title: 'High Volume', field: 'high' },
  ],
  TRENDS: ['Rise', 'Fall', 'No Trend'],
  MONTHS: moment.months().map((month) => ({
    field: moment().month(month).startOf('month').format(shared.DATE_FORMAT),
    title: month,
  })),
};

module.exports = {
  development: Object.assign({}, shared, lists, {
    API_HOST: 'http://localhost:1337',
  }),

  staging: Object.assign({}, shared, lists, {
    API_HOST: 'http://162.243.3.58',
    AWS_ACCESS_KEY_ID: 'AKIAIQ2QXH6GXUNDBHDQ',
    AWS_SECRET_ACCESS_KEY: '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',
    AWS_BUCKET: 'staging.gp-vxp.com',
    AWS_REGION: 'us-west-2',
  }),

  production: Object.assign({}, shared, lists, {
    API_HOST: 'http://162.243.3.58',
  }),
};
