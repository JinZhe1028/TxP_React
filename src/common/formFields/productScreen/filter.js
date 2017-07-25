export default {
  condition: () => true,
  fields: [
    {
      title: 'Gpa Id',
      field: 'gpaId',
      placeholder: 'gpa id',
      type: 'text',
    },
    {
      title: 'Name',
      field: 'name',
      placeholder: 'name',
      type: 'text',
    },
    {
      title: 'Package',
      field: 'pkg',
      placeholder: 'pkg',
      type: 'select',
      options: {
        content: APP_CONFIG.LIST_PACKAGES.map((pkg) => ({
          field: pkg,
          title: pkg,
        })),
      },
    },
    {
      title: 'Supplier Family',
      field: 'supplierFamily',
      placeholder: 'supplierFamily',
      type: 'text',
    },
    {
      title: 'Brand Family',
      field: 'brandFamily',
      placeholder: 'brandFamily',
      type: 'text',
    },
    {
      title: 'Brand Country',
      field: 'brandCountry',
      placeholder: 'brandCountry',
      type: 'text',
    },
    {
      title: 'Package Type',
      field: 'packageType',
      placeholder: 'packageType',
      type: 'text',
    },
    {
      condition: (props, user) => user.role === 'admin',
      title: 'Wholesaler',
      field: 'wholesalerId',
      placeholder: 'wholesalerId',
      type: 'select',
      format: 'number',
      options: {
        title: 'name',
        path: 'wholesaler',
        field: 'id',
      },
    },
  ],
};
