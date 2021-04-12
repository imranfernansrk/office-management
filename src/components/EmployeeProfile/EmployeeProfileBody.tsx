import React from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";


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
                style={{ float: 'right', margin: '5px' }}>
                <Link to='/login'>Log Out</Link>
            </Button>                
            <h2 className="text-center">Employee Profile</h2>
            <h3>Hi {employeeName}</h3>
        </div>
        <div>
            <h4>Messages From Your Managers</h4>
        </div>
        <div>{messagesListContainer}</div>
    </div>
    )
}

export default EmployeeProfileBody;