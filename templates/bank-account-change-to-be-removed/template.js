const template = {
  es: {
    name: 'bank-account-change-to-be-removed-es',
    subject: '¡El cambio de tu cuenta CLABE en Clip, está en espera!',
  },
  data: {
    name: 'Sahadad',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
