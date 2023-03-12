const fs = require("fs");
// ./src/css/rem2px.css
const express = require("express");
// var postcss = require('postcss');
// var pxtorem = require('postcss-pxtorem');
// var css = fs.readFileSync('./src/css/rem2px.css', 'utf8');
// var options = {
//     replace: false
// };
// var processedCss = postcss(pxtorem(options)).process(css).css;

// fs.writeFile('./src/css/rem2px.css', processedCss, function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log('Rem file written.');
// });
const app = express();
const { resolve } = require("path");
const filePath = resolve(__dirname, "./src/index.html");
const rs = fs.createReadStream(filePath);

app.use(express.static("./src"));

app.get("/", (req, res) => {
  rs.pipe(res);
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("访问 http://localhost:3000");
});
