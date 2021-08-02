const template = {

    es: {
        name: 'h2h-no-bank-account-merchant-es',
        subject: 'No contamos con tu cuenta bancaria'
    },
    data: {
        merchantName: 'Abarrotes la Chiki',
        reportId: 'LQDTX3P3V',
        reportDate: '2018-05-25',
    }

};

module.exports = locale => {
    return {data: template.data,...template[locale]};
}