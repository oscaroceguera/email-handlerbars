const template = {
  es: {
    name: 'shop-app-remarketing-3-C-es',
    subject: '¡Tenemos un Clip para cada negocio! 🤑',
  },
  data: {
    totalAmount: 749,
    deviceName: 'tu Clip Plus',
    cart: [{'quantity': 3, 'id': '0108', 'name': 'CLIP PLUS 2', 'price': 749, 'type': 'READER', 'activeSalePrice': 499, 'activePrice': 499}, {'quantity': 1, 'id': '0003', 'name': 'CLIP PRO', 'price': 3999, 'type': 'READER', 'activeSalePrice': 1999, 'activePrice': 1999}],
    subject: '¡Con Clip crece tus ventas!',
    shopAppLink: 'https://dev-shop.payclip.com?remarketingId=khdsakjsa322',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
    unsubscribeLink: 'https://dev-shop.payclip.com/unsubscribe?id=khdsakjsa322'
  },
};

module.exports = (locale) => {
  return { data: template.data, ...template[locale] };
};
