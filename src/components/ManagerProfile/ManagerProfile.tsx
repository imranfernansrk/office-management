import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Models } from "../../models";
import { Messages } from "../Messages";
import { ManagerProfileString, ManagerProfileTitle } from "../../constants";
import ManagerDashboard from "./ManagerDashboard";

import "./styles.css";
import { Button } from "antd";

export const ManagerProfile = () => {
    const id: { id: string } = useParams()
    console.log(id.id)
    console.log('manager profile', Object.values(id))
    let managerId: string = id.id

    const [managerDetails, setManagerDetails] = useState<Models.TeamManagerObject>();
    const [employeesIdList, setEmployeesIdList] = useState<number[]>();
    const datas: any = useSelector<Models.RootStateModels.RootStateModels>(state=>state)

    useEffect(() => {
        const managerData: Models.TeamManagerObject = datas.teamManagers.find((data: Models.TeamManagerObject) => data.id == managerId)
        console.log('success',managerData);
        setManagerDetails(managerData);
        const employeesList: number[] =  datas.employees.map((data: Models.TeamEmployeeObject)=>data.id)
        setEmployeesIdList(employeesList);
    }, [managerId]);

    console.log(employeesIdList)
    const [empIds, setEmpIds] = useState<string[]>([])
    const onChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let value: string[] = Array.from(event.target.selectedOptions, option => option.value);
        setEmpIds(value);
        console.log(empIds)
    }
    
    const [messageBox, setMessageBox] = useState<boolean>(false)
    const onSubmitEmpIds = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault()
        setMessageBox(true)
    }
    return(
        <div className="">
            {/* <ManagerDashboard /> */}
            <div>
                <Button
                type="link"
                className="manager-logout-link">
                <Link to='/login'>{ManagerProfileTitle.LOG_OUT}</Link>
                </Button>
                <h2 className="text-center">{ManagerProfileString.MANAGER_PROFILE}</h2>
                <h3>{ManagerProfileString.USER_NAME} : {managerDetails?.name}</h3>
            </div>
            <div>
                <form onSubmit={onSubmitEmpIds}>
                    <div>
                    <label className="font-weight-bold">{ManagerProfileString.SELECT_EMPLOYEES_ID}</label>
                    <select className="custom-select" multiple={true} onChange={onChangeEvent} >
                    {
                        employeesIdList && employeesIdList.map((data: number)=>(
                            <option value={data}>{data}</option>
                        ))
                    }
                    </select>
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-light btn-outline-dark" type="submit" onSubmit={onSubmitEmpIds}>{ManagerProfileTitle.SELECT}</button>
                    </div>
                </form>
            </div>
            <div>
                {
                    messageBox && (<Messages setMessageBox={setMessageBox} teamId={managerDetails?.teamId} selectedEmpsIds={empIds}/>)
                }
            </div>
        </div>
    )
}

export default ManagerProfile;