const template = {
    es: {
        name: 'commissionist-approval-required-es',
        subject: 'Una nueva venta necesita ser aprobada.'
    },
    data: {
        request_number: '0000011',
        products: [
            { product: 'CLIP PRO', base_amount: '$3,999.00', qty: 2, total: '$7,998.00' },
            { product: 'CLIP SHIRT', base_amount: '$200.00', qty: 3, total: '$600.00' },
        ],
        total: '$8,598.00',
        type: 'comodato',
        approve_url: 'https://dev-commissionist.payclip.com/request/approve/123',
    },
};

module.exports = locale => {
    return { data: template.data, ...template[locale] };
};
