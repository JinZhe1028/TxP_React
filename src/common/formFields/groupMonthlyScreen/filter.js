import moment from 'moment';

export default {
  condition: () => true,
  fields: [
    {
      title: 'Team Lead',
      field: 'teamLeadId',
      placeholder: 'teamLeadId',
      type: 'select',
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
      title: 'Period',
      field: 'period',
      placeholder: 'period',
      type: 'select',
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
      placeholder: 'wholesalerId',
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
