const template = {
  es: {
    name: 'welcome-email-es',
    subject: '¡Bienvenido a Clip!',
  },
  data: {
    user: {
      name: 'Victor',
      role: {
        admin: true,
      },
      merchant_name: 'Nombre de la tienda',
    },
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
    deep_link: 'https://devclip.page.link/?link=https://dashboard.clip.mx?type%3Ddeeplink&apn=com.payclip.clip.dev&isi=771245360&ibi=com.payclip.Clip.xcode&efr=1'
  },
};

module.exports = (locale) => {
  return { data: template.data, ...template[locale] };
};
