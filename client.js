const { Session } = require("@biscuitland/core");
const { GatewayIntents } = require("@biscuitland/api-types");

export class SessionClient extends Session {
  constructor() {
    super({
      intents: [GatewayIntents.Guilds | GatewayIntents.GuildMessages | GatewayIntents.MessageContent],
      token: process.env.token
    })
    this.slash = new Map()
  }
}