import moment from 'moment';

export default {
  condition: () => true,
  fields: [
    {
      title: 'Team Lead',
      field: 'teamLeadId',
      placeholder: 'teamLeadId',
      type: 'radio',
    },
    {
      title: 'Fpl Target',
      field: 'fplTarget',
      placeholder: 'fplTarget',
      type: 'radio',
    },
    {
      title: 'Cpc Fpl',
      field: 'cpcFpl',
      placeholder: 'cpcFpl',
      type: 'radio',
    },
    {
      title: 'Fpl Payout Achieved',
      field: 'fplPayoutAchieved',
      placeholder: 'fplPayoutAchieved',
      type: 'radio',
    },
    {
      title: 'Wholesaler',
      field: 'wholesalerId',
      placeholder: 'wholesalerId',
      type: 'radio',
    },
  ],
};
