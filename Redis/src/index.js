import { createClient } from "redis";

const client = await createClient()
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();

const redis_demo = async () => {
    await client.set("key:1", "value111");
    const value = await client.get("key:1");
    console.log(value); // 'value'
    client.destroy();
}

// redis_demo()

await client.set("key:2", "value222");
    const value = await client.get("key:2");
    console.log(value); // 'value'
    client.destroy();