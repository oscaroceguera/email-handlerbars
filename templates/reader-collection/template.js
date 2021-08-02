const template = {
  es: {
    name: 'reader-collection-es',
    subject: 'Pasos para que nos envíes tu Clip',
  },
  data: {
    merchant_name: 'Merchant Test',
    guide_path: 'https://drive.google.com/file/d/0B-m9omvfiq9Sc3RhcnRlcl9maWxlX2Rhc2hlclYw/view?usp=sharing',
    assetsUrl: 'https://747733430d60b80427a2d4f5d7d73c26.s3-us-west-2.amazonaws.com/',
  },
};

module.exports = locale => ({
  data: template.data, ...template[locale],
});
