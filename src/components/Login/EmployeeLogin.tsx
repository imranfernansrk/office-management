import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory, generatePath } from "react-router-dom";
import { Models } from "../../models";
import SignUpPage from "../Signup/Signup";
import { LoginTitle, LoginString } from "../../constants";

import './styles.css'

import { Form, Input, Button, notification } from "antd";

const EmployeeLogin = () => {
    const datas: any = useSelector<Models.RootStateModels.RootStateModels>(state => state)

    const [loginData, setLoginData] = useState<Models.Login>({
        id: '',
        loginPassword: ''
    })
    const [validLogin, setValidLogin] = useState<boolean>(false);
    const [validEmployeeId, setValidEmployeeId] = useState<string>('');
    const [loginContainer, setLoginContainer] = useState<boolean>(true)
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
        // setLoginContainer(false)
        setSignupContainer(true)
    }

    const history = useHistory();
    const validLoginManager = (id: string) => {
        // id && history.push(generatePath("/employeeProfile/:id", { id }));
        console.log('Employee id', id);
        setValidEmployeeId(id);
        setValidLogin(true);
    }

    if (validLogin) {
        // const url = `/employeeProfile/${validEmployeeId}`
        return (
            // <Redirect to={url} />
            <Redirect to="/employeeProfile" />
        )
    }
    return (
        <div className="employee-login-profile">
            <div className="login-form-container">
                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={() => onSubmitEvent()}>
                    <Form.Item>
                        <Input onChange={(e) => onChangeEvent(e)}
                            name="id"
                            value={loginData.id}
                            placeholder="Enter Employee Id" />
                    </Form.Item>
                    <Form.Item>
                        <Input.Password
                            value={loginData.loginPassword}
                            name="loginPassword"
                            onChange={(e) => onChangeEvent(e)}
                            placeholder="Enter Employee Password" />
                    </Form.Item>
                    <Form.Item
                        className="login-form-external-link">
                        <a className="login-form-forgot" href="">
                            {LoginTitle.FORGOT_PASSWORD}
                        </a>
                    </Form.Item>
                    <div
                        className="login-form-buttons">
                        <Button type="primary"
                            size="large"
                            htmlType="submit"
                            className="form-login-button">
                            {LoginTitle.LOG_IN}
                        </Button>
                    </div>
                    <Form.Item
                        className="login-form-external-link">
                        <a
                            className="login-form-forgot"
                            onClick={() => onClickSignUpContainer()}>
                            {LoginTitle.REGISTER}
                        </a>
                    </Form.Item>
                </Form>
            </div>
            <SignUpPage signupContainer={signupContainer} setLoginContainer={setLoginContainer} setSignupContainer={setSignupContainer} managerProfile={false} employeeProfile={true} />
        </div>
    )
}

export default EmployeeLogin;