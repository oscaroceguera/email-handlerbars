const template = {
  es: {
    name: 'customer360-password-reset-es',
    subject: 'Enlace para cambiar tu contraseña',
  },
  data: {
    merchant_name: 'Merchant Name',
    reset_url: 'https://dashboard.clip.mx/users/sign_in',
    assetsUrl: 'https://747733430d60b80427a2d4f5d7d73c26.s3-us-west-2.amazonaws.com/',
  },
};

module.exports = locale => ({
  data: template.data, ...template[locale],
});
