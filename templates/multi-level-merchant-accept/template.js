const template = {
  es: {
    name: 'multi-level-merchant-accept-es',
    subject: 'Aceptaste asociarte a {{parentMerchantName}} con éxito!',
  },
  data: {
    parentMerchantName: 'Clip Business Parent',
    childMerchantName: 'Child Clip Business',
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
