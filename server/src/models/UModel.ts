import dotenv from 'dotenv'
import {model, Schema} from 'mongoose'
import {CreateU} from "../interface/InterFace";

dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION_USERS || ''

const USchema = new Schema<CreateU>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const UModel = model<CreateU>(dbCollection, USchema)

export default UModel