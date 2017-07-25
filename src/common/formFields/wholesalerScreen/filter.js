export default {
  condition: ({ role }) => role === 'admin',
  fields: [
    {
      title: 'Name',
      field: 'name',
      placeholder: 'name',
      type: 'text',
    },
    {
      title: 'Gpa Id',
      field: 'gpaId',
      placeholder: 'gpaId',
      type: 'text',
    },
  ],
};
