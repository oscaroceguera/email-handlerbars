const template = {
  es: {
    name: 'merchant-referral-code-es',
    subject: '¡Bienvenido! Aprende más sobre el programa de Recompensa por Recomendación.',
  },
  data: {
    benefitAmount: 150,
    mustTransact: 1000,
    referralCode: 'TXW39N1',
    merchantDashboardURL: 'https://dev-dashboard.payclip.com'
  }
};

module.exports = locale => {
  return { data: template.data, ...template[locale] };
}
