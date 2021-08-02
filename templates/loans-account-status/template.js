const template = {
  es: {
    name: 'loans-account-status-es',
    subject: '{{merchant_name}} conoce el saldo al día de tu Presta Clip',
  },
  data: {
    merchant_name: 'Roger',
    merchant_dashboard_url: 'https://dashboard.clip.mx/loans/myprestaclip'
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
