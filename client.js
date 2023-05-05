const { Session } = require("@biscuitland/core");
const { GatewayIntents } = require("@biscuitland/api-types");

export class SessionClient extends Session {
  constructor(session) {
    super({
      intents: [GatewayIntents.Guilds | GatewayIntents.GuildMessages | GatewayIntents.MessageContent]
    })
    this.slash = new Map()
  }
}