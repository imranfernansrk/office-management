import React, { useState, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { Models } from "../../models";
import { ActionObject, postMessagesData } from "../../actions";
import { MessagesTitle } from "../../constants";

import { notification, Input } from "antd";
const { TextArea } = Input;

export interface teamId {
    setMessageBox: Dispatch<SetStateAction<boolean>>
    teamId: string | undefined
    selectedEmpsIds: string[]
}

export const Messages = ({setMessageBox, teamId, selectedEmpsIds}: teamId) => {
    console.log(teamId)
    console.log(selectedEmpsIds)

    const actionDispatch = useDispatch<Dispatch<ActionObject>>();

    const [messageData, setMessageData] = useState<Models.MessagesObject>({
        employeesId: [...selectedEmpsIds],
        teamId: teamId,
        content: ''
    })
    console.log('After the setState',messageData)

    const onChangeEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let value: string = event.target.value;

        setMessageData({...messageData, ["content"]:value})
        console.log(messageData)
    }

    const onSubmitMessage = (event: React.FormEvent<HTMLButtonElement | HTMLFormElement>) => {
        event.preventDefault()
        console.log(messageData)
        actionDispatch(postMessagesData(messageData))
        setMessageBox(false)
        successNotification('Post sent successfully');
    }
    const successNotification = (message: string) => {
        notification.config({
            placement: 'topLeft'
        });
        notification['success']({
            message: message,
        });
    }

    return(
        <div className="mt-3">
            <form onSubmit={(e)=>onSubmitMessage(e)}>
                <TextArea value={messageData.content} onChange={(e)=>onChangeEvent(e)}/>
                <button className="btn btn-md btn-success mt-2" type="submit" onSubmit={(e)=>onSubmitMessage(e)}>{MessagesTitle.SEND_MESSAGE}</button>
            </form>
        </div>
    )
}
