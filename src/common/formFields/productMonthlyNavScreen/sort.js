import moment from 'moment';

export default {
  condition: () => true,
  fields: [
    {
      title: 'Size',
      field: 'productPkg',
      placeholder: 'productPkg',
      type: 'radio',
    },
    {
      title: 'Premise',
      field: 'premise',
      placeholder: 'premise',
      type: 'radio',
    },
    {
      title: 'CE',
      field: 'ce',
      placeholder: 'ce',
      type: 'radio',
    },
    {
      title: 'GP',
      field: 'gp',
      placeholder: 'gp',
      type: 'radio',
    },
    {
      title: 'Rev',
      field: 'rev',
      placeholder: 'rev',
      type: 'radio',
    },
    {
      title: 'Cost',
      field: 'cost',
      placeholder: 'cost',
      type: 'radio',
    },
    {
      title: 'GP Category',
      field: 'gpCategory',
      placeholder: 'gpCategory',
      type: 'radio',
    },
    {
      title: 'Volume',
      field: 'volCategory',
      placeholder: 'volCategory',
      type: 'radio',
    },
    {
      title: 'Trend',
      field: 'trend',
      placeholder: 'trend',
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
