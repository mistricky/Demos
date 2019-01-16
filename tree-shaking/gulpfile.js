const gulp = require("gulp");
const Path = require("path");
const { spawn } = require("child_process");

const contentBase = Path.join("app");

gulp.task("default", done => {
  gulp.watch(
    ["./webpack.config.babel.js", Path.join(contentBase, "main.js")],
    gulp.series("webpack"),
    () => done()
  );
});

gulp.task("webpack", async done => {
  await spawn(
    "webpack",
    ["--config webpack.config.babel.js", "--display-used-exports"],
    { stdio: "inherit" }
  );

  done();
});
