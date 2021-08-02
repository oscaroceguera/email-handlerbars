const template = {
  es: {
    name: 'commissionist-office-delivery-es',
    subject: 'Tu orden esta lista para recoger'
  },
  data: {
    order_number: '0001',
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
