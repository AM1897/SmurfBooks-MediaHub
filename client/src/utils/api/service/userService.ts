import http from '../MyApi'
import { CreateOrUpdateUser } from '../../interface/Users'

const verifyUserUrl = '/verifyUser'

const UserService = {
	createUser: (newUserPayload: CreateOrUpdateUser) => {
		return http.post('/user/', newUserPayload)
	},
	
	verifyUser: (payload: CreateOrUpdateUser) => {
		return http.post(verifyUserUrl, payload)
	},
	
	getAll: () => {
		return http.get('/user/all')
	},
	
	getByName: (name: string) => {
		return http.get(`/user/name/${ name }`)
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

export default UserService