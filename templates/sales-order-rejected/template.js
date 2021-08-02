const template = {
  es: {
    name: 'sales-order-rejected-es',
    subject: 'Tu pedido ha sido rechazado',
  },
  data: {
    ingramId: '1234567',
    netsuiteId: '2005617',
    order: {
      statusCode: 'HVF',
      description: 'Order Header Validation Failed; Details are : 11Mandatory Field:TextValue is missing',
      lines: [{
        statusCode: 'LVF',
        statusDescription: 'Line Validation Failed; : Please check  LineText is not valid',
        itemName: 'PLCAJA',
        amount: 473.28,
        quantity: '1',
      },
      {
        statusCode: 'LR',
        statusDescription: 'Line Rejected; details are :  Customer - No Backorders',
        itemName: 'PLCAJA',
        amount: 800.00,
        quantity: '10',
      }],
    },
    shippingAddress: {
      address1: 'Amado Nervo 2200',
      address2: 'Piso 4',
      colony: 'Jardines del sol',
      state: 'Jalisco',
      municipality: 'Zapopan',
    },
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
