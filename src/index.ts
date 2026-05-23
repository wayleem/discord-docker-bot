import { Client, GatewayIntentBits } from 'discord.js'
import { NodeSSH } from 'node-ssh'
import * as dotenv from 'dotenv'

dotenv.config()

const ssh = new NodeSSH()
const bot = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
})

const ssh_config = {
  host: process.env.SSH_HOST,
  username: process.env.SSH_USERNAME,
  privateKey: process.env.SSH_KEY_PATH,
}

bot.login(process.env.DISCORD_TOKEN)
