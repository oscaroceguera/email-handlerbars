const template = {
    es: {
        name: 'mdr-update-es',
        subject: 'Cambios en el MDR'
    },
    data: {
        merchant_email: 'sarai@payclip.com',
    },
};

module.exports = locale => {
    return { data: template.data, ...template[locale] };
};
