import moment from 'moment';

export default {
  condition: ({ role }) => ['admin', 'manager'].includes(role),
  fields: [
    {
      title: 'Gpa Id',
      field: 'productGpaid',
      placeholder: 'productGpaid',
      type: 'static',
    },
    {
      title: 'Product',
      field: 'productId',
      placeholder: 'productId',
      type: 'select',
      format: 'number',
      disabled: true,
      options: {
        path: 'product',
        field: 'id',
        title: 'name',
      },
    },
    {
      title: 'Size',
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
      title: 'CE',
      field: 'ce',
      placeholder: 'ce',
      type: 'number',
    },
    {
      title: 'GP',
      field: 'gp',
      placeholder: 'gp',
      type: 'number',
    },
    {
      title: 'Rev',
      field: 'rev',
      placeholder: 'rev',
      type: 'number',
    },
    {
      title: 'Cost',
      field: 'cost',
      placeholder: 'cost',
      type: 'number',
    },
    {
      title: 'Premise',
      field: 'premise',
      placeholder: 'premise',
      type: 'static',
    },
    {
      title: 'Period',
      field: 'period',
      placeholder: 'period',
      type: 'select',
      disabled: true,
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
      disabled: true,
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
