export default {
  condition: ({ role }) => ['admin', 'manager', 'teamLead'].includes(role),
  fields: [
    {
      title: 'Team Lead',
      field: 'teamLeadId',
      placeholder: 'teamLeadId',
      type: 'select',
      disabled: true,
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
      title: 'Email',
      field: 'teamLeadEmail',
      placeholder: 'teamLeadEmail',
      type: 'static',
    },
    {
      title: 'Fpl Target',
      field: 'fplTarget',
      placeholder: 'fplTarget',
      type: 'number',
    },
    {
      title: 'Cpc Fpl',
      field: 'cpcFpl',
      placeholder: 'cpcFpl',
      type: 'number',
    },
    {
      title: 'Fpl Payout Achieved',
      field: 'fplPayoutAchieved',
      placeholder: 'fplPayoutAchieved',
      type: 'number',
    },
    {
      condition: (props, user) => user.role === 'admin',
      title: 'Wholesaler Id',
      field: 'groupWholesalerid',
      placeholder: 'groupWholesalerid',
      type: 'select',
      format: 'number',
      disabled: true,
      options: {
        title: 'name',
        path: 'wholesaler',
        field: 'id',
      },
    },
  ],
};
