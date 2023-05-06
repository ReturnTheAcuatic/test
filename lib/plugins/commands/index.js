const fs = require("node:fs")

export function Load(session) {
  return () => {
    fs.readdirSync("./src/plugins/commands/").forEach((folder) => {
      const commandFile = fs.readdirSync(`./src/plugins/commands/${folder}`).filter((archive) => archive.endsWith(".js"))
      
      for(const file of commandFile) {
        const module = require(`../../../src/plugins/commands/slash/${folder}/${file}`);
        const commandClasses = Object.values(module).filter(exported => typeof exported === "function" && /^[A-Z]/.test(exported.name));
        if (commandClasses.length !== 1) {
          throw new Error(`Archivo ${file} debe exportar exactamente una clase de comando`);
        }
        const CommandClass = commandClasses[0];
        const commandInstance = new CommandClass();
        session.slash.set(commandInstance.toJSON().name, commandInstance);
      }
    })
  }
  session.events.on('ready', ({ user }) => {
    try{
      session.upsertApplicationCommands(user.slash.find((command) => command.toJSON()));
    } catch(err) {
      console.error(err)
    }
  })
}