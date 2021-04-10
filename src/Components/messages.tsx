import React, { useState, Dispatch, useMemo, useEffect, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { states } from "../reducer";
import { OrgActions, addMessageData } from "../actions";
import TextArea from "antd/lib/input/TextArea";

export interface teamId {
    setMessageBox: Dispatch<SetStateAction<boolean>>
    teamId: number | undefined
    selectedEmpsIds: number[]
}

export const Messages = ({setMessageBox, teamId, selectedEmpsIds}: teamId) => {
    console.log(teamId)
    console.log(selectedEmpsIds)
    // const datas: any = useSelector<states.orgStateModel.OrgStateModel>(state => state)

    const actionDispatch = useDispatch<Dispatch<OrgActions.actionObj>>();

    // const [messageContent, setMessageContent] = useState('')


    // useMemo(() => setMessageData({...messageData, id: teamId}),[teamId])

    // useEffect(() => {
    //     setMessageData({...messageData, id: teamId})
    // }, [])

    // const [messageData, setMessageData] = useState<states.message>({             //old
    //     id: teamId,
    //     content: ''
    // })

    const [messageData, setMessageData] = useState<states.messageObj>({
        employeesId: [...selectedEmpsIds],
        teamId: teamId,
        content: ''
    })
    console.log('After the setState',messageData)

    const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const fieldName = event.target.name
        let value: string = event.target.value

        setMessageData({...messageData, [fieldName]:value})
        console.log(messageData)
    }

    const onSubmitMessage = (event: React.FormEvent<HTMLButtonElement | HTMLFormElement>) => {
        event.preventDefault()
        // setMessageData({...messageData, employeesId: [...selectedEmpsIds]})
        // setMessageData({...messageData, content:messageContent})
        console.log(messageData)
        actionDispatch(addMessageData(messageData))

        // setMessageData({...messageData,content:''});
        setMessageBox(false)
        alert(`Post sent successfully`)
    }

    // let mngrDatas: states.messageObj[] = datas.messages
    // console.log(mngrDatas)
    // mngrDatas.map((data)=>{
    //     console.log(data.teamId, data.content, data.employeesId)
    // })

    return(
        <div className="mt-3">
            <form onSubmit={onSubmitMessage}>
                <TextArea className="mr-3" name="content" onChange={(e)=>onChangeEvent(e)}/>
                <button className="btn btn-md btn-success mt-2" type="submit" onSubmit={onSubmitMessage}>Send Message</button>
            </form>
        </div>
    )
}
