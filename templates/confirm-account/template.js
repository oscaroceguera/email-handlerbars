const template = {
  es: {
    name: 'confirm-account-es',
    subject: '¡Ya casi! Confirma tu correo para validar la cuenta 🙌',
  },
  data: {
    firstName: 'Daniel',
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
    confirmationLink: '#',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
