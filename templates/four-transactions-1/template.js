const template = {
  es: {
    name: 'four-transactions-1-es',
    subject: '{{firstName}}, gracias por tu primera venta con Clip',
  },
  data: {
    firstName: 'Daniel',
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
