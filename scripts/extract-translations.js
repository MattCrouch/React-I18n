const fs = require('fs');
const glob = require('glob');

let output = 'export default ';
let translations = {};

const filenames = glob.sync('./extracted-translations/**/*.json');

filenames.forEach(function(filename) {
  const file = fs.readFileSync(filename, 'utf8');
  const json = JSON.parse(file);

  json.forEach(function(translation) {
    translations[translation.id] = translation.description;
  });
});

console.log(translations);

output = output + JSON.stringify(translations, null, '\t');

fs.writeFileSync('./src/translations/template.js', output, 'utf-8');