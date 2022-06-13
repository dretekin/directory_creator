
var fs = require("fs");
var path = require("path");
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
dirCreator();
function dirCreator() {
  rl.question("Please, enter your new directory path? ", function (newDirPath) {
    fs.mkdir(newDirPath, function (err) {
      if (err) {
        if (err.code == "EEXIST") {
          rl.question(
            "The directory you want to create already exist.Do you want to create a different directory? (Y / n) ",
            function (data) {
              data = data.toString().toLowerCase();
              if (data == "y") {
                dirCreator();
              } else {
                process.exit();
              }
            }
          );
        }
      } else {
        fs.readdir("./", function (err, data) {
          console.log(data);
        });
        process.exit();
      }
    });
  });
}
