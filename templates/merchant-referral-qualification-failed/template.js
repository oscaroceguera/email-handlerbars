const template = {
  es: {
    name: 'merchant-referral-qualification-failed-es',
    subject: '¡Ups, no te podemos depositar tu recompensa por ser referido!',
  },
  data: {
    benefitAmount: 500,
    duplicateClabe: false,
    invalidCode: false,
    duplicateEmail: false,
    deviceAlreadyUsed: true,
    assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets'
  }
};

module.exports = locale => {
  return { data: template.data, ...template[locale] };
}
