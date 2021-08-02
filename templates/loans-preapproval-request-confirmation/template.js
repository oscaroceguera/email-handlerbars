const template = {
  es: {
    name: 'loans-preapproval-request-confirmation-es',
    subject: 'Hola {{merchant_name}}, estamos revisando tu solicitud.',
  },
  data: {
    merchant_name: 'Bruno Martinez',
    amount: '12,345.67',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
