import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { EmployeeProfileString } from "../../constants";
import { Models } from "../../models";
import EmployeeProfileBody from "./EmployeeProfileBody";

const EmployeeProfile = () => {
    // const emp: { id: string } = useParams()
    // console.log(emp.id)
    // console.log('manager profile', Object.values(emp.id))
    // let empId: string = emp.id;

    const datas: any = useSelector<Models.RootStateModels.RootStateModels>(state => state)

    const [employeeDetails, setEmployeeDetails] = useState<Models.TeamEmployeeObject>()
    const [userLogout, setUserLogged] = useState<boolean>(false);
    const [messageListOut, setMessageListOut] = useState<JSX.Element>();
    // useEffect(() => {
    //     const employeeData: Models.TeamEmployeeObject = datas.employees.find((data: Models.TeamEmployeeObject) => data.id == empId)
    //     setEmployeeDetails(employeeData);
    // }, [empId])
    useEffect(() => {
        let managerObject = sessionStorage.getItem('employeeAuth');
        if(managerObject != null){
            const emplyeeData = JSON.parse(managerObject);
            setEmployeeDetails(emplyeeData);
        }else{
            setUserLogged(true);
        }
    }, [])
    let teams: number[] | undefined;

    datas.employees.map((data: Models.TeamEmployeeObject, index: number) => {
        if (data.id == employeeDetails?.id) {
            teams = data.teamsId
        }
    })
    console.log(teams)
    console.log(employeeDetails?.teamsId)
    // if(employeeDetails?.id != undefined){
        const messagesList: JSX.Element = datas.messages.map((data: Models.MessagesObject, index: number) => {
            if (employeeDetails?.id != undefined && data.employeesId.includes(employeeDetails?.id))
                return (<ul className="list-unstyled mt-3">
                    <li>{EmployeeProfileString.MESSAGE_FROM_TEAM_ID} {data.teamId}</li>
                    <li>{EmployeeProfileString.CONTENT} {data.content}</li>
                </ul>)
        }
        );    
    //     setMessageListOut(messagesList); 
    // }
    console.log(employeeDetails?.id)
    console.log(datas.messages);

    const clearLoggedUser = () => {
        sessionStorage.removeItem('employeeAuth');
        setUserLogged(true);
    }
    if(userLogout){
        return (<Redirect to="/login" />)
    }
    return (
        <div className="">
            <EmployeeProfileBody clearLoggedUser={clearLoggedUser} employeeName={employeeDetails?.name} messagesListContainer={messagesList}/>
        </div>
    )
}

export default EmployeeProfile;