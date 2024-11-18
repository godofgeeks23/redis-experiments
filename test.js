const redis_client = require("./redis-client");

async function init() {
  await redis_client.set("msg:1", "Hello, World!");
  const result = await redis_client.get("msg:1");
  console.log(result);
  redis_client.quit();
}

init();
