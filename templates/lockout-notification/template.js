const template = {
  es: {
    name: 'lockout-notification-es',
    subject: 'ALERTA: Tu Cuenta Clip ha sido bloqueada temporalmente',
  },
  data: {
	assetsUrl: 'https://s3.amazonaws.com/dev-ses-email-templates-assets',
	id: null,
	merchant_id: null,
	first_name: null,
	last_name: null,
	second_last_name: null,
	mobile: null,
	role: null,
	email: "test@payclip.com",
	sign_in_count: null,
	soft_deleted: null,
	verified_email: null,
	current_sign_in_ip: null,
	updated_at: null
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
