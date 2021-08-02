const template = {
    es: {
        name: 'h2h-finance-dsb-paid-error-review-approval-es',
        subject: 'Confirmación de cambio de estatus'
    },
    data: {
        username: 'username',
        dsb_list: [
            { report_id: 'REPORT_ID_1', amount: 125.50, status: 'PAID', report_date: '2021-11-06' },
            { report_id: 'REPORT_ID_2', amount: 125678.26, status: 'PAID', report_date: '2021-11-06'},
            { report_id: 'REPORT_ID_3', amount: 85678.70, status: 'PAID', report_date: '2021-11-06' },
        ],
    }
};

module.exports = locale => {
    return {data: template.data, ...template[locale]};
}
