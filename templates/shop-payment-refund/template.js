const template = {
  es: {
    name: 'shop-payment-refund-es',
    subject: '⚠️Tu pago fue declinado, pero ya te reembolsamos tu dinero 💳',
  },
  data: {
    shopAppLink: 'https://dev-shop.payclip.com',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
  },
};

module.exports = (locale) => {
  return { data: template.data, ...template[locale] };
};
