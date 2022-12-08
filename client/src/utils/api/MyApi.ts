import Axios from 'axios'

const serverUrl = process.env.REACT_APP_SERVER_URL || 'http://127.0.0.1'
const serverPort = process.env.REACT_APP_SERVER_PORT || '3001'

// const url = `${ serverUrl }:${ serverPort }`
const url2 = serverUrl + ':' + serverPort + '/'

const MyApi = Axios.create({
    baseURL: url2
})

export default MyApi