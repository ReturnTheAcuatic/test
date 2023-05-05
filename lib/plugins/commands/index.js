const fs = require("node:fs")

export function Load(session) {
  return () => {
    fs.readdirSync("./src/plugins/commands/").forEach((folder) => {
      const commandFile = fs.readdirSync(`./src/plugins/commands/${folder}`)
      
      for(const file of commandFile) {
        const command = require(`../../../src/plugins/commands/slash/${folder}/${file}`).filter((archive) => archive.endsWith(".js"))
        session.slash.set(command.bot.name, command)
      }
    })
  }
  session.events.on('ready', ({ user }) => {
    session.upsertApplicationCommands(user.slash.find((command) => command.bot.name));
  })
}