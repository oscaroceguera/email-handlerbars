const template = {
  es: {
    name: 'one-cent-deposit-error-es',
    subject: 'Queremos hacer un depósito a tu cuenta',
  },
  data: {
    name: 'clip',
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets/one-cent-deposit',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
