const express = require("express");
const app = express();
const redis_client = require("./redis-client");

const port = 3000;

app.get("/", async (req, res) => {
  // get value of key "msg:1" from redis
  const cache_value = await redis_client.get("msg:1");
  if (cache_value) {
    res.send(cache_value);
  } else {
    redis_client.set("msg:1", "Hello, World!");
    res.send("Value not found in cache, setting it now.");
  }
});

app.listen(3000, () => {
  console.log("Server running on port ", port);
});
