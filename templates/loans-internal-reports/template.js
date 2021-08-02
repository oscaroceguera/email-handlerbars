const template = {
  es: {
    name: 'loans-internal-reports-es',
    subject: '{{subject}}',
  },
  data: {
    subject: 'Finance Report',
    report_url: 'http://www.google.com',
    report_message: 'Click here to download your report.'
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
