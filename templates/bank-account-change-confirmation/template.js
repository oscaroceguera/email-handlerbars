const template = {
  es: {
    name: 'bank-account-change-validation-es',
    subject: '¡Confirmación de cambio de cuenta CLABE en Clip!',
  },
  data: {
    name: 'Juan Carlos Alvarado',
    bank_name: 'IXE',
    account_number: '234567890435678',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
