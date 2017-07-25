export default {
  condition: ({ role }) => role === 'admin',
  fields: [
    {
      title: 'Name',
      field: 'name',
      placeholder: 'name',
      type: 'radio',
    },
    {
      title: 'Gpa Id',
      field: 'gpaId',
      placeholder: 'gpaId',
      type: 'radio',
    },
  ],
};
