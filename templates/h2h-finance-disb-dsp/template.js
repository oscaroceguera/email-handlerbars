const template = {
    es: {
        name: 'h2h-finance-disb-dsp-es',
        subject: 'Método de dispersión'
    },
    data: {
        dsp_method: 'Banorte'
    }
};

module.exports = locale => {
    return {data: template.data,...template[locale]};
}