// "devDependencies": {
//     "glob-fs": "^0.1.7",
//     "preprocessor": "^1.4.0"
//   }
// https://nodejs.org/api/fs.html

var Preprocessor = require("preprocessor");
var fs = require("fs");
var globFs = require('glob-fs')({ gitignore: true });
const path = require('path');

var inputDir = './test_src';
var outputDir = './test_src_processed';

if (!fs.existsSync(outputDir)) {
    console.log("Creating dir:" + outputDir)
    fs.mkdirSync(outputDir);
}

function processFile(file) {
    let content = fs.readFileSync(file, 'utf8');

    let pp = new Preprocessor(content, ".");
    let newContent = pp.process({
        FULL: true
    });

    const newTitle = path.basename(file);

    fs.writeFileSync(outputDir + "/" + newTitle, newContent);

    console.log("Writing new file: " + file);
}

globFs.readdirSync(inputDir + "/*.js").forEach(file => {
    console.log("Processing file: " + file)
    processFile(file);
})
