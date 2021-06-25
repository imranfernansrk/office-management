import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Models } from "../../models";
import SignUpPage from "../Signup/Signup";
import { LoginString } from "../../constants";
import LoginForm from "./LoginForm";
import { notification } from "antd";

import './styles.css'


const EmployeeLogin = () => {
    const datas: any = useSelector<Models.RootStateModels.RootStateModels>(state => state)

    const [loginData, setLoginData] = useState<Models.Login>({
        id: '',
        loginPassword: ''
    })
    const [validLogin, setValidLogin] = useState<boolean>(false);
    const [signupContainer, setSignupContainer] = useState<boolean>(false)

    const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: string = event.target.value
        setLoginData({ ...loginData, [fieldName]: value })
    }
    const onSubmitEvent = () => {
        let empDatas: Models.TeamEmployeeObject[] = datas.employees

        console.log(loginData)
        console.log(empDatas)
        empDatas.map((data: Models.TeamEmployeeObject, index: number) => {
            let userValid: boolean = false;
            if (data.id == loginData.id) {
                if (data.loginPassword == loginData.loginPassword) {
                    userValid = true;
                    successNotification(LoginString.AUTHENTICATION_SUCCESS);
                    setLoginData({ id: '', loginPassword: '' })
                    console.log('valid emp', data)
                    sessionStorage.setItem('employeeAuth', JSON.stringify(data));
                    setValidLogin(true);
                } else {
                    errorNotification(LoginString.PASSWORD_INCORRECT);
                    setLoginData({ ...loginData, loginPassword: '' })
                }
            }
            if ((empDatas.length - 1) == index && !userValid) {
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
            <Redirect to="/employeeProfile" />
        )
    }
    return (
        <div className="employee-login-profile">
            <div className="login-form-container">
                <LoginForm 
                placeholderId={LoginString.ENTER_EMPLOYEE_ID}
                placeholderPassword={LoginString.ENTER_EMPLOYEE_PASSWORD}
                loginData={loginData}
                onChangeEvent={onChangeEvent}
                onSubmitEvent={onSubmitEvent}
                onClickSignUpContainer={onClickSignUpContainer}/>
            </div>
            <SignUpPage signupContainer={signupContainer} setSignupContainer={setSignupContainer} managerProfile={false} employeeProfile={true} />
        </div>
    )
}

export default EmployeeLogin;