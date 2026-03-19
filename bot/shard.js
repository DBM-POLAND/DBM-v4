//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// * Discord Bot Maker Shard
// * Shadow (1409504484270276699)
// * Help: https://discord.gg/9HYB4n3Dz4
// *
// * This file should be used to start the bot ONLY when the bot
// * is running on a large number of servers (≈ 2500+ guilds).
// * When the bot is running on a small number of servers,
// * using sharding is NOT recommended, as it may increase
// * CPU and memory usage due to multiple Node.js processes
// * without providing any real performance benefits.
// * For small bots, start the bot directly using `bot.js`.
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

(async () => {
  const { readFile } = require("fs/promises");
  const { ShardingManager } = require("discord.js");

  const DBM = {};
  const Files = (DBM.Files = {});

  Files.crypto = require("crypto");

  Files.readData = async function (filePath) {
    const content = await readFile(filePath);
    const data = JSON.parse(this.decrypt(content));
    return data;
  };

  Files.initEncryption = function () {
    try {
      this.password = require("discord-bot-maker");
    } catch {
      this.password = "";
    }
  };

  Files.decrypt = function (text) {
    if (this.password.length === 0) return text;
    const decipher = this.crypto.createDecipher("aes-128-ofb", this.password);
    return decipher.update(text, "hex", "utf8") + decipher.final("utf8");
  };

  Files.initEncryption();

  const config = {
    botFile: "./bot.js", // bot file (path)
    shards: "auto", // number of shards ("auto"/number)
    respawn: true, // respawn after crash (true/false)
    settings: await Files.readData("./data/settings.json"), // bot token
  };

  const manager = new ShardingManager(config.botFile, {
    shards: config.shards,
    respawn: config.respawn,
    token: config.settings.token,
  });

  manager.on("shardCreate", (shard) => {
    shard.on("ready", () => {
      console.log(`Shard [${shard.id}] is Ready!`);
    });
  });

  manager.spawn({ amount: config.shards });
})();
