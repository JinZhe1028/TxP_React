import makeSelect from '~/src/common/utils/makeSelect';

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
        content: makeSelect(APP_CONFIG.MONTHS, true, false),
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
