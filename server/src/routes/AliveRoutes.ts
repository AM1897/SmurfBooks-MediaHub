import {Express} from 'express'
import AliveController from '../controllers/AliveController'

const AliveRoutes = (server: Express) => {
    server.get('/', AliveController.alive)
}

export default AliveRoutes