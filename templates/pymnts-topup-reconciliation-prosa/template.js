const template = {
    es: {
      name: 'pymnts-topup-reconciliation-prosa-es',
      subject: 'Recargas Clip: Informe de Reconciliación: {{reportPeriod}}',
    },
    data: {
      reportPeriod: 'November 1-15, 2018'
    }
  };
  
  module.exports = locale => {
    return { data: template.data, ...template[locale] };
  }
  