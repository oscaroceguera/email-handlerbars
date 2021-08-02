const template = {
  es: {
    name: 'loans-preapproval-request-rejected-mrp-es',
    subject: '{{merchant_name}}, Credi Clip no ha sido aprobado',
  },
  data: {
    merchant_name: 'Brian'
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });