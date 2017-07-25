export default {
  fields: [
    {
      field: 'wholesalerId',
      options: {
        path: 'wholesaler',
        field: 'id',
        title: 'name',
      },
    },
    {
      field: 'groupId',
      options: {
        path: 'group',
        field: 'id',
        title: 'id',
      },
    },
    {
      field: 'teamLeadId',
      options: {
        path: 'user',
        field: 'id',
        title: 'name',
        params: {
          role: 'teamLead',
        },
      },
    },
  ],
};
