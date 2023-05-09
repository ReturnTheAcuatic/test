const { Client, GatewayIntentBits } = require("discord.js");
const fs = require("node:fs");
require("dotenv").config();
module.exports = class SessionClient extends Client {
  constructor() {
    super({
      intents: [GatewayIntentBits.Guilds | GatewayIntentBits.GuildMessages | GatewayIntentBits.MessageContent],
    })
    this.slash = new Map();
  }
}