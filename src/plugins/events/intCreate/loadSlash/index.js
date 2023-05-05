const int = async (int, client) => {
  return () => {
    if(!int.isComamnd()) {
      const cmd = client.slash.get(int.commandName);
      if(cmd) {
        try {
          await cmd.run(int, client);
        } catch(err) {
          console.error(err);
        }
      }
    }
  }
}

export { msg };