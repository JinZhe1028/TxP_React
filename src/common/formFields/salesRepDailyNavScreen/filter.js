export default {
  condition: () => true,
  fields: [
    {
      title: 'Rank',
      field: 'rank',
      placeholder: 'rank',
      type: 'number',
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
      title: 'Sales Rep',
      field: 'salesRepId',
      placeholder: 'salesRepId',
      type: 'select',
      format: 'number',
      options: {
        path: 'salesRep',
        title: 'userName',
        field: 'id',
      },
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
      title: 'Period',
      field: 'period',
      placeholder: 'Period',
      type: 'date',
    },
    {
      title: 'Wholesaler',
      field: 'wholesalerId',
      placeholder: 'wholesaler',
      type: 'select',
      format: 'number',
      condition: (props, user) => user.role === 'admin',
      options: {
        path: 'wholesaler',
        title: 'name',
        field: 'id',
      },
    },
  ],
};
