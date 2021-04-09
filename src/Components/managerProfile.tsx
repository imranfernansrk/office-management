import React, { useState, Dispatch, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { states } from "../reducer";
// import { OrgActions, addTeam } from "../Actions";        //old
import { OrgActions } from "../actions";
import { Messages } from "./messages";

export interface teamId {
    managerName: string
    teamId: number
}

export const ManagerProfile = ({managerName, teamId}: teamId) => {
    const datas: any = useSelector<states.orgStateModel.OrgStateModel>(state=>state)
    // const actionDispatch = useDispatch<Dispatch<OrgActions.actionObj>>();        //old

    const employeesIdList: number[] =  datas.employees.map((data: states.employeeObj)=>data.id)

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
    const value: string[] =  datas.employees.map((data: states.employeeObj)=>data.id)
    return(
        <div className="mt-3">
            <div>
                <h2 className="text-center">Manager Profile</h2>
                <h3>Hi {managerName}</h3>
            </div>
            <div>
                <form onSubmit={onSubmitEmpIds}>
                    <div>
                    <label className="font-weight-bold">Select Employees to Send the Post</label>
                    <select className="custom-select" multiple={true} onChange={onChangeEvent} >
                    {
                        employeesIdList.map((data: number)=>(
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
                    messageBox && (<Messages setMessageBox={setMessageBox} teamId={teamId} selectedEmpsIds={empIds}/>)
                }
            </div>
        </div>
    )
}

export default ManagerProfile;