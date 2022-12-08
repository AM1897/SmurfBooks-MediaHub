import { Document } from 'mongoose'

export interface IUser extends Document {
    firstName: string
    lastName: string
    username: string
    password: string
}