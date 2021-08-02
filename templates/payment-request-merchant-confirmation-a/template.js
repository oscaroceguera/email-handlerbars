const template = {
  es: {
    name: 'payment-request-merchant-confirmation-a-es',
    subject: 'Confirmación de envío ✉️',
  },
  data: {
    expires_at: '2020-04-03',
    message: 'Comments from the merchant',
    consumer_email: 'client@gmail.com',
    created_at: '2020-04-03',
    comments: 'Comments from the merchant',
    amount: '$500',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
    merchant_name: 'Merchant name',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
