export default {
  condition: ({ role }) => ['admin', 'manager', 'teamLead'].includes(role),
  fields: [
    {
      title: 'email',
      field: 'email',
      placeholder: 'email',
      type: 'text',
    },
    {
      title: 'name',
      field: 'name',
      placeholder: 'name',
      type: 'text',
    },
    {
      title: 'role',
      field: 'role',
      placeholder: 'role',
      type: 'select',
      options: {
        content: [
          { field: 'salesRep', title: 'Sales Rep' },
          { field: 'teamLead', title: 'Team Lead', condition: (params, user) => ['admin', 'manager'].includes(user.role) },
          { field: 'manager', title: 'Manager', condition: (params, user) => ['admin', 'manager'].includes(user.role) },
          { field: 'admin', title: 'Admin', condition: (params, user) => user.role === 'admin' },
        ],
        title: 'title',
        field: 'field',
      },
    },
    {
      title: 'Wholesaler',
      field: 'wholesalerId',
      placeholder: 'wholesaler',
      type: 'select',
      format: 'number',
      condition: ({ role }) => role !== 'admin',
      options: {
        path: 'wholesaler',
        title: 'name',
        field: 'id',
      },
    },
  ],
};
