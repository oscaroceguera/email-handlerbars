const template = {
    
    es: {
        name : 'h2h-pymt-sent-merchant-es',
        subject : 'Instrucción de pago solicitada'
    }, 
    data: {
        merchantName: 'Abarrotes la Chiki',
        reportId: 'LQDTX3P3V',
        reportDate: '2018-05-25',
        bankAccount:'014180200084203115',
        bankAccountName:'Banco Santander, S.A.',
        amount:'1,818.90',
        trakingKey:'12392-9888'
    }
};

module.exports = locale => {
    return {data : template.data,...template[locale]}
}