const template = {

    es: {
        name: 'h2h-finance-automatic-disb-banorte-es',
        subject: 'Dispersión Automática'
    },

    data: {
        number_of_payments: {
            big_decimal: '137',
            mc: {
                precision: 34,
                rounding_mode: 'HALF_EVEN'
            },
            computed_hash_code: 1565550863
        },
        total_amount_to_be_disbursed: '$2,259,201.42',
        banorte_banorte_commissions: '$180.85',
        banorte_commissions: '$280.85',
        banorte_total_comissions: '$471.70',
        swap_iva: '$40.55',
        banorte_iva: '$44.94',
        banorte_total_to_deposit: '$2,259,527.21',
        banorte_bank_account: '9890001'
    }
};

module.exports = locale => {
    return {data: template.data,...template[locale]};
}
