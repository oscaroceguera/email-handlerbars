const template = {
  es: {
    name: 'sales-order-delivery-failure-es',
    subject: '😕  No logramos entregar tu pedido',
  },
  data: {
    customer: {
      first_name: 'Cuitláhuac',
      last_name: 'Moctezume',
    },
    orderInfo: {
      order_number: '65069',
      tracking_number: '33984992882',
      dhlMessage: 'Domicilio incorrecto (Requerimos referencias)',
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
