import {Express} from 'express'
import MessageController from '../controllers/MessageController'

const MessageRoutes = (server: Express) => {
    server.post('/message', MessageController.registerMessage)
    server.get('/message/all', MessageController.getAllMessages)
    server.get('/message/:id', MessageController.getMessageById)
    server.put('/message/:id', MessageController.updateMessageById)
    server.delete('/message/:id', MessageController.deleteMessageById)
}

export default MessageRoutes