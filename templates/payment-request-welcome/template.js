const template = {
  es: {
    name: 'payment-request-welcome-es',
    subject: 'Transacciona a distancia',
  },
  data: {
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
