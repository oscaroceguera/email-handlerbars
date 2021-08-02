const template = {
  es: {
    name: 'commissionist-delivered-es',
    subject: 'Tu orden ha sido entregada'
  },
  data: {
    order_number: '0001',
    carrier: 'DHL',
    shipping_address: 'Miguel Laurent 43 3, Tlacoquemecatl, Benito Juarez, CDMX, CDMX, Mexico',
    tracking_number: '1234567891',
    tracking_link: 'http://www.dhl.com.mx/es/express/rastreo.html?AWB=1234567891&brand=DHL',
    products: [
      { product: 'CLIP PRO', base_amount: '$3,999.00', qty: 2, total: '$7,998.00' },
      { product: 'CLIP SHIRT', base_amount: '$200.00', qty: 3, total: '$600.00' },
    ],
    total: '$8,598.00',
  },
};

module.exports = locale => {
  return { data: template.data, ...template[locale] };
};
