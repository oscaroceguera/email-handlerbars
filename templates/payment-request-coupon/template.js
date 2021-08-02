const template = {
  es: {
    name: 'payment-request-coupon-es',
    subject: "Nuevo look 💇‍♀️💇+ $250 pesos en un cupón de descuento para productos de la marca L'Oréal.",
  },
  data: {
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
    merchant_name: 'Merchant Name',
    payment_request_code: '568356123',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
