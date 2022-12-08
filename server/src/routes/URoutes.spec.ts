// Kolla varför inte global_id funkar i testerna. Nu är testerna hårdkodade med befintliga id:n
import Logger from '../utils/Logger'
import server from '../server'
import chaiHttp from 'chai-http'
import Chai from 'chai'
import StatusCode from '../utils/StatusCode'
import {ReadU} from '../interface/InterFace'
import {describe, it as test} from 'mocha'

Chai.should()
Chai.use(chaiHttp)
const expect = Chai.expect

const newU = {
    firstName: 'Lars',
    lastName: 'Strömben',
    username: 'lars@lars.com',
    password: 'Lars10'
};

let global_id = ''
Logger.http(global_id)

const updatedU = {
    firstName: 'Alexis',
    lastName: 'Flach',
    username: 'alexis@örnöga.com',
    password: 'alexis10'
};

const registerUser = () => {
    describe('Register a new user', () => {
        test('Check if new user is created', (done) => {
            Chai.request(server)
                .post('/user/')
                .send(newU)
                .then((response) => {
                    expect(response).to.have.a.status(StatusCode.CREATED)
                    expect(response.body.firstName).to.equal('Lars')
                    global_id = response.body._id
                    done()
                })
        })
    })
}

const getAllUsers = () => {
    describe('Check all users', () => {
        test('Look after a array with users', (done) => {
            Chai.request(server)
                .get('/user/all')
                .end((error, response) => {
                    expect(response).to.have.a.status(StatusCode.OK)
                    const body = response.body
                    expect(body).to.be.an('array')
                    expect(body.length).to.equal(body.length)
                    done()
                })
        })
    })
}

const getUserById = () => {
    describe('Get a user by id', () => {
        test('Look after a user with a id', (done) => {
            Chai.request(server)
                .get(`/user/${global_id}`)
                .end((error, response) => {
                    expect(response).to.have.a.status(StatusCode.OK)
                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.firstName).to.equal('Lars')
                    expect(body.username).to.equal('lars@lars.com')
                    done()
                })
        })
    })
}

const getUserByNameAndEmail = () => {
    describe('Check a users name and username', () => {
        test('Look after a name and username', (done) => {
            Chai.request(server)
                .get(`/user/name/${newU.firstName}/${newU.username}`)
                .end((error, response) => {
                    expect(response).to.have.a.status(StatusCode.OK)
                    const body = response.body[0]
                    expect(body).to.be.an('object')
                    expect(body.firstName).to.equal('Lars')
                    expect(body.username).to.equal('lars@lars.com')
                    done()
                })
        })
    })
}

const updateUserById = () => {
    describe('Update user with id', () => {
        test('Update a user with a id', (done) => {
            Chai.request(server)
                .put(`/user/${global_id}`)
                .send(updatedU)
                .end((error, response) => {
                    expect(response).to.have.a.status(StatusCode.OK)
                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.firstName).to.equal('Alexis')
                    done()
                })
        })
    })
}

const deleteUserById = () => {
    describe('Testing to delete a user with id', () => {
        test('Delete a user with a id', (done) => {
            Chai.request(server)
                .delete(`/user/${global_id}`)
                .end((error, response) => {
                    expect(response).to.have.a.status(StatusCode.OK)
                    expect(response.body.message).to.equal(`Användare med id ${global_id} har tagits bort från databasen!`)
                    done()
                })
        })
    })
}

describe('Test user routes', () => {
    registerUser()
    getAllUsers()
    getUserById()
    getUserByNameAndEmail()
    updateUserById()
    deleteUserById()
})