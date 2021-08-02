const template = {
  es: {
    name: 'dependabot-report-es',
    subject: 'Dependencies Vulnerability Report',
  },
  data: {
    payload: "Vulnerability list"
  },
};

module.exports = (locale) => {
  return { data: template.data, ...template[locale] };
};
