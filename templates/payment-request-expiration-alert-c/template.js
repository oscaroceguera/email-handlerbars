const template = {
  es: {
    name: 'payment-request-expiration-alert-c-es',
    subject: 'Tu enlace ha expirado 😔',
  },
  data: {
    consumer_email: 'client@gmail.com',
    expires_at: '2020-04-03',
    amount: '$500',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
    payment_request_code: '5WDH7HDM',
    created_at: '2020-04-04',
    merchant_id: '8eed2010-b9cf-403a-871b-f2546a09a14b',
    request_number: '6',
    form_url: 'https://dev-completa-tu-pago.payclip.com',
	merchant_name: 'Merchant name',
	message: 'Papas y cerveza',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
