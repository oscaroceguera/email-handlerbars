const template = {
  es: {
    name: 'payment-request-merchant-paid-confirmation-es',
    subject: 'Confirmación de pago',
  },
  data: {
    consumer_email: 'client@gmail.com',
    message: 'Comments from the merchant',
    amount: '$500',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
    merchant_name: 'Merchant name',
    paid_at: '2020-04-03',
    payment_request_code: '568356123',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
