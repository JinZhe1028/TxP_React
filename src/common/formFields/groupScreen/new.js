const newRoles = ['admin', 'manager'];

export default {
  condition: ({ role }) => newRoles.includes(role),
  fields: [
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
