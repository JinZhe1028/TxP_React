export default {
  condition: () => false,
  fields: [
    {
      title: 'Product',
      field: 'productId',
      placeholder: 'productId',
      type: 'select',
      format: 'number',
      options: {
        path: 'product',
        title: 'name',
        field: 'id',
      },
    },
    {
      title: 'Sales Rep',
      field: 'userId',
      placeholder: 'userId',
      type: 'select',
      format: 'number',
      options: {
        path: 'user',
        field: 'id',
        title: 'name',
        params: {
          role: 'salesRep',
        },
      },
    },
    {
      title: 'Team Lead',
      field: 'teamLeadId',
      placeholder: 'teamLeadId',
      type: 'select',
      format: 'number',
      options: {
        title: 'name',
        path: 'user',
        field: 'id',
        params: {
          role: 'teamLead',
        },
      },
    },
    {
      title: 'Group Id',
      field: 'groupId',
      placeholder: 'groupId',
      type: 'select',
      format: 'number',
      options: {
        title: 'id',
        path: 'group',
        field: 'id',
      },
    },
    {
      title: 'Route',
      field: 'routeId',
      placeholder: 'routeId',
      type: 'text',
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
      title: 'Period',
      field: 'period',
      placeholder: 'Period',
      type: 'date',
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
