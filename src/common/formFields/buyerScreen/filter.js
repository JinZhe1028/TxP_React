export default {
  condition: ({ role }) => ['admin', 'manager'].includes(role),
  fields: [
    {
      title: 'Buyer Name',
      field: 'name',
      placeholder: 'name',
      type: 'text',
    },
    {
      title: 'GPA ID',
      field: 'gpaId',
      placeholder: 'gpaId',
      type: 'text',
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
      title: 'Role',
      field: 'role',
      placeholder: 'role',
      type: 'select',
      options: {
        content: APP_CONFIG.LIST_BUYER_ROLES.map((role) => ({
          title: role,
          field: role,
        })),
      },
    },
    {
      title: 'Chain',
      field: 'chain',
      placeholder: 'chain',
      type: 'text',
    },
    {
      title: 'Route',
      field: 'routeId',
      placeholder: 'routeId',
      type: 'text',
    },
  ],
};
