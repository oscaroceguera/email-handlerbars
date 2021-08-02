const template = {
    es : {
        name : 'h2h-pymnt-fail-merchant-es',
        subject: 'Enviamos tu depósito y no logró aplicarse'
    },
    data : {
        merchantName: 'Abarrotes la Chiki',
        reportId: 'LQDTX3P3V',
        reportDate: '2018-05-25',
        errorDescription:'sobre limite',
        executionDate:'2018-05-25'
    }
};

module.exports = locale => {
    return {data: template.data,...template[locale]};
}