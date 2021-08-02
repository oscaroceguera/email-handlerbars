const template = {

    es: {
        name: 'h2h-finance-automatic-disb-es',
        subject: 'Dispersión Automática'
    },

    data: {
        dsp_type:'Fast',
        dsp_method: 'SWAP',
        number_of_payments: {
            big_decimal: '137',
            mc: {
                precision: 34,
                rounding_mode: 'HALF_EVEN'
            },
            computed_hash_code: 1565550863
        },
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
