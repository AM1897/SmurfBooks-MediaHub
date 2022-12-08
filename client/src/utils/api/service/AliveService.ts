import http from '../MyApi'

const apiConnectionStatus = () => {
	return http.get('/')
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	apiConnectionStatus
}