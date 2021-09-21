const dotenv = require('dotenv')
const path = require('path')
import { MongoClient } from 'mongodb'
let _envPath

switch (process.env.NODE_ENV) {
  case 'production':
    _envPath = path.resolve(`${__dirname}/../../secrets/.env.production`)
    break
  default:
    _envPath = path.resolve(`${__dirname}/../../secrets/.env.development`)
}
dotenv.config({ path: _envPath })
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`
export const client = new MongoClient(uri)
export const DISCORD_API_TOKEN = process.env.DISCORD_API_TOKEN
export const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID
export const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID