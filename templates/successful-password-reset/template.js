const template = {
  es: {
    name: 'successful-password-reset-es',
    subject: 'Cambiaste tu contraseña Clip con éxito 🔐',
  },
  data: {
    firstName: 'Daniel',
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
