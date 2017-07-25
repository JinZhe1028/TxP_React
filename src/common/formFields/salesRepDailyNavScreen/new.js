export default {
  condition: ({ role }) => ['admin', 'manager', 'teamLead'].includes(role),
  entity: 'salesRep',
  fields: [
    // {
    //   title: 'Group',
    //   field: 'groupId',
    //   placeholder: 'groupId',
    //   type: 'select',
    //   format: 'number',
    //   options: {
    //     path: 'group',
    //     title: 'id',
    //     field: 'id',
    //   },
    // },
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
      title: 'Team Lead',
      field: 'teamLeadId',
      placeholder: 'teamLeadId',
      type: 'select',
      format: 'number',
      options: {
        path: 'user',
        title: 'name',
        field: 'id',
        params: {
          role: 'teamLead',
        },
      },
      condition: (props, user) => ['admin', 'manager'].includes(user.role),
    },
    {
      title: 'Route',
      field: 'routeId',
      placeholder: 'routeId',
      type: 'text',
    },
    // {
    //   condition: (props, user) => user.role === 'admin',
    //   title: 'Wholesaler',
    //   field: 'wholesalerId',
    //   placeholder: 'wholesalerId',
    //   type: 'select',
    //   format: 'number',
    //   options: {
    //     title: 'name',
    //     path: 'wholesaler',
    //     field: 'id',
    //   },
    // },
  ],
};
