const template = {
  es: {
    name: 'opt-blue-es',
    subject: '¡Reporte de OPTBLUE listo!',
  },
  data: {
    title: 'OPTBLUE AMEX',
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
    disputesList: [
      {filename: "Link A", url: "https://www.google.com/doodles/ada-lovelaces-197th-birthday"},
      {filename: "Link B", url: "https://www.google.com/pacman"},
      {filename: "Link C", url: "https://www.google.com/doodles/celebrating-johann-sebastian-bach"}
    ],
    chargebacksList: [
      {filename: "Link A", url: "https://www.google.com/doodles/ada-lovelaces-197th-birthday"},
      {filename: "Link B", url: "https://www.google.com/pacman"},
      {filename: "Link C", url: "https://www.google.com/doodles/celebrating-johann-sebastian-bach"}
    ]
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
