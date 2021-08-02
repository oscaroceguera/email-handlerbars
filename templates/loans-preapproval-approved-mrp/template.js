const template = {
  es: {
    name: 'loans-preapproval-approved-mrp-es',
    subject: 'Tu solicitud de Credi Clip esta aprobada 👏',
  },
  data: {
    merchant_name: 'Brian',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
