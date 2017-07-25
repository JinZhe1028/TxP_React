import moment from 'moment';

export default {
  condition: ({ role }) => ['manager', 'admin'].includes(role),
  fields: [
    {
      title: 'Sales Rep',
      field: 'userId',
      placeholder: 'userId',
      type: 'select',
      format: 'number',
      disabled: true,
      options: {
        path: 'user',
        field: 'id',
        title: 'name',
        params: {
          role: 'salesRep',
        },
      },
    },
    {
      title: 'Team Lead',
      field: 'teamLeadId',
      placeholder: 'teamLeadId',
      type: 'select',
      format: 'number',
      disabled: true,
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
      title: 'Group Id',
      field: 'groupId',
      placeholder: 'groupId',
      type: 'select',
      format: 'number',
      disabled: true,
      options: {
        title: 'id',
        path: 'group',
        field: 'id',
      },
    },
    {
      title: 'Route',
      field: 'routeId',
      placeholder: 'routeId',
      type: 'static',
    },
    {
      title: 'GP Goal',
      field: 'gpGoal',
      placeholder: 'gpGoal',
      type: 'number',
    },
    {
      title: 'GP Generated',
      field: 'gpGenerated',
      placeholder: 'gpGenerated',
      type: 'number',
    },
    {
      title: 'CE Goal',
      field: 'ceGoal',
      placeholder: 'ceGoal',
      type: 'number',
    },
    {
      title: 'CE Sold',
      field: 'ceSold',
      placeholder: 'ceSold',
      type: 'number',
    },
    {
      title: 'Fpl Target',
      field: 'fplTarget',
      placeholder: 'fplTarget',
      type: 'number',
    },
    {
      title: 'Period',
      field: 'period',
      placeholder: 'period',
      type: 'select',
      disabled: true,
      options: {
        content: moment.months().map((month) => ({
          field: moment().month(month).startOf('month').format(APP_CONFIG.DATE_FORMAT),
          title: month,
        })),
      },
    },
    {
      title: 'Wholesaler',
      field: 'wholesalerId',
      placeholder: 'wholesaler',
      type: 'select',
      format: 'number',
      disabled: true,
      condition: (props, user) => user.role === 'admin',
      options: {
        path: 'wholesaler',
        title: 'name',
        field: 'id',
      },
    },
  ],
};
