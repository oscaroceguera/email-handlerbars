const template = {
  es: {
    name: 'sales-store-payment-es',
    subject: '🏦 Así puedes realizar tu pago con Clip Agente',
  },
  data: {
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
    commiFirstName: 'commi_first_name',
    amount: '29,999.00',
    deadline: '27 Mar 2020',
    reference: '123456ABCDEFGHIJLKMNOPQRSTVW010000',
    barcodeUrl: 'https://sandbox-api.openpay.mx/barcode/123456ABCDEFGHIJLKMNOPQRSTVW010000?width=1&height=45',
    orderDate: '25 de marzo de 2020  06:10 p.m.',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
