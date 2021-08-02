const template = {
  es: {
    name: 'top-account-kpi-es',
    subject: 'Tu Cuenta - actualización especial de Clip.'
  },
  data: {
    currentYearTurnover: '$7.5M',
    yearlyTurnoverChangePercentage: 52,
    yearlyTurnoverChangeDifferenceIsPositive: true,
    currentMonthTurnover: '$1.8M',
    monthlyTurnoverChangePercentage: 24,
    monthlyTurnoverChangeDifferenceIsPositive: false,
    currentYearTransactions: 333,
    currentMonthTransactions: 83,
    body: 'Gracias por escoger Clip como tu medio para aceptar pagos con tarjeta por lo tanto tus necesidades son nuestra prioridad. Te hemos preparado un informe sobre tu cuenta Clip. Por favor tómate unos minutos para revisarlo. Si deseas ver más información, incluyendo gráficos y tablas, haz clic en el botón a continuación.',
    moreLinkURL: 'https://devmd-client.payclip.com/metrics'
  }
};

module.exports = locale => {
  return { data: template.data, ...template[locale] };
};
