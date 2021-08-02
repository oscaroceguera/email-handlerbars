const template = {
    es: {
        name: 'h2h-finance-automatic-disb-no-payments-es',
        subject: 'Sin pagos a dispersar'
    },
    data: {
    }
};

module.exports = locale => {
    return {data: template.data,...template[locale]};
}
