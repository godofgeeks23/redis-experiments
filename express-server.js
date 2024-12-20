const express = require("express");
const app = express();
const redis_client = require("./redis-client");

app.get("/", async (req, res) => {
  const cache_value = await redis_client.get("msg:1");
  if (cache_value) {
    res.send(cache_value);
  } else {
    redis_client.set("msg:1", "Hello, World!");
    res.send("Hello, World!");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
