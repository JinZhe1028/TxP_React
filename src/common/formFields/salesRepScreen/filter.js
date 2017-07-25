export default {
  condition: () => true,
  fields: [
    {
      title: 'User',
      field: 'userId',
      placeholder: 'userId',
      type: 'select',
      format: 'number',
      options: {
        path: 'user',
        title: 'name',
        field: 'id',
        params: {
          role: 'salesRep',
        },
      },
    },
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
    },
    {
      title: 'Route',
      field: 'routeId',
      placeholder: 'routeId',
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
