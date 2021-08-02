const template = {
  es: {
    name: 'merchant-referral-qualification-successful-es',
    subject: 'Comienza a vender y ganar más con Clip 💰',
  },
  data: {
    benefitAmount: 500,
    referredFreeCommission: 5000,
    isFeeRefund: false,
    isCashAfterTpvExceeded: false,
    isCashAfter1stTransaction: !false,
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
    deepLink: 'https://devclip.page.link/?link=https://dashboard.clip.mx?type%3Ddeeplink&apn=com.payclip.clip.dev&isi=771245360&ibi=com.payclip.Clip.xcode&efr=1'
  }
};

module.exports = locale => {
  return { data: template.data, ...template[locale] };
}
