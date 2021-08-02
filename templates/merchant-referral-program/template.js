const template = {
  es: {
    name: 'merchant-referral-program-es',
    subject: '¿Cero comisiones con Clip?🤔 ¡Claro que sí! 😎',
  },
  data: {
    benefitAmount: 150,
    referralCode: 'H7XMRWX',
    merchantDashboardURL: 'https://dev-dashboard.payclip.com',
    referredFreeCommission: '5,986',
    isFeeRefund: false,
    isCashAfterTpvExceeded: false,
    isCashAfter1stTransaction: true,
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
    isRemainder: true,
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
