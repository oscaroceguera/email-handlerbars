const template = {
  es: {
    name: 'shop-app-remarketing-1-D-es',
    subject: 'No dejes para mañana lo que puedes renovar hoy 🧡',
  },
  data: {
    totalAmount: 749,
    deviceName: 'tu Clip Plus',
    cart: [{ 'quantity': 1, 'id': '0106', 'name': 'CLIP TOTAL', 'price': 4999, 'type': 'READER', 'activeSalePrice': 499, 'activePrice': 499 },{'quantity': 3, 'id': '0108', 'name': 'CLIP PLUS 2', 'price': 749, 'type': 'READER', 'activeSalePrice': 499, 'activePrice': 499}, {'quantity': 1, 'id': '0003', 'name': 'CLIP PRO', 'price': 3999, 'type': 'READER', 'activeSalePrice': 1999, 'activePrice': 1999}],
    subject: 'Duplica tus ganancias',
    shopAppLink: 'https://dev-shop.payclip.com?remarketingId=khdsakjsa322',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
    unsubscribeLink: 'https://dev-shop.payclip.com/unsubscribe?id=khdsakjsa322',
    firstName: 'Test'
  },
};

module.exports = (locale) => {
  return { data: template.data, ...template[locale] };
};
