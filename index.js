const { loadSlash } = require("./src/lib/plugins/commands/index.js");
const { SessionClient } = require("./client.js");
const Bot = new SessionClient();

async function setup() {
  await loadSlash(Bot);
  
  await Bot.login(process.env.token);
}

setup();