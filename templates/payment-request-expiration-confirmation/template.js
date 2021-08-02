const template = {
  es: {
    name: 'payment-request-expiration-confirmation-es',
    subject: 'Expiración de solicitud',
  },
  data: {
    consumer_email: 'client@gmail.com',
    expires_at: '2020-04-03',
    amount: '$500',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
    payment_request_code: '5WDH7HDM',
    created_at: '2020-04-03',
    merchant_id: '8eed2010-b9cf-403a-871b-f2546a09a14b',
    request_number: '26',
    form_url: 'https://dev-completa-tu-pago.payclip.com',
    merchant_name: 'Merchant name',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
