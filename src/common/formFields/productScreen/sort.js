export default {
  condition: () => true,
  fields: [
    {
      title: 'Gpa Id',
      field: 'gpaId',
      placeholder: 'gpa id',
      type: 'radio',
    },
    {
      title: 'Name',
      field: 'name',
      placeholder: 'name',
      type: 'radio',
    },
    {
      title: 'Package',
      field: 'pkg',
      placeholder: 'pkg',
      type: 'radio',
    },
    {
      title: 'Supplier Family',
      field: 'supplierFamily',
      placeholder: 'supplierFamily',
      type: 'radio',
    },
    {
      title: 'Brand Family',
      field: 'brandFamily',
      placeholder: 'brandFamily',
      type: 'radio',
    },
    {
      title: 'Brand Country',
      field: 'brandCountry',
      placeholder: 'brandCountry',
      type: 'radio',
    },
    {
      title: 'Package Type',
      field: 'packageType',
      placeholder: 'packageType',
      type: 'radio',
    },
    {
      condition: (props, user) => user.role === 'admin',
      title: 'Wholesaler',
      field: 'wholesalerId',
      placeholder: 'wholesalerId',
      type: 'radio',
    },
  ],
};
