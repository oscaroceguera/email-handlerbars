const template = {
  es: {
    name: 'txn-codi-es',
    subject: 'Recibo de pago Clip por: ${{amount}}',
  },
  data: {
    merchant_name: 'Dummy Name',
    completed_at: ' 02 Julio 2019, 10:41:06 A.M.',
    address1: 'Anillo Periférico 232',
    address2: 'Col. Agrícola Pantitlán',
    municipality: 'Del. Iztacalco',
    postal_code: '08100',
    state: 'Ciudad de México',
    copyright_year: '2019',
    amount: '59.00',
    status: 'Pagado',
    tracking_key: '1234567890',
    clabe: '***************123',
    assets_url: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
