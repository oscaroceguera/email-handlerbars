const template = {
  es: {
    name: 'four-transactions-2-es',
    subject: '{{firstName}}, avísale a tus clientes que aceptas tarjeta',
  },
  data: {
    firstName: 'Daniel',
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
