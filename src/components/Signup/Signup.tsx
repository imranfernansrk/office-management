import React, { useState, SetStateAction, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Models } from "../../models";
import { postEmpolyeeData, ManagementActions, postManagerData } from "../../actions";
import ManagerSignup from "./ManagerSignup";
import EmployeeSignup from "./EmployeeSignup";
import { Button, Modal } from "antd";


import "./styles.css";

interface Props {
    signupContainer: boolean,
    setLoginContainer: Dispatch<SetStateAction<boolean>>,
    setSignupContainer: Dispatch<SetStateAction<boolean>>,
    managerProfile: boolean,
    employeeProfile: boolean
}

const SignUpPage = ({ signupContainer, setLoginContainer, setSignupContainer, managerProfile, employeeProfile }: Props) => {
    const datas: any = useSelector<Models.RootStateModels.RootStateModels>(state => state)

    const actionDispatch = useDispatch<Dispatch<ManagementActions.ActionObject>>();

    const [managerData, setManagerData] = useState<Models.TeamManagerObject>({
        name: '',
        id: '',
        loginPassword: '',
        teamId: 0
    })
    const [employeeData, setEmployeeData] = useState<Models.TeamEmployeeObject>({
        name: '',
        id: '',
        loginPassword: '',
        teamsId: []
    })
    const onChangeEventEmp = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: string = event.target.value
        setEmployeeData({ ...employeeData, [fieldName]: value })
        console.log(fieldName, value)
    }
    const onChangeEventNumEmp = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: number = +event.target.value
        setEmployeeData({ ...employeeData, [fieldName]: value })
        console.log(fieldName, value)
    }
    const onChangeEventMngr = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: string = event.target.value
        setManagerData({ ...managerData, [fieldName]: value })
        console.log(fieldName, value)
    }
    const onChangeEventNumMngr = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: number = +event.target.value
        setManagerData({ ...managerData, [fieldName]: value })
        console.log(fieldName, value)
    }
    const onSubmitMngr = () => {
        actionDispatch(postManagerData(managerData))
        console.log(datas)
        datas.teamManagers.map((data: Models.TeamManagerObject) => {
            console.log(data)
        })
        showLoginContainer()
    }
    const onSubmitEmp = () => {
        actionDispatch(postEmpolyeeData(employeeData))
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
                    <Modal title="Create New Account" visible={signupContainer}
                        onCancel={() => showLoginContainer()}
                        footer={
                            [<Button type="primary"
                                size="middle"
                                onClick={() => showLoginContainer()}>
                                Close
                            </Button>,
                            <Button type="primary"
                                size="middle"
                                onClick={() => onSubmitMngr()}
                                htmlType="submit">
                                Create Account
                            </Button>
                            ]}>
                        <ManagerSignup
                            onSubmitMngr={onSubmitMngr}
                            onChangeEventMngr={onChangeEventMngr}
                            onChangeEventNumMngr={onChangeEventNumMngr}/>
                    </Modal>
                )
            }
            {
                employeeProfile && (
                    <Modal title="Create New Account" visible={signupContainer}
                        onCancel={() => showLoginContainer()}
                        footer={
                            [<Button type="primary"
                                size="middle"
                                onClick={() => showLoginContainer()}>
                                Close
                        </Button>,
                            <Button type="primary"
                                size="middle"
                                onClick={() => onSubmitEmp()}
                                htmlType="submit">
                                Create Account
                        </Button>
                            ]}>
                        <EmployeeSignup
                            onChangeEventEmp={onChangeEventEmp}
                            onChangeEventNumEmp={onChangeEventNumEmp}
                            onSubmitEmp={onSubmitEmp} />
                    </Modal>
                )
            }
        </div>
    )
}

export default SignUpPage;