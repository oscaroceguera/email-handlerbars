const http = require("http");
const fs = require("fs");
const handlebars = require("handlebars");
const list = require("./templateList");

const { AutoComplete } = require('enquirer');

let templateSearch

const prompt = new AutoComplete({
  name: 'templates',
  message: 'Pick a email template',
  limit: 10,
  initial: 2,
  choices: list
});

prompt.run()
  .then(answer => {
    console.log('Answer:', answer)
    templateSearch = answer
  })
  .catch(console.error);

http
  .createServer((req, res) => {
    const templateFolder = `${__dirname}/templates/${templateSearch}`;

    const htmlFile = `${templateFolder}/es.html`;
    const valuesFile = `${templateFolder}/template.js`;

    const template = fs.readFileSync(htmlFile, "utf8");
    const compiledTemplate = handlebars.compile(template);
    const { data: templateValues } = require(valuesFile)("es");
    const html = compiledTemplate(templateValues);

    res.end(html);
  })
  .listen(8000, () => {
    console.log('http://localhost:8000')
  });
