import {Express} from "express";
import UController from "../controllers/UController";

const URoutes = (server: Express) => {
    server.post('/user/', UController.registerUser)
    server.post('/verifyUser/', UController.verifyUser)

    server.get('/user/all', UController.getAllUsers)
    server.get('/user/:id', UController.getUserById)
    server.get('/user/name/:firstName/:username', UController.getUserByNameAndEmail)

    server.put('/user/:id', UController.updateUserById)

    server.delete('/user/:id', UController.deleteUserById)

}

export default URoutes