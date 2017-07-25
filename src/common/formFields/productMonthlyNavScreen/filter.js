import makeSelect from '~/src/common/utils/makeSelect';

export default {
  condition: () => true,
  fields: [
    {
      title: 'Size',
      field: 'productPkg',
      placeholder: 'productPkg',
      type: 'select',
      disabled: false,
      options: {
        content: makeSelect(APP_CONFIG.LIST_PACKAGES, false, true),
      },
    },
    {
      title: 'Package Type',
      field: 'productPackageType',
      placeholder: 'productPackageType',
      type: 'select',
      disabled: false,
      options: {
        content: makeSelect(APP_CONFIG.PKGS, false, true),
      },
    },
    {
      title: 'Premise',
      field: 'premise',
      placeholder: 'premise',
      type: 'select',
      options: {
        content: makeSelect(APP_CONFIG.PREMISES, false, true),
      },
    },
    {
      title: 'GP Category',
      field: 'gpCategory',
      placeholder: 'gpCategory',
      type: 'select',
      disabled: false,
      options: {
        content: makeSelect(APP_CONFIG.GP_CATEGORIES, true, true),
      },
    },
    {
      title: 'Volume',
      field: 'volCategory',
      placeholder: 'volCategory',
      type: 'select',
      disabled: false,
      options: {
        content: makeSelect(APP_CONFIG.VOL_CATEGORIES, true, true),
      },
    },
    {
      title: 'Trend',
      field: 'trend',
      placeholder: 'trend',
      type: 'select',
      options: {
        content: makeSelect(APP_CONFIG.TRENDS, false, true),
      },
    },
    {
      title: 'Period',
      field: 'period',
      placeholder: 'period',
      type: 'select',
      options: {
        content: makeSelect(APP_CONFIG.MONTHS, true, false),
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
