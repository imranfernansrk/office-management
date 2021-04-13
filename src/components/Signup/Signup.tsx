import React, { useState, SetStateAction, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Models } from "../../models";
import { postEmpolyeeData, postManagerData, ActionObject } from "../../actions";
import ManagerSignup from "./ManagerSignup";
import EmployeeSignup from "./EmployeeSignup";
import { Button, Modal } from "antd";


import "./styles.css";

interface Props {
    signupContainer: boolean,
    setSignupContainer: Dispatch<SetStateAction<boolean>>,
    managerProfile: boolean,
    employeeProfile: boolean
}

const SignUpPage = ({ signupContainer, setSignupContainer, managerProfile, employeeProfile }: Props) => {
    const datas: any = useSelector<Models.RootStateModels.RootStateModels>(state => state)

    const actionDispatch = useDispatch<Dispatch<ActionObject>>();

    const [managerData, setManagerData] = useState<Models.TeamManagerObject>({
        name: '',
        id: '',
        loginPassword: '',
        teamId: ''
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
    const onChangeEventMngr = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let value: string = event.target.value
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
                            managerData={managerData}
                            onSubmitMngr={onSubmitMngr}
                            onChangeEventMngr={onChangeEventMngr}
                            signFor="manager" />
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
                            onSubmitEmp={onSubmitEmp}
                            employeeData={employeeData}
                            signFor="employee" />
                    </Modal>
                )
            }
        </div>
    )
}

export default SignUpPage;