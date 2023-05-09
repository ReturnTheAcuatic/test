const loadSlash = require("./src/lib/slash.js");
const loadEvents = require("./src/lib/events.js")
const SessionClient = require("./client.js");
const Bot = new SessionClient();

async function setup() {
  await loadSlash(Bot);
  await loadEvents(Bot);
  
  await Bot.login(process.env.token);
}

setup();