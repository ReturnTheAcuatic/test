import { d } from "././"

const int = async (int, client) => {
  return () => {
    if(!int.isComamnd()) {
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

export { msg };