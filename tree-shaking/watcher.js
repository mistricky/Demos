const FS = require("fs");
const { exec } = require("child_process");

const targetFile = "./test.js";

FS.watch(targetFile, { encoding: "buffer" }, (_eventType, filename) => {
  if (filename) {
    exec(
      `babel ${targetFile} --out-file compiled.js`,
      (err, stdout, stderr) => {
        if (err) {
          throw err;
        }

        console.log(stdout);

        console.log(stderr);
      }
    );
  }
});
