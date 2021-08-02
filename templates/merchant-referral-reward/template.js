const template = {
  es: {
    name: 'merchant-referral-reward-es',
    subject: '¡Felicidades tu referido alcanzó su meta! Recibirás ${{benefitAmount}}',
  },
  data: {
    benefitAmount: 500,
    mustTransact: 2000,
    isFeeRefund: false,
    isCashAfterTpvExceeded: false,
    isCashAfter1stTransaction: true,
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
    deepLink:
      'https://devclip.page.link/?link=https://dashboard.clip.mx?type%3Ddeeplink&apn=com.payclip.clip.dev&isi=771245360&ibi=com.payclip.Clip.xcode&efr=1',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
