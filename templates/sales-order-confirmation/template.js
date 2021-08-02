const template = {
  es: {
    name: 'sales-order-confirmation-es',
    subject: '🏦 Así puedes realizar tu pago con Clip Agente',
  },
  data: {
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
    commiFirstName: 'commi_first_name',
    amount: '29,999.00',
    deadline: '14 Mar 2020',
    reference: '12345678901234567890',
    CLABE: '01234567890123456',
    concept: '0123456789012340056',
    bank: 'BBVA',
    beneficiary: 'PAYCLIP, S. DE R.L. DE C.V.',
    CIE: '1422286',
    description: 'Bank deposit charge: COMM000000',
  },
};

module.exports = locale => {
  return { data: template.data, ...template[locale] };
};
