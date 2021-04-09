import React, { useState, SetStateAction, Dispatch, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  } from "redux";
import { states } from "../reducer";
import { addEmpData, OrgActions, addManagerData } from "../actions";
import { store } from '../store';

interface Props{
    // closeSignupPopup: Dispatch<SetStateAction<boolean>>,
    setLoginContainer: Dispatch<SetStateAction<boolean>>,
    setSignupContainer: Dispatch<SetStateAction<boolean>>,
    managerProfile: boolean,
    employeeProfile: boolean
}

const SignUpPage = ({setLoginContainer, setSignupContainer, managerProfile, employeeProfile}: Props) => {
    const datas: any = useSelector<states.orgStateModel.OrgStateModel>(state => state)

    const actionDispatch = useDispatch<Dispatch<OrgActions.actionObj>>();

    // useMemo(() => setEmployeeProfile(false), employeeProfile)
    // useMemo(() => setManagerProfile(false), managerProfile)
    // useEffect(()=>{
    //     setEmployeeProfile(false)
    //     setManagerProfile(false)
    // },[employeeProfile, managerProfile])

    const [managerData, setManagerData] = useState<states.teamManagerObj>({
        name: '',
        id: 0,
        loginPassword: '',
        teamId: 0
    })
    const [employeeData, setEmployeeData] = useState<states.employeeObj>({
        name: '',
        id: 0,
        loginPassword: '',
        teamsId:[]
    })

    const onChangeEventEmp = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: string = event.target.value
        setEmployeeData({...employeeData, [fieldName]:value})
        console.log(fieldName, value)
    }
    const onChangeEventNumEmp = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: number = +event.target.value
        setEmployeeData({...employeeData, [fieldName]:value})
        console.log(fieldName, value)
    }
    const onChangeEventMngr = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: string = event.target.value
        setManagerData({...managerData, [fieldName]:value})
        console.log(fieldName, value)
    }
    const onChangeEventNumMngr = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: number = +event.target.value
        setManagerData({...managerData, [fieldName]:value})
        console.log(fieldName, value)
    }

    const onSubmitMngr = (event: React.FormEvent<HTMLButtonElement | HTMLFormElement>) => {
        event.preventDefault()

        actionDispatch(addManagerData(managerData))
        console.log(datas)
        datas.teamManagers.map((data: states.teamManagerObj)=>{
            console.log(data)
        })
        showLoginContainer()
    }
    const onSubmitEmp = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault()

        actionDispatch(addEmpData(employeeData))
        console.log(datas.employees)
        showLoginContainer()
    }

    const showLoginContainer = () => {
        setLoginContainer(true)
        setSignupContainer(false)
    }
    return (
        <div>
            {
                managerProfile && (
            <div>
                <div>
                    <h3 className="text-center">Manager Sign Up</h3>
                </div>
                <form onSubmit={onSubmitMngr}>
                    <div>
                        <label >Name : </label>
                        <input className=""type="text" name="name" onChange={onChangeEventMngr}/>
                    </div>
                    <div>
                        <label>Enter Manager Id : </label>
                        <input type="text" name="id" onChange={onChangeEventNumMngr} />
                    </div>
                    <div>
                        <label>Team Id : </label>
                        <input type="text" name="teamId" onChange={onChangeEventNumMngr} />
                    </div>
                    <div>
                        <label>Login Password : </label>
                        <input type="password" name="loginPassword" onChange={onChangeEventMngr} />
                    </div>
                    <div>
                        <button className="btn btn-md btn-success mr-2" onSubmit={onSubmitMngr}>Submit</button>
                        <button className="btn btn-danger" onClick={()=>showLoginContainer()}>Close</button>
                    </div>
                </form>
            </div>
                )
            }
            {
                employeeProfile && (
                    <div>
                    <div>
                        <h3 className="text-center">Employee Sign Up</h3>
                    </div>
                    <form onSubmit={onSubmitEmp}>
                        <div>
                            <label>Name : </label>
                            <input type="text" name="name" onChange={onChangeEventEmp}/>
                        </div>
                        <div>
                            <label>Enter Employee Id : </label>
                            <input type="text" name="id" onChange={onChangeEventNumEmp}/>
                        </div>
                        <div>
                            <label>Login Password : </label>
                            <input type="password" name="loginPassword" onChange={onChangeEventEmp}/>
                        </div>
                        <div>
                            <button className="btn btn-md btn-success mr-2" type="submit" onSubmit={onSubmitEmp}>Submit</button>
                            <button className="btn btn-danger" onClick={()=>showLoginContainer()}>Close</button>
                            {/* <button className="btn btn-danger" onClick={()=>closeSignupPopup(false)}>Close</button> */}
                        </div>
                    </form>
                </div>
                )
            }
        </div>
    )
}

export default SignUpPage;