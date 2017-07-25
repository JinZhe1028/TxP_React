const filterRoles = ['admin', 'manager'];

export default {
  condition: ({ role }) => filterRoles.includes(role),
  fields: [
    {
      title: 'Team Lead',
      field: 'teamLeadId',
      placeholder: 'teamLeadId',
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
