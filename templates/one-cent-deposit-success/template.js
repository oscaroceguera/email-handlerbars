const template = {
  es: {
    name: 'one-cent-deposit-success-es',
    subject: 'Hicimos un depósito a tu cuenta',
  },
  data: {
    name: 'Clip',
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets/one-cent-deposit',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
