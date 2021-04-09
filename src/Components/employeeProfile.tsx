import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { states } from "../reducer";

interface activeEmp {
    name: string
    id: number
    teamsId: number[] | undefined
}

const EmployeeProfile = ({name, id, teamsId}: activeEmp) => {
    const datas: any = useSelector<states.orgStateModel.OrgStateModel>(state => state)

    // const [messagesData, setMessagesData] = useState<states.message[]>(datas.messages)
    // useMemo(() => setMessagesData(datas.messages),[datas.messages])

    // useEffect(()=>{
    //     let messagesData: states.message[] = datas.messages
    //     setMessagesData(messagesData)
    // },[])

    let teams: number[] | undefined;

    datas.employees.map((data : states.employeeObj, index: number) => {
        if(data.id == id){
            teams = data.teamsId
        }
    })
    console.log(teams)

    console.log(teamsId)
    //old
    // const messagesList: JSX.Element = datas.messages.map((data : states.message, index: number) =>
    //     {
    //         if(teamsId?.includes(data.id))
    //             return (<ul className="list-unstyled mt-3">
    //                     <li>Message From Team Id : {data.id}</li>
    //                     <li>Content : {data.content}</li>
    //                     </ul>)
    //     }
    // );
    const messagesList: JSX.Element = datas.messages.map((data : states.messageObj, index: number) =>
    {
        if(data.employeesId.includes(id))
            return (<ul className="list-unstyled mt-3">
                    <li>Message From Team Id : {data.teamId}</li>
                    <li>Content : {data.content}</li>
                    </ul>)
    }
    );
    console.log(id)
    console.log(datas.messages)
    return(
        <div className="mt-3">
            {/* Hai {id} Teams {teamsId} */}
            <div>
                <h2 className="text-center">Employee Profile</h2>
                <h3>Hi {name}</h3>
            </div>
            <div>
                <h4>Messages From Your Managers</h4>
            </div>
            <div>{messagesList}</div>
            {/* {
                datas && datas.messages.map((data: states.message)=>{
                    <ul key={data.id}>
                        <li>{data.id}</li>
                        <li>{data.content}</li>
                    </ul>
                })
            }
            <div>
                {   
                    datas.messages.map((data: states.message)=>{
                        <div>
                            <div>{data.id}</div>
                            <div>{data.content}</div>
                        </div>
                        teamsId?.includes(data.id)&&(<div>{data.content}</div>)
                    })
                }
            </div> */}
        </div>
    )
}

export default EmployeeProfile;