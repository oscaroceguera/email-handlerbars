const template = {
  es: {
    name: 'sales-order-received-es',
    subject: '🙌  ¡Gracias por tu compra en Clip!',
  },
  data: {
    order_number: 179107,
    total_amount: '$2,350.00',
    invoicing_url: 'https://3fjftv7t.r.eu-west-1.awstrack.me/L0/https:%2F%2Fdev-order-invoicing.payclip.com%3Ftoken=U1WGDJ-6JO85G-WKGGIM/1/0102016c2f414a76-5777ef0e-5a9d-4cfc-8588-af499b1aabbd-000000/B1ky9kL-Li0GzK-L2EBvoFLhMM0=120',
    customer: {
      first_name: 'Rogelio',
    },
    products: [
      {
        product_id: '0159',
        name: 'Clip Mini',
        quantity: 1,
        amount: '$50.00'
      },
      {
        product_id: '0108',
        name: 'Clip Plus 2',
        quantity: 2,
        amount: '$300.00'
      },
      {
        product_id: '0106',
        name: 'Clip Total',
        quantity: 1,
        amount: '$2,000.00'
      },
    ],
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
