export default {
  condition: ({ role }) => ['admin', 'manager'].includes(role),
  entity: 'group',
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
