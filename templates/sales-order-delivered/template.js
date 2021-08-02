const template = {
  es: {
    name: 'sales-order-delivered-es',
    subject: '📦  ¡Tu pedido fue entregado!',
  },
  data: {
    customer: {
      first_name: 'Laura',
      last_name: 'Wolf',
    },
    orderInfo: {
      order_number: '65069',
      tracking_number: '33984992882',
      products: [
        {
          product_id: '0159',
          name: 'Clip Mini',
          quantity: 3,
          amount: '$150.00'
        },
        {
          product_id: '0106',
          name: 'Clip Total',
          quantity: 1,
          amount: '$2,000.00'
        },
      ],
      total_amount: '$2,150.00',
    },
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
