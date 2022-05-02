const { exec } = require('child_process');

module.exports.runTestData = (sPathToFile) => {
  return new Promise((resolve, reject) => {
      exec(`node ./testdata/testdatarunner.js '${sPathToFile}'`, (error, stdout, stderr) => {
          if (error) {
              reject("" + error);
              return;
          }
          resolve(stdout);
      });
  })
};

//module.exports.runTestData('./testdata/insert-script.sql').then((a) => console.log(a));