import css from '../view/RegisterView.module.css'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {findAllByDisplayValue} from "@testing-library/react";
import smurf from '../utils/image/smurf.png'
import {CreateOrUpdateUser} from '../utils/interface/Users';
import UserService from '../utils/api/service/userService';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import RoutingPath from '../utils/routing/RoutingPath';

function RegisterView() {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [userCreated, setUserCreated] = useState<boolean>(false)
    const navigate = useNavigate()

    const createUser = () => {
        const payload: CreateOrUpdateUser = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        }

        UserService.createUser(payload)
            .then(response => {
                if (response.status === 201) {
                    setUserCreated(true)
                    setText('New user "' + response.data.username + '" was created! Redirecting you to login..')
                    localStorage.setItem('createdUser', response.data.username)
                    navigate(RoutingPath.home)
                } else {
                    setText('Wrong username or password!')
                }
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className={css.mainGridContainer}>
            <section className={css.section}>
                <label className={css.label}>
                    <input className={css.input} type="text" placeholder='Email-adress' name='user'
                           onChange={event => setUsername(event.target.value)}/>
                </label>
                <br/>
                <label className={css.label}>
                    <input className={css.input} type="text" placeholder='Fullständigt namn' name='firstName'
                           onChange={event => setFirstName(event.target.value)} required={true}/>
                </label>
                <label className={css.label}>
                    <input className={css.input} type="text" placeholder='Användarqnamn' name='lastName'
                           onChange={event => setLastName(event.target.value)} required={true}/>
                </label>
                <br/>
                <label className={css.label}>
                    <input
                        className={css.input} type="password" placeholder='Password' name='password'
                        onChange={event => setPassword(event.target.value)} required={true}/>
                </label>

                {text && `${JSON.stringify(text)}`}
                <button onClick={createUser} className={css.buttonCreateNewAccount}>Create new account</button>
            </section>
            {/* {modal && (
                    console.log('Lol modal')
                )}</> */}
             <section>
                <img className={css.imageSmurf} src={smurf} alt="smurf" />
            </section>
        </div>
    )
}

export default RegisterView

//Aram