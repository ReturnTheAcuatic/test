import { Client, Message, ClientEvents, PermissionResolvable } from "discord.js";

/**
 * Nombres de las categorias para los comandos.
 */
type CommandCategory =
    | "ADMIN"
    | "NORMAL"
    | "ECONOMY"
    | "OWNER"

    /**
     * Interface de los comandos del bot.
     */
export interface Command {
  /**
   * nombre del comando.
   */
  enabled?: boolean | false;
  name: string;
  description: string;
  botPerms?: PermissionResolvable[];
  userPerms?: PermissionResolvable[];
  cooldown?: number;
  aliases?: string[];
  devs?: boolean;
  run: (client: Client, message: Message, args: string[]) => Promise<void>;
}

export interface BotEvent {
  name: keyof ClientEvents;
  once?: boolean | false;
  execute: (...args: any) => void;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TOKEN: string;
      MONGO_CONNECTION: string;
      WEBHOOK_LOGS: string;
    }
  }
}