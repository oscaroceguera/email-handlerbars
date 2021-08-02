const template = {
  es: {
    name: 'loans-preapproval-invitation-mrp-button-at-middle-es',
    subject: '{{merchant_name}}, tienes un Credi Clip pre aprobado 👏',
  },
  data: {
    merchant_name: 'Jose Delgado',
    pre_approval_value: '18,090.00',
    expiration_date_local: '18 de Diciembre de 2019',
    merchant_dashboard_url: 'https://deploy-preview-621--dev-merchant-dashboard.netlify.com/loans'
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
