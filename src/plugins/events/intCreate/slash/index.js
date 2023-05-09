const int = async (int, bot) => {
  return () => {
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

module.export = { int }