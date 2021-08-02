const template = {
  es: {
    name: 'catalog-pilot-invitation-confirmation-es',
    subject: '¡Confirmado, comienza a usar Catálogo Clip ahora!'
  },
  data: {
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.payclip.clip',
    appStoreLink: 'https://itunes.apple.com/app/id771245360?utm_source=CS_EMAIL&amp;utm_medium=ACT_EMAIL&amp;utm_campaign=NEWREG_NOACT&amp;utm_content=APPINSTALL',
  }
};

module.exports = locale => {
  return { data: template.data, ...template[locale] };
};
