const template = {

    es: {
        name: 'h2h-finance-disb-es',
        subject: 'Dispersión'
    },

    data: {
        process_type:'manual',
        dsp_type:'Fast',
        dsp_method: 'SWAP',
        number_of_payments: '9890001',
        total_amount_to_be_disbursed: '$2,259,201.42',
        dsp_method_commissions: 'NA',
        spei_commissions: '$180.85',
        total_comissions: '$180.85',
        iva: '$44.94',
        total_to_deposit: '$2,259,527.21',
        bank_account: '9890001',
        bank:'Banorte'
    }
};

module.exports = locale => {
    return {data: template.data,...template[locale]};
}
