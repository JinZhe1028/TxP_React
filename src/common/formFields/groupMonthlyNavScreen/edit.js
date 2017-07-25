export default {
  condition: ({ role }) => ['admin', 'manager', 'teamLead'].includes(role),
  fields: [
    {
      title: 'Team Lead',
      field: 'teamLeadName',
      placeholder: 'teamLeadName',
      type: 'static',
    },
    {
      title: 'Team Lead',
      field: 'teamLeadId',
      placeholder: 'teamLeadId',
      type: 'hidden',
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
      condition: (props, user) => user.role === 'admin' || user.role === 'manager' || user.id === props.teamLeadId,
    },
    {
      title: 'Cpc Fpl',
      field: 'cpcFpl',
      placeholder: 'cpcFpl',
      type: 'number',
      condition: (props, user) => user.role === 'admin' || user.role === 'manager' || user.id === props.teamLeadId,
    },
    {
      title: 'Fpl Payout Achieved',
      field: 'fplPayoutAchieved',
      placeholder: 'fplPayoutAchieved',
      type: 'number',
      condition: (props, user) => user.role === 'admin' || user.role === 'manager' || user.id === props.teamLeadId,
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
