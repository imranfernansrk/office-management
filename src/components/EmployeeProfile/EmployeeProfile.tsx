import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { EmployeeProfileString } from "../../constants";
import { Models } from "../../models";
import EmployeeProfileBody from "./EmployeeProfileBody";

const EmployeeProfile = () => {

    const datas: any = useSelector<Models.RootStateModels.RootStateModels>(state => state)

    const [employeeDetails, setEmployeeDetails] = useState<Models.TeamEmployeeObject>()
    const [userLogout, setUserLogged] = useState<boolean>(false);
    useEffect(() => {
        let employeeObject = sessionStorage.getItem('employeeAuth');
        if (employeeObject != null) {
            const emplyeeData = JSON.parse(employeeObject);
            setEmployeeDetails(emplyeeData);
        } else {
            setUserLogged(true);
        }
    }, [])
    console.log('eployee id', employeeDetails?.id)
    console.log('teamsId', employeeDetails?.teamsId)
    console.log('msg object', datas);
    const messagesList: JSX.Element = datas.messages.map((data: Models.MessagesObject, index: number) => {
        if (employeeDetails?.id != undefined && data.employeesId.includes(employeeDetails?.id))
            return (<ul className="list-unstyled mt-3">
                <li>{EmployeeProfileString.MESSAGE_FROM_TEAM_ID} {data.teamId}</li>
                <li>{EmployeeProfileString.CONTENT} {data.content}</li>
            </ul>)

            return null;
    }
    );
    const clearLoggedUser = () => {
        sessionStorage.removeItem('employeeAuth');
        setUserLogged(true);
    }
    if (userLogout) {
        return (<Redirect to="/login" />)
    }
    return (
        <div className="">
            <EmployeeProfileBody clearLoggedUser={clearLoggedUser} employeeName={employeeDetails?.name} messagesListContainer={messagesList} />
        </div>
    )
}

export default EmployeeProfile;