const template = {
  es: {
    name: 'multi-level-merchant-request-es',
    subject: 'Acepta los terminos y condiciones para asociarte a {{parentMerchantName}} 🔐',
  },
  data: {
    parentMerchantName: 'Clip Business Parent',
    childMerchantName: 'Child Clip Business',
    acceptTermsAndCondLink: '#',
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
    assetsUrlIcons: 'https://747733430d60b80427a2d4f5d7d73c26.s3-us-west-2.amazonaws.com/',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
