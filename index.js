const http = require("http");
const fs = require("fs");
const handlebars = require("handlebars");
// const list = require("./templateList");

const { argv } = require("process");

let templateSearch;

console.log("argv =>", argv[2]);
templateSearch = argv[2];

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
    console.log("http://localhost:8000");
  });
