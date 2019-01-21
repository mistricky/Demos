const Koa = require("koa");
const app = new Koa();
const { render } = require("./dist/main-server.bundle");
const static = require("koa-static");
const Path = require("path");

app.use(static(Path.resolve("./dist")));

app.use(async ctx => {
  ctx.body = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Document</title>
    </head>
    <body>
      <div id="root">${render()}</div>
    </body>
  </html>
  `;
});

app.listen(9999, () => console.info("listening"));
