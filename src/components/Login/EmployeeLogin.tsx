import React, { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory, generatePath } from "react-router-dom";
import { Models } from "../../models";
import SignUpPage from "../Signup/Signup";

import './styles.css'


import { Typography, Form, Input, Button, Modal, notification } from "antd";
const { Title } = Typography;

interface Props {
    showLogoutButton: Dispatch<SetStateAction<boolean>>
}

const EmployeeLogin = ({showLogoutButton}: Props) => {
    const datas: any = useSelector<Models.RootStateModels.RootStateModels>(state => state)

    const [loginData, setLoginData] = useState<Models.login>({
        id: undefined,
        loginPassword: ''
    })
    const [validLogin, setValidLogin] = useState<boolean>(false)
    const [activeEmployeeId, setActiveEmployeeId] = useState<number>(0)
    const [activeTeamsId, setActiveTeamsId] = useState<number[] | undefined>([])
    const [activeEmpName, setActiveEmpName] = useState<string>('')
    const [loginContainer, setLoginContainer] = useState<boolean>(true)
    const [signupContainer, setSignupContainer] = useState<boolean>(false)

    const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: string = event.target.value
        console.log(value)
        if (fieldName == 'id') {
            setLoginData({ ...loginData, [fieldName]: +value })
        } else {
            setLoginData({ ...loginData, [fieldName]: value })
        }
        console.log([fieldName],value)
    }
    const onSubmitEvent = (event: React.FormEvent<HTMLButtonElement | HTMLFormElement>) => {
        let empDatas: Models.TeamEmployeeObject[] = datas.employees

        console.log(loginData)
        console.log(empDatas)
        setValidLogin(false)
        empDatas.map((data: Models.TeamEmployeeObject) => {
            if (data.id === loginData.id) {
                if (data.loginPassword === loginData.loginPassword) {
                    setValidLogin(true)
                    let empId: number = data.id
                    setActiveEmployeeId(empId)
                    setActiveTeamsId(data.teamsId)
                    setLoginContainer(false)
                    setActiveEmpName(data.name)
                    showLogoutButton(true)
                    // alert(`Login successfully`)
                    successNotification(`Authentication success`);
                    setLoginData({id:undefined,loginPassword:''})
                    console.log('success')
                    console.log('in map', validLogin, empId)
                    validLoginManager(data.id)
                }else{
                    // alert(`Password Incorrect`)
                    errorNotification(`Password Incorrect`);
                    setLoginData({...loginData,loginPassword:''})
                }
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
        setLoginContainer(false)
        setSignupContainer(true)
    }

    const history = useHistory();
    const validLoginManager = (id: number) => {
        id && history.push(generatePath("/employeeProfile/:id", { id }));
        console.log('Employee id', id);
        setValidLogin(true);
    } 

    if(validLogin){
        return(
            <Redirect to="/employeeProfile/:id" />
        )
    }
    return (
        <div className="employee-login-profile">
                {
                    loginContainer && (
                        <div className="login-form-container">
                                <Form
                                    name="normal_login"
                                    className="login-form"
                                    onFinish={(e)=>onSubmitEvent(e)}
                                    style={{padding:'10px'}}>
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
                                            Forgot password
                                        </a>
                                    </Form.Item>
                                    <div
                                        className="login-form-buttons">
                                        <Button type="primary"
                                            size="large"
                                            htmlType="submit"
                                            className="form-login-button"
                                            style={{width:'100%'}}
                                            >
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
                {
                    signupContainer && <SignUpPage signupContainer={signupContainer} setLoginContainer={setLoginContainer} setSignupContainer={setSignupContainer} managerProfile={false} employeeProfile={true}/>
                }
        </div>
    )
}

export default EmployeeLogin;