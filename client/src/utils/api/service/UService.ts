import http from '../MyApi'
import { CreateOrUpdateUser, LoginU } from '../../interface/Users'

const verifyUserUrl = '/verifyUser'

const UService = {
	createUser: (newUserPayload: CreateOrUpdateUser) => {
		return http.post('/user/', newUserPayload)
	},
	
	verifyUser: (payload: LoginU) => {
		return http.post(verifyUserUrl, payload)
	},
	
	getAll: () => {
		return http.get('/user/all')
	},
	
	getByName: (name: string) => {
		return http.get(`/user/name/${ name }`)
	},

	getByEmail: (email: string) => {
		return http.get(`/user/email/${ email }`)
	},
	
	getById: (id: string) => {
		return http.get(`/user/${ id }`)
	},
	
	updateUserById: (id: string, payload: CreateOrUpdateUser) => {
		return http.put(`/user/${ id }`, payload)
	},
	
	deleteUserById: (id: string) => {
		return http.delete(`/user/${ id }`)
	}
}

export default UService