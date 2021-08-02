const template = {
  es: {
    name: 'txn-topup-consumer-pin-es',
    subject: '¡Gracias por usar Recargas Clip!',
  },
  data: {
    merchant_name: "U",
    address1: "Ttttff",
    address2: "",
    colony: "Del Valle Centro",
    municipality: "Benito Juarez",
    state: "Ciudad de Mexico",
    country: "Mexico",
    postal_code: "03100",
    amount: 50,
    iva: 8.0,
    amount_no_iva: 42.0,
    card_no: "5395",
    order_id: "27043",
    auth_code: null,
    receipt_num: "TU-1O0WqP6",
    type: "CARD",
    brand: "MASTERCARD",
    status_code: 1,
    carrier_name: "Telcel",
    phone_number: "1111114267",
    short_phone_number: "4267",
    folio: "c6077f",
    affiliation: "12345678",
    signature: "https://s3.amazonaws.com/test.clip.com/signature/topups/f9bfe7aa-4d07-4cb4-8c8c-2e0b38439bbb.svg",
    brand_img: 'receipt-cardbrand-mc.png',
    card_label: "MasterCard",
    aid: "A0000000041010",
    app_name: "MasterCard",
    tvr: "0080008000",
    tsr: "E800",
    arqc: "************F2B4",
    datetime: "May 4 2018, 11:02:35 AM",
    subtype: "P",
    carrier: {
      service_number: "01-800-7105-687",
      service_code: "*264"
    }
  }
};

module.exports = locale => {
  return { data: template.data, ...template[locale] };
};
