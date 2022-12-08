import StatusCode from '../utils/StatusCode'
import { Request, Response } from 'express'

const aliveController = (request: Request, response: Response) => {
	response.status(StatusCode.OK).send('Connected to TypeScript API!')
}

export default {
	alive: aliveController
}