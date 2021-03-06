import { Intents } from 'discord.js'
const dotenv = require('dotenv')
const path = require('path')

/*
  Checks if NODE_ENV is set to production if it is it will load the enviromental variables from
  .env.production, but for everone else it will load form .env.development. Kind of pointless
  and confusing in retrospect will probaly simplify in the future
*/
const ENVIROMENT = process.env.NODE_ENV || 'development' // fallback for windows users
dotenv.config({
  path: ((): string => {
    switch (ENVIROMENT) {
      case 'production':
        return path.resolve(`${__dirname}/../../secrets/.env.production`)
      case 'development':
      default:
        return path.resolve(`${__dirname}/../../secrets/.env.development`)
    }
  })()
})

// Mongo DB Settings
const MONGO_USERNAME: string  = process.env.DB_USERNAME || 'dbAdmin'
const MONGO_PASSWORD: string = process.env.DB_PASSWORD || ''
const MONGO_HOST: string  = process.env.DB_HOST || 'discord.0xesk.mongodb.net'
const MONGO_OPTIONS:object = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  socketTimeoutMS: 30000,
  keepAlive: true,
  autoIndex: false,
  retryWrites: false,
}

// Discord application settings
const DISCORD_API_TOKEN = process.env.DISCORD_API_TOKEN || ''
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || ''
const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID || ''
const DISCORD_INTENTS = [
  Intents.FLAGS.GUILDS, // Create threads, may
  Intents.FLAGS.GUILD_MESSAGES, // For reading messages and filiting profanity.
  Intents.FLAGS.GUILD_MESSAGE_TYPING, // To set the bot to tpying when its loading data from a website.
  Intents.FLAGS.DIRECT_MESSAGES, // To notifiy a user when a message is deleted with an explination.
]

const MONGO = {
  host: MONGO_HOST,
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  options: MONGO_OPTIONS,
  url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`,
}

const DISCORD = {
  apiToken: DISCORD_API_TOKEN,
  clientID: DISCORD_CLIENT_ID,
  guildID: DISCORD_GUILD_ID,
  intents: DISCORD_INTENTS,
}

export const config = {
  mongo: MONGO,
  discord: DISCORD,
}


