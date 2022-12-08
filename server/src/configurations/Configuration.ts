import dotenv from 'dotenv'
import { Express } from 'express'
import { connect } from 'mongoose'
import Logger from '../utils/Logger'

dotenv.config()

const PORT: number = Number(process.env.SERVER_PORT) || 3001
const env: string = process.env.NODE_ENV || 'production'

let uri: string = process.env.MONGODB_URI || 'http://localhost'

const connectToDatabase = async () => {
	try {
		await connect(uri)
		Logger.info('Successfully connected to the Database')
	} catch (error) {
		Logger.error('Error connecting to the Database'.toUpperCase(), error)
		process.exit()
	}
}

const connectToPort = (server: Express) => {
	server.listen(PORT, () => {
		Logger.info(`⚡️[server]: Server is running at http://localhost:${ PORT }⚡️`)
		if (env === 'development') {
			Logger.warn('Server running in development mode!'.toUpperCase())
		}
	})
}

export default {
	connectToDatabase,
	connectToPort
}