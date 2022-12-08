import Logger from "../utils/Logger";
import StatusCode from "../utils/StatusCode";
import {Request, Response} from "express";
import {CreateU, ReadU} from "../interface/InterFace";
import UModel from "../models/UModel";
import bcrypt from 'bcrypt'
import { ObjectId } from "mongoose";
// import { ReadMessage } from "../interface/IMessage";

const saltRounds: number = 10
export const encryptedPassword = async (password: string) => {
    let newPass: string = ''
    await bcrypt.hash(password, saltRounds).then(function (hash: any) {
        newPass = hash;
    })
    return newPass
}

const registerUser = async (req: Request, res: Response) => {
    try {
        Logger.http(req.body)
        let {firstName, lastName, password, username}: CreateU = req.body
        password = await encryptedPassword(password)
        if (firstName && lastName && password && username) {
            const newObject: CreateU = {
                firstName,
                lastName,
                password,
                username
            }
            Logger.http(newObject)
            const user = new UModel(newObject)
            const dbResponse = await user.save()
            Logger.http(dbResponse)
            res.status(StatusCode.CREATED).send(dbResponse)
        } else {
            Logger.error('First or last name, password or username failed')
            res.status(StatusCode.BAD_REQUEST).send({
                message: 'Incorect body'
            })
        }
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error creating user'
        })
    }
}

interface SearchForUser {
    username: string
}

interface VerifyUser {
    message: boolean
	userId: string
}

const verifyUser = async (req: Request, res: Response) => {
	try {
		const {username, password} = req.body
		Logger.http('the req.body is: ' + req.body.valueOf())
		
		// Query
		const query: SearchForUser = {username: String(username)}
        Logger.debug('the query is: ' + query)
		const dbQuery = await UModel.find(query)
		Logger.debug('the answer from the db is: ' + dbQuery)
		
		// Verify password in bcrypt
		let response: VerifyUser | undefined 
		await bcrypt.compare(String(password), dbQuery[0].password)
			.then(function (result) {
                if (result === true) {
                    response = {
                        message: result,
					    userId: String(dbQuery[0].id)
				    }
                    res.status(StatusCode.OK)
                } else {
                        response = {
                            message: result,
                            userId: String(dbQuery[0].id)
                    }
                    const message = 'Wrong username or password!'
                    res.status(StatusCode.FORBIDDEN)
                    return message
                }
                Logger.debug('The authentification was: ' + response.message + ', and the users ID is ' + response.userId)
    })
		res.send(response)
		
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR)
			.send({
				message: `Error occurred while trying to retrieve user with username: ${ req.query.username }`
			})
	}
}


function getAllUsers(req: Request, res: Response) {
    try {
        // @ts-ignore
        UModel.find({}, '', (error: ErrorCallback, users: Array<ReadU>) => {
            if (error) {
                Logger.error(error);
                res.status(StatusCode.BAD_REQUEST).send({
                    error: '\n' +
                        'Det gick inte att hämta användare'
                });
            } else {
                Logger.http(users);
                res.status(StatusCode.OK).send(users);
            }
        });
    } catch (error) {
        Logger.error(error);
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Det gick inte att hämta användaren'
        });
    }
}

const getUserById = (req: Request, res: Response) => {
    try {
        // @ts-ignore
        UModel.findById(req.params.id, (error: ErrorCallback, users: ReadU) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Det gick inte att hämta användaren'
                })
            } else {
                Logger.http(users)
                res.status(StatusCode.OK).send(users)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Det gick inte att hämta användarens namn'
        })
    }
}

const getUserByNameAndEmail = (req: Request, res: Response) => {
    try {
        // @ts-ignore
        UModel.find({
            firstName: req.params.firstName,
            username: req.params.username
        }, '', (error: any, user: Array<ReadU>) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Det gick inte att hämta användaren'
                })
            } else if (user.length > 1) {
                Logger.http(user)
                res.status(StatusCode.FORBIDDEN).send(user[0])
            } else {
                res.status(StatusCode.NOT_FOUND).send({
                    message: `Could not find a user with firstname ${req.params.firstName} and email adress ${req.params.username}` 
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Det gick inte att hämta användaren efter namn och username'
        })
    }
}

const updateUserById = (req: Request, res: Response) => {
    try {
        Logger.debug(req.params.id + '= req.params.id')
        Logger.debug(req.body + '= req.body')
        const updatedUser: CreateU = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password
        }
        Logger.debug(updatedUser + '= updatedUser')

        UModel.findByIdAndUpdate(req.params.id, updatedUser, {new: true}, (error: any, user: any) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
                    error: 'Fel vid uppdatering av användare'
                })
            } else {
                Logger.debug('THIS IS THE UPDATED USER: ' + user)
                res.status(StatusCode.OK).send(
                    user ? {
                    message: `Succseffully updated user!\n${user}`} 
                    : {
                    message: `Användare med id '${req.params.id}' hittades inte`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Fel vid uppdatering av användare'
        })
    }
}

const deleteUserById = (req: Request, res: Response) => {
    try {
        // @ts-ignore
        UModel.findByIdAndRemove(req.params.id, (error: ErrorCallback, user: ReadU) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Fel vid borttagning av användare'
                })
            } else {
                Logger.http(user)
                res.status(StatusCode.OK).json(
                    user ? {message: `Användare med id ${req.params.id} har tagits bort från databasen!`}
                        : {message: `Användare med id '${req.params.id}' hittades inte!`})
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Fel vid borttagning av användare`
        })
    }
}

export default {
    registerUser,
    verifyUser,
    getAllUsers,
    getUserById,
    getUserByNameAndEmail,
    updateUserById,
    deleteUserById
}