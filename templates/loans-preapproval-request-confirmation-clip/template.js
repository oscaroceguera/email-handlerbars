const template = {
  es: {
    name: 'loans-preapproval-request-confirmation-clip-es',
    subject: 'Hola {{merchant_name}}, estamos revisando tu solicitud.',
  },
  data: {
    merchant_name: 'Eric',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
