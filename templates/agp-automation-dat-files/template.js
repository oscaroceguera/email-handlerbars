const template = {
  es: {
    name: 'agp-automation-dat-files-es',
    subject: '{{date_string}} Altas AGP',
  },
  data: {
    date_string: '20190813',
    files_count: 7,
    from_name: 'Job González',
    from_role: 'Risk Modeling Specialist',
    from_phone: '5520201010',
    files: [
      {
        url: 'asdsad',
        filename: 'asdasd',
      },
      {
        url: 'asdsad',
        filename: 'asdasd',
      },
    ],
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
