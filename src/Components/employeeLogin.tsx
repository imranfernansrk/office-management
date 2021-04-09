import React, { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { states } from "../reducer";
import EmployeeProfile from "./employeeProfile";
import SignUpPage from "./signUp";

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
        let value: Number | String = event.target.value
        setLoginData({ ...loginData, [fieldName]: value })
    }
    const onSubmitEvent = (event: React.FormEvent<HTMLButtonElement | HTMLFormElement>) => {
        event.preventDefault()

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
    return (
        <div>
            <div>
                {
                    loginContainer && (
                        <div>
                            <div>
                                <h2 className="text-center">Employee Login</h2>
                            </div>
                            <div>
                                <form className="form" onSubmit={onSubmitEvent}>
                                    <div className="form-group">
                                        <label className="font-weight-bold">Enter Employee Id</label>
                                        <input className="form-control" type="text" name="id" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setLoginData({ ...loginData, id: +event.target.value }) }} />
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold">Enter Password</label>
                                        <input className="form-control" type="password" name="loginPassword" onChange={onChangeEvent} />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary mr-2" type="submit" onSubmit={onSubmitEvent}>Login</button>
                                        <button className="btn btn-outline-primary" type="submit" onClick={onClickSignUpContainer}>Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }
            </div>
            {/* <div>
                <h2>Employee Login</h2>
            </div>
            <div>
            <form className="form" onSubmit={onSubmitEvent}>
                <div className="form-group">
                    <label className="font-weight-bold">Enter Employee Id</label>
                    <input className="form-control" type="text" name="id" onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{setLoginData({...loginData, id : +event.target.value})}}/>
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Enter Password</label>
                    <input className="form-control" type="text" name="loginPassword" onChange={onChangeEvent}/>
                </div>
                <div>
                <button className="btn btn-primary" type="submit" onSubmit={onSubmitEvent}>Login</button>
                </div>
            </form>
            </div> */}
            <div>
                {
                    signupContainer && (<SignUpPage setLoginContainer={setLoginContainer} setSignupContainer={setSignupContainer} managerProfile={false} employeeProfile={true}/>)
                }
            </div>
            <div>
                {
                    validLogin ? (<EmployeeProfile name={activeEmpName} id={activeEmployeeId} teamsId={activeTeamsId} />) : null
                }
            </div>
        </div>
    )
}

export default EmployeeLogin;