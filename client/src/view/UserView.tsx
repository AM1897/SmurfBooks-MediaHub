import css from '../view/UserView.module.css'
import smurffen from '../utils/image/smurffen.jpg'
import { useUserContext } from '../utils/context/UserProvider'
import UService from '../utils/api/service/UService'
import { useEffect, useState } from 'react'
import UserService from '../utils/api/service/userService'
import { CreateOrUpdateUser } from '../utils/interface/Users'

function UserView() {
    const authenticatedUser = useUserContext()
    const user = authenticatedUser.authenticatedUser
    const userId = localStorage.getItem('userId')
    
    const [userFirstName, setUserFirstName] = useState<string>('')
    const [userLastName, setUserLastName] = useState<string>('')
    const [userEmail, setUserEmail] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')

    const [editedFirstName, setEditedFirstName] = useState<string>('')
    const [editedLastName, setEditedLastName] = useState<string>('')
    const [editedEmail, setEditedEmail] = useState<string>('')


    console.log('value of "authenticatedUser": ' + user)

    const [isEdit, setIsEdit] = useState(true)
    
    const findUser = () => {
        if (userId) {
        const theUser = UService.getById(userId)
        theUser.then((result) => {
            console.log('the result of findUser() is: ' + result.data)
            setUserFirstName(result.data.firstName)
            setUserLastName(result.data.lastName)
            setUserEmail(result.data.username)
            setUserPassword(result.data.password)
            return
        }).catch((err) => {
            console.log(err)
        });
        }
    }


    function saveChanges() {
		const payload: CreateOrUpdateUser = {
            username: editedEmail.length < 1 ? userEmail : editedEmail,
            firstName: editedFirstName.length < 1 ? userFirstName : editedFirstName,
            lastName: editedLastName.length < 1 ? userLastName : editedLastName,
            password: userPassword
        }
        
        userId && UserService.updateUserById(userId, payload)
			.then(function (response) {
                const result = response.data
				console.log(result)
			})
			.catch(function (error) {
				console.log(error)
			})
            setIsEdit(!isEdit)
            localStorage.removeItem('username')
            localStorage.setItem('username', editedEmail)
            return
        }
	
    
    return (
        <>
            <div className={css.section}>
                <section>
                    <img className={css.imageUser} src={smurffen} alt="user"/>
                    <>{findUser()}</>
                    <h4>Namn: {userFirstName} {userLastName}</h4>
                    <h4>Email: {userEmail}</h4>
                    </section>
                    <section className={css.editing} hidden={isEdit}>
                    <p>
                        <input data-testid='inputFullName' type="text" placeholder="FirstName" disabled={isEdit} onChange={ event => setEditedFirstName(event.target.value) }/> 
                        <input data-testid='inputLastName' type="text" placeholder="LastName" disabled={isEdit} onChange={ event => setEditedLastName(event.target.value) }/>
                        <br/>
                        <input data-testid='inputEmail' type="text" placeholder="E-mail" disabled={isEdit} onChange={ event => setEditedEmail(event.target.value) }/>
                        <input data-testid='inputWork' type="text" placeholder="Work" disabled={true}/>
                        <br/>
                        <input data-testid='inputPassword' type="password" placeholder="password" disabled={true}/>
                    </p>
                </section>
                <section>
                    {isEdit 
                        ? <button onClick={() => setIsEdit(false)}>Uppdatera användaruppgifter</button>
                        : <button onClick={() => saveChanges()}>SAVE CHANGES</button>
                    }
                </section>
            </div>
        </>
    )
}

export default UserView