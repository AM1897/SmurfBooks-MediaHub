import express from 'express'
import Configuration from './configurations/Configuration'
import Middleware from './middlewares/Middleware'
import AliveRoutes from './routes/AliveRoutes'
import URoutes from "./routes/URoutes";
import Logger from './utils/Logger'
import MessageRoutes from './routes/MessageRoutes'

const server = express()
Middleware.applyMiddlewares(server)

// Routes
AliveRoutes(server)
URoutes(server)
MessageRoutes(server)

Middleware.errorHandlerAndNotFound(server)

Configuration.connectToPort(server)
Configuration.connectToDatabase().then(() => {
    Logger.debug('A.E.M TEAM-WORK')
})

export default server