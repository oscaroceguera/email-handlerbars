const template = {
  es: {
    name: 'agp-subaffiliation-monitor-dat-files-es',
    subject: '{{date_string}} Archivos pendientes de alta de subafiliación AGP',
  },
  data: {
    date_string: '20200527',
    files_count: 3,
    from_name: 'Ignacio Betancourt',
    from_role: 'Software Engineer',
    from_phone: '5512345678',
    files: [
      {
        url: 'qwerty',
        filename: 'qwerty',
      },
      {
        url: 'qwerty',
        filename: 'qwerty',
      },
    ],
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
