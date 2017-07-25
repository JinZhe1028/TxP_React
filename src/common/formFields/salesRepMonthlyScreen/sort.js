import moment from 'moment';

export default {
  condition: () => true,
  fields: [
    {
      title: 'Sales Rep',
      field: 'userId',
      placeholder: 'userId',
      type: 'radio',
    },
    {
      title: 'Team Lead',
      field: 'teamLeadId',
      placeholder: 'teamLeadId',
      type: 'radio',
    },
    {
      title: 'Group Id',
      field: 'groupId',
      placeholder: 'groupId',
      type: 'radio',
    },
    {
      title: 'Route',
      field: 'routeId',
      placeholder: 'routeId',
      type: 'radio',
    },
    {
      title: 'GP Goal',
      field: 'gpGoal',
      placeholder: 'gpGoal',
      type: 'radio',
    },
    {
      title: 'GP Generated',
      field: 'gpGenerated',
      placeholder: 'gpGenerated',
      type: 'radio',
    },
    {
      title: 'CE Goal',
      field: 'ceGoal',
      placeholder: 'ceGoal',
      type: 'radio',
    },
    {
      title: 'CE Sold',
      field: 'ceSold',
      placeholder: 'ceSold',
      type: 'radio',
    },
    {
      title: 'Fpl Target',
      field: 'fplTarget',
      placeholder: 'fplTarget',
      type: 'radio',
    },
    {
      title: 'Wholesaler',
      field: 'wholesalerId',
      placeholder: 'wholesaler',
      type: 'radio',
    },
  ],
};
