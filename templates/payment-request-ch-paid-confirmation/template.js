const template = {
  es: {
    name: 'payment-request-ch-paid-confirmation-es',
    subject: 'Confirmación de pago',
  },
  data: {
    consumer_email: 'client@gmail.com',
    created_at: 'Miercoles, 18 de Septiembre',
    message: 'Comments the merchan has made will go here',
    amount: '$500',
    assetsUrl: 'https://747733430d60b80427a2d4f5d7d73c26.s3-us-west-2.amazonaws.com',
    merchant_name: 'Merchant name',
    paid_at: 'Miercoles, 18 de Septiembre',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
