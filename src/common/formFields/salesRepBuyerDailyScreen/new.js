export default {
  condition: () => false,
  fields: [
    {
      title: 'Sales Rep',
      field: 'userId',
      placeholder: 'userId',
      type: 'select',
      format: 'number',
      options: {
        title: 'name',
        path: 'user',
        field: 'id',
        params: {
          role: 'salesRep',
        },
      },
    },
    {
      title: 'Buyer',
      field: 'buyerId',
      placeholder: 'buyerId',
      type: 'select',
      format: 'number',
      options: {
        title: 'name',
        path: 'buyer',
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
      title: 'Period',
      field: 'period',
      placeholder: 'Period',
      type: 'date',
    },
    {
      title: 'Trans Code',
      field: 'transCode',
      placeholder: 'transCode',
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
      title: 'Cost',
      field: 'cost',
      placeholder: 'cost',
      type: 'number',
    },
    {
      title: 'Cost Fpl',
      field: 'costFpl',
      placeholder: 'costFpl',
      type: 'number',
    },
    {
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
