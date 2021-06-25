import React from "react";
import { EmployeeProfileString, EmployeeProfileTitle } from "../../constants";

import { Button } from "antd";
import "./styles.css";

interface Props {
    employeeName: string | undefined,
    messagesListContainer: JSX.Element | undefined,
    clearLoggedUser: any
}

const EmployeeProfileBody = ({employeeName, messagesListContainer, clearLoggedUser}: Props) => {
    console.log("JSX msg",messagesListContainer)
    return(
    <div className="">
        <div>
            <Button
                type="link"
                className="employee-logout-link"
                onClick={()=>clearLoggedUser()}>
                {EmployeeProfileTitle.LOG_OUT}
            </Button>                
            <h2 className="text-center">{EmployeeProfileString.EMPLOYEE_PROFILE}</h2>
            <h3>{EmployeeProfileString.USERNAME} {employeeName}</h3>
        </div>
        <div>
            <h4>{EmployeeProfileString.MESSAGES_FROM_MANAGERS}</h4>
        </div>
        <div>{messagesListContainer}</div>
    </div>
    )
}

export default EmployeeProfileBody;