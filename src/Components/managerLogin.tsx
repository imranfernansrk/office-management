import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { states } from "../reducer";
import ManagerProfile from "./managerProfile";
import SignUpPage from "./signUp";

import './styles/managerLogin.css'

import { Typography, Form, Input, Button } from "antd";
const { Title } = Typography;

interface Props {
    showLogoutButton: Dispatch<SetStateAction<boolean>>
}

const ManagerLogin = ({ showLogoutButton }: Props) => {
    const datas: any = useSelector<states.orgStateModel.OrgStateModel>(state => state)

    // const [mngrDatas, setMngrDatas] = useState([])
    // useEffect(() => {
    //     setMngrDatas(datas.teamManagers)
    // }, [])

    const [loginData, setLoginData] = useState<states.login>({
        id: undefined,
        loginPassword: ''
    })
    // interface idc{
    //     id: number
    // }

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
            setLoginData({ ...loginData, [fieldName]: +value })
        } else {
            setLoginData({ ...loginData, [fieldName]: value })
        }
    }
    const onSubmitEvent = (event: React.FormEvent<HTMLButtonElement | HTMLFormElement>) => {
        event.preventDefault()

        let mngrDatas: states.teamManagerObj[] = datas.teamManagers

        console.log(datas)
        console.log(mngrDatas)
        console.log(loginData)

        setValidLogin(false)
        mngrDatas.map((data: states.teamManagerObj) => {
            if (data.id == loginData.id) {
                if (data.loginPassword == loginData.loginPassword) {
                    setValidLogin(true)
                    let teamId: number = data.teamId
                    setActiveTeamId(teamId)
                    setActiveManagerName(data.name)
                    setLoginContainer(false)
                    showLogoutButton(true)
                    alert(`Login successfully`)
                    setLoginData({ id: undefined, loginPassword: '' })
                    console.log('success')
                    console.log('in map', validLogin, teamId)
                } else {
                    alert(`Password Incorrect`)
                    setLoginData({ ...loginData, loginPassword: '' })
                }
            }
        });
        // if(!validLogin){
        //     alert(`Login failed`)
        //     setLoginData({id:undefined,loginPassword:''})
        // }
        console.log('end map', validLogin)
    }
    const onClickSignUpContainer = () => {
        setLoginContainer(false)
        setSignupContainer(true)
    }
    // export const onClickLoginContainer = () => {
    //     setLoginContainer(false)
    //     setSignupContainer(true)    
    // }
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    return (
        <div>
            <div>
                {
                    loginContainer && (
                        <div>
                            <div>
                                <Title level={2} className="text-center">Manager Login</Title>
                            </div>
                            <div className="FORM_CONTAINER">
                                <Form
                                    name="normal_login"
                                    className="LOGIN_FORM">
                                    {/* {...layout}> */}
                                    <Form.Item
                                        label="Manager Id"
                                        name="id"
                                        rules={[{ required: true, message: 'Please input your id!' }]}
                                    >
                                        <Input onChange={(e) => onChangeEvent(e)}
                                            value={loginData.id}
                                            // onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setLoginData({ ...loginData, id: +event.target.value })}} 
                                            placeholder="Enter Manager Id" />
                                    </Form.Item>
                                    <Form.Item
                                        label="Password"
                                        name="loginPassword"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password
                                            value={loginData.loginPassword}
                                            onChange={(e) => onChangeEvent(e)}
                                            placeholder="Enter Password" />
                                    </Form.Item>
                                    <Form.Item
                                        className="LOGIN_FORGOT_LINK">
                                        <a className="login-form-forgot" href="">
                                            Forgot password
                                        </a>
                                    </Form.Item>
                                    <div
                                        className="LOGIN_FORM_BUTTONS">
                                        <Button type="primary"
                                            size="large"
                                            htmlType="submit"
                                            className="LOGIN_BUTTON">
                                            Login
                                        </Button>
                                        <Button type="primary"
                                            size="large"
                                            className="SIGNUP_BUTTON">
                                            Sign Up
                                        </Button>
                                    </div>
                                </Form>
                                {/* <form className="form" onSubmit={onSubmitEvent}>
                                    <div className="form-group">
                                        <label className="font-weight-bold">Enter Manager Id</label>
                                        <input className="form-control" value={loginData.id} type="text" name="id" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setLoginData({ ...loginData, id: +event.target.value }) }} />
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold">Enter Password</label>
                                        <input className="form-control" value={loginData.loginPassword} type="password" name="loginPassword" onChange={onChangeEvent} />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary mr-2" type="submit" onSubmit={onSubmitEvent}>Login</button>
                                        <button className="btn btn-outline-primary" type="submit" onClick={() => onClickSignUpContainer()}>Sign Up</button>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                    )
                }
            </div>
            {
                signupContainer && (<SignUpPage setLoginContainer={setLoginContainer} setSignupContainer={setSignupContainer} managerProfile={true} employeeProfile={false} />)
            }
            {
                // validLogin ? (<div><ManagerProfile managerName={activeManagerName} teamId={activeTeamId}/><Messages teamId={activeTeamId} /></div>) : null
                validLogin ? (<div><ManagerProfile managerName={activeManagerName} teamId={activeTeamId} /></div>) : null
            }
        </div>
    )

}

export default ManagerLogin;