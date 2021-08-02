const template = {
    es: {
        name: 'sales-order-shipped-99-es',
        subject: 'ENVÍO CLIP - Tu pedido va en camino  🚚',
    },
    data: {
        customer: {
            first_name: 'Clip User',
            last_name: 'Jones',
        },
        orderInfo: {
            order_number: '65069',
            tracking_number: '33984992882',
            delivery_company: '99MIN',
        },
        shippedAddress: {
            address1: 'Castilla',
            address2: '21 int 303',
            colony: 'Yo',
            state: 'yoni',
            municipality: 'yo',
        },
    },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
