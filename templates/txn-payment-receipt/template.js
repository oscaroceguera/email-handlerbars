const template = {
  es: {
    name: 'txn-payment-receipt-es',
    subject: 'Recibo de pago Clip por: ${{amount}}',
  },
  data: {
    merchant_name: 'Payment Receipt test',
    merchant_id: '65eb8826-5848-4255-a5f7-14426a72f663',
    transaction_id: '6ac77f63-f1bf-4642-b95d-ee5b2718c93e',
    brand_img: 'receipt-cardbrand-mc.png',
    address1: '1234 Sesame Street',
    address2: 'Canada',
    colony: '12',
    municipality: 'Draper',
    state: 'UT',
    country: 'Mexico',
    postal_code: '84020',
    is_merchant: false,
    latitude: '33.812511',
    longitude: '-117.918976',
    amount: '12345.00',
    currency: 'MXN',
    card_no: '9112',
    order_id: '917957858659',
    auth_code: '222222',
    receipt_num: 'eJzO8CC',
    term: 6,
    tip: '5.00',
    amountnotip: '995.00',
    affiliation: '1234567',
    signature: 'https://s3.amazonaws.com/test.clip.com/signature/fa9311f5-8f04-4051-88e4-e38a39588d00.png',
    exp_date: '08/17',
    subtype: 'S',
    card_label: 'MASTERCARD',
    aid: 'A0000000032010',
    app_name: 'BANCOMER VISA',
    tvr: '8080008800',
    tsr: '6800',
    arqc: '************E434',
    datetime: 'May 4 2018, 11:02:35 AM',
    processor_name: 'CLIPMX',
    // issuer will only be shown for Prosa transactions
    issuer: 'Banamex',
    cart: {
      amount: '150.00',
      full_amount: '163.00',
      discount: '13.00',
      skus: [
        {
          name: 'Refresco Chico',
          amount: '15.00',
          full_amount: '18.00',
        },
        {
          name: 'Quesadilla de Pollo c/queso',
          amount: '28.00',
          full_amount: '30.00',
        },
        {
          name: 'Taco al Pastor',
          quantity: 5,
          amount: '35.00',
        },
        {
          name: 'Torta Cubana',
          amount: '50.00',
        },
        {
          name: 'Agua de Horchata Chica',
          amount: '15.00',
        },
        {
          name: 'Fan de leche',
          amount: '25.00',
        },
      ],
    },
  },
};

module.exports = locale => ({
  data: template.data,
  ...template[locale],
});
