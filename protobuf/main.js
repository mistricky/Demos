const protobuf = require("protobufjs");

protobuf.load("./person.proto", (err, root) => {
  if (err) throw err;

  root.lookupType;
});
