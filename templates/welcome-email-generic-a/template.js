const template = {
  es: {
    name: 'welcome-email-generic-a-es',
    subject: 'Ahora eres parte de la familia Clip. 🤩',
  },
  data: {
    user: {
      name: 'Alina',
    },
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
    deep_link: 'https://devclip.page.link/?link=https://dashboard.clip.mx?type%3Ddeeplink&apn=com.payclip.clip.dev&isi=771245360&ibi=com.payclip.Clip.xcode&efr=1',
    merchant_welcome_video: 'https://pre-clip-clientes.snippet.es/fa049e63-5721-11ea-8fa7-02a9c5d6ff00',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
