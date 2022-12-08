import './utils/styles/global.css';
// import Alive from './components/Alive'
import Header from "./components/header/Header";
import Routing from "./utils/routing/Routing";
import NavigationBar from "./components/navigationBar/NavigationBar";
import React, { useEffect, useState } from 'react'
import { UserContext } from '../src/utils/context/UserProvider'

function App() {
	const [authenticatedUser, setAuthenticatedUser] = useState<string>('')

	const checkIfUserIsAuthenticatedInBrowser = () => {
		const userId = localStorage.getItem('userId')
		if (typeof userId === 'string') {
			setAuthenticatedUser(userId)
		}
	}
	
	useEffect(() => {
		checkIfUserIsAuthenticatedInBrowser()
	}, [])
	
	return (
		<UserContext.Provider value={{ authenticatedUser, setAuthenticatedUser}}>
			<Routing>
				<Header/>
				<NavigationBar/>
			</Routing>
		</UserContext.Provider>
	)
}

export default App
