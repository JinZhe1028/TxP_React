export default {
  condition: ({ role }) => ['admin', 'manager'].includes(role),
  fields: [
    {
      title: 'Buyer Name',
      field: 'name',
      placeholder: 'name',
      type: 'radio',
    },
    {
      title: 'GPA ID',
      field: 'gpaId',
      placeholder: 'gpaId',
      type: 'radio',
    },
    {
      title: 'Premise',
      field: 'premise',
      placeholder: 'premise',
      type: 'radio',
    },
    {
      title: 'Role',
      field: 'role',
      placeholder: 'role',
      type: 'radio',
    },
    {
      title: 'Chain',
      field: 'chain',
      placeholder: 'chain',
      type: 'radio',
    },
    {
      title: 'Route',
      field: 'routeId',
      placeholder: 'routeId',
      type: 'radio',
    },
  ],
};
