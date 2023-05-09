module.exports ={
  name: "interactionCreate",
  execute: async (int) => {
    if(!int.isCommand()) {
      const cmd = client.slash.get(int.commandName);
      if(cmd) {
        try {
          await cmd.runInt(int, client);
        } catch(err) {
          console.error(err);
        }
      }
    }
  }
}