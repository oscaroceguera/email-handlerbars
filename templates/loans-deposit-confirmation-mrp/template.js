const template = {
  es: {
    name: 'loans-deposit-confirmation-mrp-es',
    subject: '{{merchant_name}}, aviso de déposito Credi Clip',
  },
  data: {
    merchant_name: 'Brian',
    deposit_value: '18,090.00',
    payback_value: '20,2608.00',
    interest_percent: '12'
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });