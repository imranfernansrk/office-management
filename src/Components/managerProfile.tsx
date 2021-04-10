import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { states } from "../reducer";
// import { OrgActions, addTeam } from "../Actions";        //old
import { OrgActions } from "../actions";
import { Messages } from "./messages";
import ManagerDashboard from "./managerDashboard";
import { Button } from "antd";

// export interface teamId {
//     managerName: string
//     teamId: number
// }

export const ManagerProfile = () => {
    const id: { id: string } = useParams()
    console.log(id.id)
    console.log('manager profile', Object.values(id))
    let managerId: number = +id.id

    const [managerDetails, setManagerDetails] = useState<states.teamManagerObj>();
    const [employeesIdList, setEmployeesIdList] = useState<number[]>();
    // const actionDispatch = useDispatch<Dispatch<OrgActions.actionObj>>();        //old
    const datas: any = useSelector<states.orgStateModel.OrgStateModel>(state=>state)

    useEffect(() => {
        const managerData: states.teamManagerObj = datas.teamManagers.find((data: states.teamManagerObj) => data.id === managerId)
        console.log('success',managerData);
        setManagerDetails(managerData);
        const employeesList: number[] =  datas.employees.map((data: states.employeeObj)=>data.id)
        setEmployeesIdList(employeesList);
        // const managerName = managerData.name;
        // const teamId = managerData.teamId;
    }, [managerId]);
    // const managerData: states.teamManagerObj = datas.teamManagers.find((data: states.teamManagerObj) => data.id === managerId)
    // console.log('success',managerData);
    // const managerName = managerData.name;
    // const teamId = managerData.teamId;

    // const employeesIdList: number[] =  datas.employees.map((data: states.employeeObj)=>data.id)

    console.log(employeesIdList)
    // const [selectedList, setSelectedList] = useState<number[]>([])   //old
    // const onChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     let value: number[] = Array.from(event.target.selectedOptions, option => +option.value);
    //     setSelectedList(value);
    //     console.log(selectedList)
    // }

    // const [teamObj, setTeamObj] = useState<states.teamObj>({         //old
    //     teamId: 0,
    //     employeesId: []
    // })
    // useMemo(() => setTeamObj({teamId: teamId, employeesId: selectedList}), [selectedList, teamId])

    const [empIds, setEmpIds] = useState<number[]>([])
    const onChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let value: number[] = Array.from(event.target.selectedOptions, option => +option.value);
        setEmpIds(value);
        console.log(empIds)
    }
    
    const [messageBox, setMessageBox] = useState<boolean>(false)
    const onSubmitEmpIds = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault()
        setMessageBox(true)
        // setEmpIds([])
        // actionDispatch(addTeam(teamObj))     //old
    }
    // const value: string[] =  datas.employees.map((data: states.employeeObj)=>data.id)
    return(
        <div className="">
            {/* <ManagerDashboard /> */}
            <div>
                <Button
                type="link"
                style={{float:'right',margin:'5px'}}>
                <Link to='/login'>Log Out</Link>
                </Button>
                <h2 className="text-center">Manager Profile</h2>
                <h3>Hi {managerDetails?.name}</h3>
            </div>
            <div>
                <form onSubmit={onSubmitEmpIds}>
                    <div>
                    <label className="font-weight-bold">Select Employees to Send the Post</label>
                    <select className="custom-select" multiple={true} onChange={onChangeEvent} >
                    {
                        employeesIdList && employeesIdList.map((data: number)=>(
                            <option value={data}>{data}</option>
                        ))
                    }
                    </select>
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-light btn-outline-dark" type="submit" onSubmit={onSubmitEmpIds}>Select</button>
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