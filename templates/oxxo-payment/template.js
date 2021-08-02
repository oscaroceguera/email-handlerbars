const template = {
  es: {
    name: 'oxxo-payment-es',
    subject: '{{subject}}',
  },
  data: {
    amount: 749,
    validDate: '10/10/19',
    validTime: '10:50 PM',
    reference: '9800 0006 6038 53',
    formatedReference: ["9800", "0006", "1588", "47"],
    barcodeUrl: 'https://s3.amazonaws.com/cash_payment_barcodes/sandbox_reference.png',
    firstName: 'Test',
    products: [{ "type": "READER", "quantity": 1, "calculatedAmount": 1908, "productId": "0003", "productName": "CLIP PRO", "product_id": "0003", "productQuantity": 1, "freeDevices": 0 }],
    dayCero: true,
    dayOne: false,
    dayFive: false,
    dayEight: false,
    subject: 'Completa tu compra con OXXO Pay',
    shopAppLink: 'https://dev-shop.payclip.com/',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
  },
};

module.exports = (locale) => {
  return { data: template.data, ...template[locale] };
};
