const template = {
  es: {
    name: 'shop-payment-review-es',
    subject: '👋 Ya recibimos tu pedido. Pronto recibirás tu lector Clip.',
  },
  data: {
    shopAppLink: 'https://dev-shop.payclip.com',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
  },
};

module.exports = (locale) => {
  return { data: template.data, ...template[locale] };
};
