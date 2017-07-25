export default {
  condition: () => true,
  fields: [
    {
      title: 'User',
      field: 'userId',
      placeholder: 'userId',
      type: 'radio',
    },
    // {
    //   title: 'Group',
    //   field: 'groupId',
    //   placeholder: 'groupId',
    //   type: 'radio',
    // },
    {
      title: 'Team Lead',
      field: 'teamLeadId',
      placeholder: 'teamLeadId',
      type: 'radio',
    },
    {
      title: 'Route',
      field: 'routeId',
      placeholder: 'routeId',
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
