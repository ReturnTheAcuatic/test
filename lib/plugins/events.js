const fs = require("node:fs")

function loadEvents(client) {
  
  fs.readdirSync('./src/events').forEach(async file => {
      const event = await require(`../events/${file}`);
      if (event.once) {
          client.once(event.name, (...args) => event.execute(...args));
      } else {
          client.on(event.name, (...args) => event.execute(...args));
      }
  })
}
module.exports = { 
  loadEvents
}