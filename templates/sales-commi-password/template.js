const template = {
  es: {
    name: 'sales-commi-password-es',
    subject: '🎉 ¡Ya eres parte de la familia Clip Agente!',
  },
  data: {
    commi_name: 'Oriana',
    commi_pass: 'jhgqwd654d',
    commi_email: 'commiEmail@comiclip.com',
    commi_id: 'COMMI124',
    commi_type: 'UF 2020',
    farmer_name: 'Test farmer',
    farmer_email: 'farmer@comiclip.com',
    commi_address: 'Fray Fray Servando Teresa de Mier 68. Centro, Cuauhtémoc,<br /> C.P. 06080.  Colonia Centro, CDMX',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
