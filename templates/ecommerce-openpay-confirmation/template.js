const template = {
  es: {
    name: 'ecommerce-openpay-confirmation-es',
    subject: '{{subject}}',
  },
  data: {
    amount: 749,
    firstName: 'Test',
    barcodeUrl: 'https://s3.amazonaws.com/cash_payment_barcodes/sandbox_reference.png',
    reference: '0000 20TRT 3PGJ AWHQ HPERT JOQJ0 0050 06',
    linkUpload: 'https://www.openpay.mx/wp-content/uploads/2021/04/eBook-openpay.pdf',
    validDate: '10/10/19',
    validTime: '10:50 PM',
    products: [{ "type": "READER", "quantity": 1, "calculatedAmount": 1908, "productId": "0003", "productName": "CLIP PRO", "product_id": "0003", "productQuantity": 1, "freeDevices": 0 }],
    subject: 'Completa tu compra con Openpay',
    shopAppLink: 'https://dev-shop.payclip.com/',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
  },
};

module.exports = (locale) => {
  return { data: template.data, ...template[locale] };
};
