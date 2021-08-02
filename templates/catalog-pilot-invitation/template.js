const template = {
  es: {
      name: 'catalog-pilot-invitation-es',
      subject: '¡Controla mejor tus productos con Catálogo Clip!'
  },
  data: {
    confirmationLandingPageURL: 'https://dev-dashboard.payclip.com/catalog/pilot-invitation'
  },
};

module.exports = locale => {
  return { data: template.data, ...template[locale] };
};
