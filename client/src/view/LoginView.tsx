import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RoutingPath from '../utils/routing/RoutingPath'
import UserService from '../utils/api/service/UService'
import { useUserContext } from '../utils/context/UserProvider'
import { LoginU } from '../utils/interface/Users'
import css from './LoginView.module.css'

export const SignInView = () => {
	const [username, setUsername] = useState<string>('')
	const [userId, setUserId] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [loginText, setLoginText] = useState<string>('')
	const [userData, setUserData] = useState<object>({userId:'', authenticated: false})
	const {authenticatedUser, setAuthenticatedUser} = useUserContext()
	const [newUserCheck, setNewUserCheck] = useState<boolean>()
	
	const navigate = useNavigate()
	
	const verifyUser = () => {
        const payload: LoginU = {
            username: username,
            password: password
        }
		
		UserService.verifyUser(payload)
			.then(function(response: { data: { message: boolean, userId: string } }) {
				login(username)
				setUserId(response.data.userId)
				const userInfo = {userId: response.data.userId, authenticated: response.data.message}
				setUserData(userInfo)
				localStorage.setItem("auth", String(response.data.message))
				localStorage.setItem("userId", response.data.userId)
				setLoginText('Login successful!')
				console.log(userInfo)
				return userInfo
			})
			.catch(function (error: any) {
				console.log(error)
			})
	}

	function isLoggedIn() {
		if (authenticatedUser) {
			navigate(RoutingPath.user)
		} else {
			navigate(RoutingPath.home)
		}
	}
	
	function login(apiResponse: any) {
		if (apiResponse) {
			setAuthenticatedUser(apiResponse)
			// const savedUser = localStorage.getItem("auth")
			// console.log(savedUser ? JSON.parse(savedUser) : undefined )
			localStorage.setItem('username', username)
			navigate(RoutingPath.user)
		} else {
			setLoginText('Wrong username or password')
		}
	}

	const whatsInStore = localStorage.getItem('createdUser')

	function checkCreatedUser() {
		if (whatsInStore) {
			console.log('New user identified.. Proceed to update "loginText".')
			setLoginText('New user with username ' + localStorage.getItem('createdUser')?.valueOf() + ' was created!')
			localStorage.removeItem('createdUser')
			setNewUserCheck(false)
		}
	}
	useEffect(() => {
	  !newUserCheck && checkCreatedUser()
	  }, [])
	
	checkCreatedUser()
	return (
		<div>
			<div className={css.mainGridContainer}>
				<h1>Logga in</h1>
            <section className={css.section}>
                <input
                       className={css.input}
                    type="text"
                    placeholder='e-mail'
                    name='user'
                    onChange={event => setUsername(event.target.value)} />
                <br />
                <article>
                    <input className={css.input}
                        type="password"
                        placeholder='Password'
                        name='password:'
                        onChange={event => setPassword(event.target.value)}
                        required={true} />
                </article>
                <br />
                <button className={css.button} onClick={() => verifyUser()}>Log in</button>
				<h3>{ loginText }</h3>
				</section>
				</div>
			{/* <div>
				<span>Username: </span>
				<input type='text' onChange={ event => setUsername(event.target.value) }/>
				<span>Password: </span>
				<input type='password' onChange={ event => setPassword(event.target.value) }/>
			</div> */}
			
			{/* {!authenticatedUser && <button onClick={ () => verifyUser() } children={ 'Log In' }/>} */}
			{/* {authenticatedUser && <button onClick={ () => alert(authenticatedUser) } children={ 'Show user' }/>} */}
			
		</div>
	)
}
