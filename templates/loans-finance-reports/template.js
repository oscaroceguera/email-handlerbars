const template = {
  es: {
    name: 'loans-finance-reports-es',
    subject: '{{subject}}',
  },
  data: {
    subject: 'Finance Report',
    report_url: 'file_generated.csv',
    report_message: 'Report created.'
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
