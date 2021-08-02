const template = {
  es: {
    name: 'reset-password-es',
    subject: 'Restablece tu contraseña Clip aquí 🔐',
  },
  data: {
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
    resetPasswordLink: '#',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
