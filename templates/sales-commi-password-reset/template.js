const template = {
  es: {
    name: 'sales-commi-password-reset-es',
    subject: '👋 Establece AQUÍ tu nueva contraseña.',
  },
  data: {
    commi_name: 'Oriana',
    reset_password_url: 'https://devclip.page.link?link=https%3A%2F%2Fdev-dashboard.payclip.com%2Fusers%2Fpassword%2Fedit%3Freset_password_token%3D%25242a%252410%25248DlGHP6MdJvq58vNkIM.3u2IraihLqQ.ZFJOz0Iw4ZKQqP18brElG%26user%3D560726e0-5f4a-11eb-b85d-970257109aab&afl=https%3A%2F%2Fdev-dashboard.payclip.com%2Fusers%2Fpassword%2Fedit%3Freset_password_token%3D%25242a%252410%25248DlGHP6MdJvq58vNkIM.3u2IraihLqQ.ZFJOz0Iw4ZKQqP18brElG%26user%3D560726e0-5f4a-11eb-b85d-970257109aab&ifl=https%3A%2F%2Fdev-dashboard.payclip.com%2Fusers%2Fpassword%2Fedit%3Freset_password_token%3D%25242a%252410%25248DlGHP6MdJvq58vNkIM.3u2IraihLqQ.ZFJOz0Iw4ZKQqP18brElG%26user%3D560726e0-5f4a-11eb-b85d-970257109aab&apn=com.payclip.clip.dev&ibi=com.payclip.Clip.xcode&efr=1&isi=771245360',
    commi_email: 'commiEmail@comiclip.com',
    commi_id: 'COMMI124',
    commi_type: 'UF 2020',
    farmer_name: 'Test farmer',
    farmer_email: 'farmer@comiclip.com',
    assetsUrl: 'https://dev-ses-email-templates-assets.s3.amazonaws.com',
  },
};

module.exports = locale => ({ data: template.data, ...template[locale] });
