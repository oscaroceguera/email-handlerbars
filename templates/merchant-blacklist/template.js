const template = {
  es: {
    name: 'merchant-blacklist-es',
    subject: '¡Reporte de Blacklist listo!',
  },
  data: {
    title: 'Blacklist OFAC',
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
    executionTypes: [
      "PROGRAMADA",
      "SEMANAL",
      "TODOS LOS MERCHANTS"
    ],
    attachmentsLinks: [
      {filename: "Link A", url: "https://www.google.com/doodles/ada-lovelaces-197th-birthday"},
      {filename: "Link B", url: "https://www.google.com/pacman"},
      {filename: "Link C", url: "https://www.google.com/doodles/celebrating-johann-sebastian-bach"}
    ]
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
