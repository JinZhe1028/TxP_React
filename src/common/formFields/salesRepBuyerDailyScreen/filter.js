export default {
  condition: () => true,
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
      title: 'Team Lead',
      field: 'teamLeadId',
      placeholder: 'teamLeadId',
      type: 'select',
      format: 'number',
      condition: (props, user) => ['admin', 'manager'].includes(user.role),
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
