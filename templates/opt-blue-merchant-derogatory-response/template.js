const template = {
  es: {
    name: 'opt-blue-merchant-derogatory-response-es',
    subject: 'Alta de merchant rechazada por AMEX OptBlue',
  },
  data: {
    email_date: '2020-06-10',
    merchant: {
      merchant_id: 'e43957ad-0d08-4a16-85f4-d02a19da74aa',
      merchant_name: 'Fixi bikes',
      email: 'bikes@example.com',
      seller_id: '32145',
      created_at: '2020-01-01',
      requested_at: '2020-06-10',
      industry_name: 'Estaciones de servicio, gasolinerias.',
      industry_mcc: '8382645',
    },
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
