const template = {
  es: {
    name: 'loans-preapproval-request-confirmation-mrp-es',
    subject: 'Hola {{merchant_name}}, estamos revisando tu solicitud.',
  },
  data: {
    merchant_name: 'Brian'
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });