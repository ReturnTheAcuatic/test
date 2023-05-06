const { SessionClient } = require("./client.js");
const { Load } = require("./lib/plugins/commands/index.js");
const session = new SessionClient();

Load(session);

session.events.on("interactionCreate", (interaction) => int(interaction, session));

session.start();