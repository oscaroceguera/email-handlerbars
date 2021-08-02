const template = {
  es: {
    name: 'welcome-email-agent-es',
    subject: '¡Bienvenido a Clip! 💳👏🏻🎉',
  },
  data: {
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
  },
};

module.exports = (locale) => ({ data: template.data, ...template[locale] });
