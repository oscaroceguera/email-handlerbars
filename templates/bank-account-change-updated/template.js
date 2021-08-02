const template = {
  es: {
    name: 'bank-account-change-updated-es',
    subject: '¡Tu cuenta CLABE en Clip, ha sido actualizada!',
  },
  data: {
    date: new Date().toDateString(),
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
