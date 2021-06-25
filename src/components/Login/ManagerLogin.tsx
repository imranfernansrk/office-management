import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Models } from "../../models";
import SignUpPage from "../Signup/Signup";
import { LoginString } from "../../constants";
import LoginForm from "./LoginForm";

import { notification } from "antd";
import './styles.css'

const ManagerLogin = () => {
    const datas: any = useSelector<Models.RootStateModels.RootStateModels>(state => state)

    const [loginData, setLoginData] = useState<Models.Login>({
        id: '',
        loginPassword: ''
    })

    const [validLogin, setValidLogin] = useState<boolean>(false)
    const [signupContainer, setSignupContainer] = useState<boolean>(false)

    const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: string = event.target.value
        setLoginData({ ...loginData, [fieldName]: value })
    }
    const onSubmitEvent = () => {
        let mngrDatas: Models.TeamManagerObject[] = datas.teamManagers
        console.log(datas)
        console.log(mngrDatas)
        console.log(loginData)

        mngrDatas.map((data: Models.TeamManagerObject, index: number) => {
            let userValid: boolean = false;
            if (data.id == loginData.id) {
                if (data.loginPassword == loginData.loginPassword) {
                    userValid = true;
                    successNotification(LoginString.AUTHENTICATION_SUCCESS);
                    setLoginData({ id: '', loginPassword: '' })
                    sessionStorage.setItem('managerAuth', JSON.stringify(data));
                    setValidLogin(true);
                } else {
                    errorNotification(LoginString.PASSWORD_INCORRECT);
                    setLoginData({ ...loginData, loginPassword: '' })
                }
            }
            if ((mngrDatas.length - 1) == index && !userValid) {
                errorNotification(LoginString.USERNAME_NOT_EXISTED);
            }
        });
    }
    const successNotification = (message: string) => {
        notification.config({
            placement: 'topLeft'
        });
        notification['success']({
            message: message,
        });
    }
    const errorNotification = (message: string) => {
        notification.config({
            placement: 'topLeft'
        });
        notification['error']({
            message: message,
        });
    }
    const onClickSignUpContainer = () => {
        setSignupContainer(true)
    }
    if (validLogin) {
        return (
            <Redirect to="/managerProfile" />
        )
    }
    return (
        <div className="MANAGER_LOGIN_PROFILE">
            <div className="login-form-container">

            <LoginForm 
                placeholderId={LoginString.ENTER_MANAGER_ID}
                placeholderPassword={LoginString.ENTER_MANAGER_PASSWORD}
                loginData={loginData}
                onChangeEvent={onChangeEvent}
                onSubmitEvent={onSubmitEvent}
                onClickSignUpContainer={onClickSignUpContainer}/>
            </div>
            <SignUpPage signupContainer={signupContainer} setSignupContainer={setSignupContainer} managerProfile={true} employeeProfile={false} />
        </div>
    )

}

export default ManagerLogin;