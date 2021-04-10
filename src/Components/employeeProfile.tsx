import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { states } from "../reducer";
import { Button } from "antd";

// interface activeEmp {
//     name: string
//     id: number
//     teamsId: number[] | undefined
// }

const EmployeeProfile = () => {
    const emp: { id: string } = useParams()
    console.log(emp.id)
    console.log('manager profile', Object.values(emp.id))
    let empId: number = +emp.id

    const datas: any = useSelector<states.orgStateModel.OrgStateModel>(state => state)

    const [employeeDetails, setEmployeeDetails] = useState<states.employeeObj>()
    // const [messagesData, setMessagesData] = useState<states.message[]>(datas.messages)
    // useMemo(() => setMessagesData(datas.messages),[datas.messages])

    // useEffect(()=>{
    //     let messagesData: states.message[] = datas.messages
    //     setMessagesData(messagesData)
    // },[])

    useEffect(() => {
        const employeeData: states.employeeObj = datas.employees.find((data: states.employeeObj) => data.id == empId)
        setEmployeeDetails(employeeData);
    }, [empId])
    let teams: number[] | undefined;

    datas.employees.map((data: states.employeeObj, index: number) => {
        if (data.id == employeeDetails?.id) {
            teams = data.teamsId
        }
    })
    console.log(teams)

    console.log(employeeDetails?.teamsId)
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
    const messagesList: JSX.Element = datas.messages.map((data: states.messageObj, index: number) => {
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
            {/* Hai {id} Teams {teamsId} */}
            <div>
                <Button
                    type="link"
                    style={{ float: 'right', margin: '5px' }}>
                    <Link to='/login'>Log Out</Link>
                </Button>                <h2 className="text-center">Employee Profile</h2>
                <h3>Hi {employeeDetails?.name}</h3>
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