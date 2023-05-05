const { Session } = require("@biscuitland/core");
const { GatewayIntents } = require("@biscuitland/api-types");

const { int } = require("./src/plugins/events/intCreate/index.js");
 
const intents = [GatewayIntents.Guilds | GatewayIntents.GuildMessages | GatewayIntents.MessageContent];
const session = new Session({ token: process.env.TOKEN, intents });

session.events.on("interactionCreate", (int, client) => int(int));

session.start();