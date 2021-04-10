import React, { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory, generatePath } from "react-router-dom";
import { states } from "../reducer";
import EmployeeProfile from "./employeeProfile";
import SignUpPage from "./signup";

import './styles/employeeLogin.css'

import { Typography, Form, Input, Button, Modal } from "antd";
const { Title } = Typography;

interface Props {
    showLogoutButton: Dispatch<SetStateAction<boolean>>
}

const EmployeeLogin = ({showLogoutButton}: Props) => {
    const datas: any = useSelector<states.orgStateModel.OrgStateModel>(state => state)

    const [loginData, setLoginData] = useState<states.login>({
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
        let empDatas: states.employeeObj[] = datas.employees

        console.log(loginData)
        console.log(empDatas)
        setValidLogin(false)
        empDatas.map((data: states.employeeObj) => {
            if (data.id === loginData.id) {
                if (data.loginPassword === loginData.loginPassword) {
                    setValidLogin(true)
                    let empId: number = data.id
                    setActiveEmployeeId(empId)
                    setActiveTeamsId(data.teamsId)
                    setLoginContainer(false)
                    setActiveEmpName(data.name)
                    showLogoutButton(true)
                    alert(`Login successfully`)
                    setLoginData({id:undefined,loginPassword:''})
                    console.log('success')
                    console.log('in map', validLogin, empId)
                    validLoginManager(data.id)
                }else{
                    alert(`Password Incorrect`)
                    setLoginData({...loginData,loginPassword:''})
                }
            }
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
        <div className="EMPLOYEE_LOGIN_PROFILE">
                {
                    loginContainer && (
                        // <div>
                        //     <div>
                        //         <h2 className="text-center">Employee Login</h2>
                        //     </div>
                        //     <div>
                        //         <form className="form" onSubmit={onSubmitEvent}>
                        //             <div className="form-group">
                        //                 <label className="font-weight-bold">Enter Employee Id</label>
                        //                 <input className="form-control" type="text" name="id" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setLoginData({ ...loginData, id: +event.target.value }) }} />
                        //             </div>
                        //             <div className="form-group">
                        //                 <label className="font-weight-bold">Enter Password</label>
                        //                 <input className="form-control" type="password" name="loginPassword" onChange={onChangeEvent} />
                        //             </div>
                        //             <div>
                        //                 <button className="btn btn-primary mr-2" type="submit" onSubmit={onSubmitEvent}>Login</button>
                        //                 <button className="btn btn-outline-primary" type="submit" onClick={onClickSignUpContainer}>Sign Up</button>
                        //             </div>
                        //         </form>
                        //     </div>
                        // </div>
                        <div className="LOGIN_FORM_CONTAINER">
                                <Form
                                    name="normal_login"
                                    className="LOGIN_FORM"
                                    onFinish={(e)=>onSubmitEvent(e)}
                                    style={{padding:'10px'}}
                                    >
                                    {/* <Title level={2} className="text-center">Employee Login</Title> */}
                                    <Form.Item
                                        // label="Employee Id"
                                        // rules={[{ required: true, message: 'Please input your id!' }]}
                                    >
                                        <Input onChange={(e) => onChangeEvent(e)}
                                            name="id"
                                            value={loginData.id}
                                            // onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setLoginData({ ...loginData, id: +event.target.value })}} 
                                            placeholder="Enter Employee Id" />
                                    </Form.Item>
                                    <Form.Item
                                        // label="Password"
                                        // rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password
                                            value={loginData.loginPassword}
                                            name="loginPassword"
                                            onChange={(e) => onChangeEvent(e)}
                                            placeholder="Enter Employee Password" />
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
                                            className="EMPLOYEE_LOGIN_BUTTON"
                                            style={{width:'100%'}}
                                            >
                                            Login
                                        </Button>
                                        {/* <Button type="link"
                                            size="large"
                                            className="EMPLOYEE_SIGNUP_BUTTON"
                                            onClick={() => onClickSignUpContainer()}>
                                            Register
                                        </Button> */}
                                    </div>
                                    <Form.Item
                                        className="LOGIN_FORGOT_LINK">
                                        <a className="login-form-forgot" onClick={() => onClickSignUpContainer()}>
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

                {
                    // signupContainer && (<SignUpPage setLoginContainer={setLoginContainer} setSignupContainer={setSignupContainer} managerProfile={false} employeeProfile={true}/>)
                }
                {/* {
                    validLogin ? (<EmployeeProfile name={activeEmpName} id={activeEmployeeId} teamsId={activeTeamsId} />) : null
                } */}
        </div>
    )
}

export default EmployeeLogin;