import React, { useState, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { Models } from "../../models";
import { ManagementActions, postMessagesData } from "../../actions";
import TextArea from "antd/lib/input/TextArea";
import { notification } from "antd";

export interface teamId {
    setMessageBox: Dispatch<SetStateAction<boolean>>
    teamId: number | undefined
    selectedEmpsIds: number[]
}

export const Messages = ({setMessageBox, teamId, selectedEmpsIds}: teamId) => {
    console.log(teamId)
    console.log(selectedEmpsIds)

    const actionDispatch = useDispatch<Dispatch<ManagementActions.ActionObject>>();

    const [messageData, setMessageData] = useState<Models.MessagesObject>({
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
            <form onSubmit={onSubmitMessage}>
                <TextArea className="mr-3" name="content" onChange={(e)=>onChangeEvent(e)}/>
                <button className="btn btn-md btn-success mt-2" type="submit" onSubmit={onSubmitMessage}>Send Message</button>
            </form>
        </div>
    )
}
