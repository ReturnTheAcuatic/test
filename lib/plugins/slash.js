const fs = require("node:fs")

function loadSlash(Bot) {
  return () => {
    fs.readdirSync("./src/commands/").forEach((folder) => {
      const commandFile = fs.readdirSync(`./src/commands/${folder}`).filter((archive) => archive.endsWith(".js"))
      
      for(const file of commandFile) {
        const module = require(`../../../src/commands/slash/${folder}/${file}`);
        const commandClasses = Object.values(module).filter(exported => typeof exported === "function" && /^[A-Z]/.test(exported.name));
        if (commandClasses.length !== 1) {
          throw new Error(`Archivo ${file} debe exportar exactamente una clase de comando`);
        }
        const CommandClass = commandClasses[0];
        const commandInstance = new CommandClass();
        if(!Bot.slash.has(commandInstance.toJSON().name)) {
          Bot.slash.set(commandInstance.toJSON().name, commandInstance);
        } else {
          console.log("Nombre de la class duplicada" + commandInstance.toJSON().name + "en" + file)
        }
      }
    })
  }
  Bot.on("ready", (bot) => {
    try{
      bot.aplication.commands.set(user.slash.map((command) => command.toJSON()));
    } catch(err) {
      console.error(err)
    }
  })
}
module.exports = {
  loadSlash
}