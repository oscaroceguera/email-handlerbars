const template = {
    es: {
        name: 'commissionist-request-rejected-es',
        subject: 'Lo sentimos. Tu solicitud ha sido rechazada.'
    },
    data: {
        request_number: '0000011',
        products: [
            { product: 'CLIP PRO', base_amount: '$3,999.00', qty: 2, total: '$7,998.00' },
            { product: 'CLIP SHIRT', base_amount: '$200.00', qty: 3, total: '$600.00' },
        ],
        total: '$8,598.00',
        comment: 'Rechazada por falta de stock.'
    },
};

module.exports = locale => {
    return { data: template.data, ...template[locale] };
};
