import React from "react";
import { Link } from "react-router-dom";
import { EmployeeProfileString, EmployeeProfileTitle } from "../../constants";

import { Button } from "antd";
import "./styles.css";

interface Props {
    employeeName: string| undefined,
    messagesListContainer: JSX.Element;
}

const EmployeeProfileBody = ({employeeName, messagesListContainer}: Props) => {
    return(
    <div className="">
        <div>
            <Button
                type="link"
                className="employee-logout-link">
                <Link to='/login'>{EmployeeProfileTitle.LOG_OUT}</Link>
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