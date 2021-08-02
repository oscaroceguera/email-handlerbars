const template = {
  es: {
    name: 'welcome-email-leads-es',
    subject: '¡Estás a un paso de ser Clip Agente!',
  },
  data: {
    name: 'Hector',
    url: 'https://www.convierteteenclipagente.com/f8a76997-7396-11ea-8398-020b61dcd8cc',
  },
};

module.exports = (locale) => ({ data: template.data, ...template[locale] });
