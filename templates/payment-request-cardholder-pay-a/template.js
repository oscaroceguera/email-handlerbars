const template = {
  es: {
    name: 'payment-request-cardholder-pay-a-es',
    subject: 'Solicitud de pago ',
  },
  data: {
    message: 'Comments from the merchant',
    payment_request_code: '#568356123',
    payment_request_id: '289239834msbdmnbcsaajhd',
    created_at: '2020-04-03',
    amount: '500',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
    form_url: 'https://dev-completa-tu-pago.payclip.com',
    merchant_name: 'la fondita',
    merchant_email: 'merchant@test.com',
    mobile: '5551234567',
    address1: 'Mariano Abasolo 123',
    address2: '600',
    colony: 'Arenal',
    municipality: 'Azcap',
    state: 'CDMX',
    postalCode: '12340',
    expires_at: '15 de agosto',
  },
};

module.exports = (locale) => {
  return { data: template.data, ...template[locale] };
};
