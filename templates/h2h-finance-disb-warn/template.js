const template = {

    es: {
        name: 'h2h-finance-disb-warn-es',
        subject: 'Aviso para fondear proceso automático'
    },

    data: {
        dsp_method: 'SWAP',
        time_to_disburse: '9:20',
        number_of_payments: 137,
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
