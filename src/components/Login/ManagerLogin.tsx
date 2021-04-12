import React, { useState } from "react";
import { useHistory, generatePath, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Models } from "../../models";
import SignUpPage from "../Signup/Signup";
import { LoginTitle, LoginString } from "../../constants";
import { Form, Input, Button, notification } from "antd";

import './styles.css'

const ManagerLogin = () => {
    const datas: any = useSelector<Models.RootStateModels.RootStateModels>(state => state)

    const [loginData, setLoginData] = useState<Models.Login>({
        id: '',
        loginPassword: ''
    })

    const [validLogin, setValidLogin] = useState<boolean>(false)
    const [validManagerId, setValidManagerId] = useState<string>('');
    const [loginContainer, setLoginContainer] = useState<boolean>(true)
    const [signupContainer, setSignupContainer] = useState<boolean>(false)

    const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: string = event.target.value
        setLoginData({ ...loginData, [fieldName]: value })
    }
    const onSubmitEvent = (event: React.FormEvent<HTMLButtonElement | HTMLFormElement>) => {
        let mngrDatas: Models.TeamManagerObject[] = datas.teamManagers

        console.log(datas)
        console.log(mngrDatas)
        console.log(loginData)

        mngrDatas.map((data: Models.TeamManagerObject, index: number) => {
            let userValid: boolean = false;
            if (data.id == loginData.id) {
                if (data.loginPassword == loginData.loginPassword) {
                    userValid = true;
                    let teamId: number = data.teamId;
                    setLoginContainer(false)
                    successNotification(LoginString.AUTHENTICATION_SUCCESS);
                    setLoginData({ id: '', loginPassword: '' })
                    validLoginManager(data.id)
                } else {
                    errorNotification(LoginString.PASSWORD_INCORRECT);
                    setLoginData({ ...loginData, loginPassword: '' })
                }
            }
            if((mngrDatas.length-1) == index && !userValid){
                errorNotification(LoginString.USERNAME_NOT_EXISTED);
            }
        });
        console.log('end map', validLogin)
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
        setLoginContainer(false)
        setSignupContainer(true)
    }
    const history = useHistory();
    const validLoginManager = (id: string) => {
        // id && history.push(generatePath("/managerProfile/:id", { id }));
        console.log('manager id', id);
        setValidManagerId(id);
        setValidLogin(true);
    }

    if (validLogin) {
        const url = `/managerProfile/${validManagerId}`
        return (
            <Redirect to={url} />
        )
    }
    return (
        <div className="MANAGER_LOGIN_PROFILE">
            {
                loginContainer && (
                    <div className="login-form-container">
                        <Form
                            name="normal_login"
                            className="login-form"
                            onFinish={(e) => onSubmitEvent(e)}>
                            <Form.Item>
                                <Input onChange={(e) => onChangeEvent(e)}
                                    name="id"
                                    value={loginData.id}
                                    placeholder="Enter Manager Id" />
                            </Form.Item>
                            <Form.Item>
                                <Input.Password
                                    value={loginData.loginPassword}
                                    name="loginPassword"
                                    onChange={(e) => onChangeEvent(e)}
                                    placeholder="Enter Manager Password" />
                            </Form.Item>
                            <Form.Item
                                className="login-form-external-link">
                                <a className="login-form-forgot">
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
                )
            }
            <SignUpPage signupContainer={signupContainer} setLoginContainer={setLoginContainer} setSignupContainer={setSignupContainer} managerProfile={true} employeeProfile={false} />
        </div>
    )

}

export default ManagerLogin;