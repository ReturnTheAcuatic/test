
const { GatewayIntents } = require("@biscuitland/api-types");

const { int } = require("./src/plugins/events/intCreate/index.js");
const { SessionClient } = require("./client.js")
const { Load } = require("./lib/plugins/commands/index.js")
const session = new SessionClient()

Load(session)

session.events.on("interactionCreate", (int, client) => int(int));

session.start();