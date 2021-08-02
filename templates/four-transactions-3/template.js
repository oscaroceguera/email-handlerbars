const template = {
  es: {
    name: 'four-transactions-3-es',
    subject: '{{firstName}}, olvídate del efectivo con Clip',
  },
  data: {
    firstName: 'Daniel',
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
