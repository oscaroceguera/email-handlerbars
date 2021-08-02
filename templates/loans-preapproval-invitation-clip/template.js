const template = {
  es: {
    name: 'loans-preapproval-invitation-clip-es',
    subject: '{{merchant_name}}, tienes un Credi Clip pre aprobado 👏',
  },
  data: {
    merchant_name: 'Cesar',
    merchant_dashboard_url: 'https://dashboard.clip.mx/loans'
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });