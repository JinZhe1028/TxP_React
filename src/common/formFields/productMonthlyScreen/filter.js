import moment from 'moment';

export default {
  condition: () => true,
  fields: [
    {
      title: 'Gpa Id',
      field: 'productGpaId',
      placeholder: 'productGpaId',
      type: 'static',
    },
    {
      title: 'Product',
      field: 'productId',
      placeholder: 'productId',
      type: 'select',
      format: 'number',
      options: {
        path: 'product',
        field: 'id',
        title: 'name',
      },
    },
    {
      title: 'Package',
      field: 'productPkg',
      placeholder: 'productPkg',
      type: 'select',
      disabled: true,
      options: {
        content: APP_CONFIG.LIST_PACKAGES.map((pkg) => ({
          field: pkg,
          title: pkg,
        })),
      },
    },
    {
      title: 'Supplier Family',
      field: 'productSupplierfamily',
      placeholder: 'productSupplierfamily',
      type: 'static',
    },
    {
      title: 'Brand Family',
      field: 'productBrandfamily',
      placeholder: 'productBrandfamily',
      type: 'static',
    },
    {
      title: 'Brand Country',
      field: 'productBrandcountry',
      placeholder: 'productBrandcountry',
      type: 'static',
    },
    {
      title: 'Package Type',
      field: 'productPackagetype',
      placeholder: 'productPackagetype',
      type: 'static',
    },
    {
      title: 'Premise',
      field: 'premise',
      placeholder: 'premise',
      type: 'select',
      options: {
        content: [{
          title: 'On',
          field: 'on',
        }, {
          title: 'Off',
          field: 'off',
        }],
      },
    },
    {
      title: 'Period',
      field: 'period',
      placeholder: 'period',
      type: 'select',
      options: {
        content: moment.months().map((month) => ({
          field: moment().month(month).startOf('month').format(APP_CONFIG.DATE_FORMAT),
          title: month,
        })),
      },
    },
    {
      title: 'Wholesaler',
      field: 'wholesalerId',
      placeholder: 'wholesaler',
      type: 'select',
      format: 'number',
      condition: (props, user) => user.role === 'admin',
      options: {
        path: 'wholesaler',
        title: 'name',
        field: 'id',
      },
    },
  ],
};
