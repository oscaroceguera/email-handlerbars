const template = {
  es: {
    name: 'sales-commi-rep-password-es',
    subject: 'ComiClip: La contraseña de tu nuevo commi {{commi_id}}',
  },
  data: {
    commi_id: 'COMM0000098',
    commi_name: 'Luis Miguel',
    commi_pass: 'jhgqwd654d',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
