const template = {
    es: {
      name: 'pymnts-topup-reconciliation-finance-es',
      subject: 'Clip de Recargas: Informe de Reconciliación y Factura: {{reportPeriod}}',
    },
    data: {
      reportPeriod: 'November 1-15, 2018'
    }
  };
  
  module.exports = locale => {
    return { data: template.data, ...template[locale] };
  }
  