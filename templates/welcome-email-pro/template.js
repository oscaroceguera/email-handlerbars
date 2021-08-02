const template = {
  es: {
    name: 'welcome-email-pro-es',
    subject: '¡Bienvenido a Clip! 💳👏🏻🎉',
  },
  data: {
    user: {
      name: 'Alina',
    },
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
    deep_link: 'https://devclip.page.link/?link=https://dashboard.clip.mx?type%3Ddeeplink&apn=com.payclip.clip.dev&isi=771245360&ibi=com.payclip.Clip.xcode&efr=1'
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
