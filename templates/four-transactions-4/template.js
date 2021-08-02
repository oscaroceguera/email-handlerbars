const template = {
  es: {
    name: 'four-transactions-4-es',
    subject: '{{firstName}}, tus próximas 3 transacciones son gratis',
  },
  data: {
    firstName: 'Daniel',
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
  },
};

module.exports = locale => {
  return { data: template.data, ...template[locale] };
};
