const template = {
  es: {
    name: 'txn-payment-refunded-es',
    subject: 'Tu cargo de ${{amount}} fue cancelado con éxito',
  },
  data: {
    merchant_name: 'Payment cancel test',
    merchant_id: '65eb8826-5848-4255-a5f7-14426a72f663',
    brand_img: 'receipt-cardbrand-mc.png',
    brand: 'Mastercard',
    address1: '1234 Sesame Street',
    address2: 'Canada',
    colony: '12',
    municipality: 'Draper',
    state: 'UT',
    country: 'Mexico',
    postal_code: '84020',
    is_merchant: false,
    amount: '12345.00',
    card_no: '9112',
    order_id: '917957858659',
    receipt_num: 'eJzO8CC',
    amountnotip: '995.00',
    reference_amount: '40.00',
    reference_receipt_num: 'AQWER',
    is_partial: true,
    payment_date: 'Mar 26 2020',
    payment_time: '11:02:35 AM',
    auth_code: '222222',
    app_name: 'Debit MasterCard',
    affiliation: '79274',
    issuer: 'Banamex',
  },
};

module.exports = locale => ({
  data: template.data,
  ...template[locale],
});
