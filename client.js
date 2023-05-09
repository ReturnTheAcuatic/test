const { Client } = require("discord.js");
const fs = require("node:fs");
module.exports = class SessionClient extends Client {
  constructor() {
    super({
      intents: [GatewayIntents.Guilds | GatewayIntents.GuildMessages | GatewayIntents.MessageContent],
    })
    this.slash = new Map();
  }
}