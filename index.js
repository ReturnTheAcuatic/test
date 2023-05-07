import { SessionClient } from "./client.js";
import { Load } from "./lib/plugins/commands/index.js";
const session = new SessionClient();

Load(session);

session.events.on("interactionCreate", (int) => int(int, session));

session.start();