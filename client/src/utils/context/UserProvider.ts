
import { createContext, useContext } from 'react'

export type AuthenticatedContent = {
	authenticatedUser: string;
	setAuthenticatedUser: (username: string) => void
}

export const UserContext = createContext<AuthenticatedContent>({
	authenticatedUser: '',
	setAuthenticatedUser: () => {}
})

export const useUserContext = () => useContext(UserContext)