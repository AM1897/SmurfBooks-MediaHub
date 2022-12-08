import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import RoutingPath from "./RoutingPath";
import RegisterView from '../../view/RegisterView';
import UserView from '../../view/UserView'
import MessageView from "../../view/messageView/MessageView";
import {ReactNode} from 'react'
import { SignInView } from '../../view/LoginView';

const Routing = (props: { children?: ReactNode }) => {
    return (
        <>
            <BrowserRouter>
                {props.children}
                <Routes>
                    <Route path={RoutingPath.home} element={<SignInView/>}/>
                    <Route path={RoutingPath.user} element={<UserView/>}/>
                    <Route path={RoutingPath.message} element={<MessageView/>}/>
                    <Route path={RoutingPath.login} element={<RegisterView/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing