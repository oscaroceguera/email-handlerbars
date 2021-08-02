const template = {
    es: {
        name: 'commissionist-comodato-expiration-es',
        subject: 'El plazo de pago de tu solicitud ha expirado.'
    },
    data: {
        request_number: '0001',
        products: [
            { product: 'CLIP PRO', base_amount: '$3,999.00', qty: 2, total: '$7,998.00' },
            { product: 'CLIP SHIRT', base_amount: '$200.00', qty: 3, total: '$600.00' },
        ],
        total: '$8,598.00',
        remaining_total: '$3,400.00',
        paid_total: '$2,000.00',
        request_url: 'https://dev-comis.payclip.com/requests/123',
    },
};

module.exports = locale => {
    return { data: template.data, ...template[locale] };
};
