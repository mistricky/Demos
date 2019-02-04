const Koa = require("koa");
const app = new Koa();

app.use(ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-method", "GET");
  ctx.set(
    "Access-Control-Allow-Headers",
    "x-requested-with, accept, origin, content-type"
  );

  ctx.body = {
    data: "hello"
  };
});

app.listen(3000);
