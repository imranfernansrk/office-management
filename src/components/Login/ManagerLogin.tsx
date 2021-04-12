import React, { useState, Dispatch, SetStateAction } from "react";
import { useHistory, generatePath, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Models } from "../../models";
import SignUpPage from "../Signup/Signup";
import { Form, Input, Button, notification } from "antd";

import './styles.css'

interface Props {
    showLogoutButton: Dispatch<SetStateAction<boolean>>
}

const ManagerLogin = ({ showLogoutButton }: Props) => {
    const datas: any = useSelector<Models.RootStateModels.RootStateModels>(state => state)

    const [loginData, setLoginData] = useState<Models.login>({
        id: undefined,
        loginPassword: ''
    })

    const [validLogin, setValidLogin] = useState<boolean>(false)
    const [activeTeamId, setActiveTeamId] = useState<number>(0)
    const [activeManagerName, setActiveManagerName] = useState<string>('')
    const [loginContainer, setLoginContainer] = useState<boolean>(true)
    const [signupContainer, setSignupContainer] = useState<boolean>(false)

    const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: string = event.target.value
        console.log(value)
        if (fieldName == 'id') {
            console.log(+value)
            setLoginData({ ...loginData, [fieldName]: +value })
        } else {
            setLoginData({ ...loginData, [fieldName]: value })
        }
        console.log([fieldName], value)
    }
    const onSubmitEvent = (event: React.FormEvent<HTMLButtonElement | HTMLFormElement>) => {
        console.log('submitclicked')
        let mngrDatas: Models.TeamManagerObject[] = datas.teamManagers

        console.log(datas)
        console.log(mngrDatas)
        console.log(loginData)

        setValidLogin(false)
        mngrDatas.map((data: Models.TeamManagerObject, index: number) => {
            if (data.id == loginData.id) {
                if (data.loginPassword == loginData.loginPassword) {
                    setValidLogin(true)
                    let teamId: number = data.teamId
                    setActiveTeamId(teamId)
                    setActiveManagerName(data.name)
                    setLoginContainer(false)
                    showLogoutButton(true)
                    successNotification('Authentication success');
                    setLoginData({ id: undefined, loginPassword: '' })
                    console.log('success')
                    console.log('in map', validLogin, teamId)
                    validLoginManager(data.id)
                } else {
                    errorNotification(`Password Incorrect`);
                    setLoginData({ ...loginData, loginPassword: '' })
                }
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
    const validLoginManager = (id: number) => {
        id && history.push(generatePath("/managerProfile/:id", { id }));
        console.log('manager id', id);
        setValidLogin(true);
    }

    if (validLogin) {
        return (
            <Redirect to="/managerProfile/:id" />
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
                            onFinish={(e) => onSubmitEvent(e)}
                            style={{ padding: '10px' }}>
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
                                    Forgot password
                                        </a>
                            </Form.Item>
                            <div
                                className="login-form-buttons">
                                <Button type="primary"
                                    size="large"
                                    htmlType="submit"
                                    className="form-login-button"
                                    style={{ width: '100%' }}>
                                    Login
                                        </Button>
                            </div>
                            <Form.Item
                                className="login-form-external-link">
                                <a 
                                className="login-form-forgot"
                                onClick={() => onClickSignUpContainer()}>
                                    Register
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