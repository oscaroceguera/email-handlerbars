const template = {
  es: {
    name: 'bank-account-change-validation-es',
    subject: '¡Verifica tu cambio de cuenta CLABE en Clip!',
  },
  data: {
    name: 'Juan Carlos Alvarado',
    bank_name: 'IXE',
    account_number: '234567890435678',
    validate_url: 'https://dev-dashboard.payclip.com/bank_accounts/validate/0539875f7b3141ad834dafdd6f93d6f8',
    cancel_url: 'https://dev-dashboard.payclip.com/bank_accounts/cancel/0539875f7b3141ad834dafdd6f93d6f8',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
