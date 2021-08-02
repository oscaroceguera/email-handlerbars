const template = {
    es: {
        name: 'sales-order-shipped-es',
        subject: '🚚  ¡Tu pedido va en camino!',
    },
    data: {
        customer: {
            first_name: 'Juanito',
            last_name: 'Jones Jones',
        },
        orderInfo: {
            order_number: '65069',
            tracking_number: '33984992882',
            delivery_company: 'DHL',
            products: [
                {
                  product_id: '0002',
                  name: 'Clip Plus',
                  quantity: 2,
                  amount: '$200.00'
                },
                {
                  product_id: '0003',
                  name: 'Clip Pro',
                  quantity: 1,
                  amount: '$1,000.00'
                },
            ],
            total_amount: '$1,200.00',
        },
        shippedAddress: {
            address1: 'Fray Servando Teresa de Mier',
            address2: '438',
            colony: 'La Merced, Merced Balbuena 15810',
            state: 'Ciudad de México, CDMX',
            municipality: 'Venustiano Carranza',
        },
    },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
