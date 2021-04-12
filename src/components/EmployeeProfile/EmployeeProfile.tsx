import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Models } from "../../models";
import EmployeeProfileBody from "./EmployeeProfileBody";

const EmployeeProfile = () => {
    const emp: { id: string } = useParams()
    console.log(emp.id)
    console.log('manager profile', Object.values(emp.id))
    let empId: number = +emp.id

    const datas: any = useSelector<Models.RootStateModels.RootStateModels>(state => state)

    const [employeeDetails, setEmployeeDetails] = useState<Models.TeamEmployeeObject>()
    useEffect(() => {
        const employeeData: Models.TeamEmployeeObject = datas.employees.find((data: Models.TeamEmployeeObject) => data.id == empId)
        setEmployeeDetails(employeeData);
    }, [empId])
    let teams: number[] | undefined;

    datas.employees.map((data: Models.TeamEmployeeObject, index: number) => {
        if (data.id == employeeDetails?.id) {
            teams = data.teamsId
        }
    })
    console.log(teams)
    console.log(employeeDetails?.teamsId)
    const messagesList: JSX.Element = datas.messages.map((data: Models.MessagesObject, index: number) => {
        if (data.employeesId.includes(empId))
            return (<ul className="list-unstyled mt-3">
                <li>Message From Team Id : {data.teamId}</li>
                <li>Content : {data.content}</li>
            </ul>)
    }
    );
    console.log(employeeDetails?.id)
    console.log(datas.messages)
    return (
        <div className="">
            <EmployeeProfileBody employeeName={employeeDetails?.name} messagesListContainer={messagesList}/>
        </div>
    )
}

export default EmployeeProfile;