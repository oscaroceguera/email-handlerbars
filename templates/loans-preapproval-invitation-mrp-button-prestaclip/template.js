const template = {
  es: {
    name: 'loans-preapproval-invitation-mrp-button-prestaclip-es',
    subject: '{{merchant_name}}, tienes un Presta Clip pre aprobado 👏',
  },
  data: {
    merchant_name: 'Clodoaldo Delgado', 
    pre_approval_value: '19,090.00',
    expiration_date_local: '19 de Diciembre de 2019',
    merchant_dashboard_url: 'https://deploy-preview-621--dev-merchant-dashboard.netlify.com/loans'
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
