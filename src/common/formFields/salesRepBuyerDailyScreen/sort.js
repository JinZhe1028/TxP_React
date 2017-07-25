export default {
  condition: () => true,
  fields: [
    {
      title: 'Sales Rep',
      field: 'userId',
      placeholder: 'userId',
      type: 'radio',
    },
    {
      title: 'Buyer',
      field: 'buyerId',
      placeholder: 'buyerId',
      type: 'radio',
    },
    {
      title: 'Team Lead',
      field: 'teamLeadId',
      placeholder: 'teamLeadId',
      type: 'radio',
    },
    {
      title: 'Group Id',
      field: 'groupId',
      placeholder: 'groupId',
      type: 'radio',
    },
    {
      title: 'Route',
      field: 'routeId',
      placeholder: 'routeId',
      type: 'radio',
    },
    {
      title: 'CE',
      field: 'ce',
      placeholder: 'ce',
      type: 'radio',
    },
    {
      title: 'GP',
      field: 'gp',
      placeholder: 'gp',
      type: 'radio',
    },
    {
      title: 'Cost',
      field: 'cost',
      placeholder: 'cost',
      type: 'radio',
    },
    {
      title: 'Cost Fpl',
      field: 'costFpl',
      placeholder: 'costFpl',
      type: 'radio',
    },
    {
      title: 'Trans Code',
      field: 'transCode',
      placeholder: 'transCode',
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
