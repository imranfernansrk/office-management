import React from "react";
import { Form, Input } from "antd";

import "./styles.css";

interface Props {
    formName: string,
    signFor: string,
    newUserData: any,
    onSubmitEvent: any,
    onChangeEvent: any,
    labelName: string,
    placeholderName: string,
    labelId: string,
    placeholderId: string,
    labelTeamId?: string,
    palceholderTeamId?: string,
}

const ManagerSignup = ({ formName, signFor, newUserData, 
    onSubmitEvent, onChangeEvent,
    labelName, placeholderName,
    labelId, placeholderId,
    labelTeamId, palceholderTeamId
    }: Props) => {
    return (
        <Form
            name={formName}
            className="form-signup"
            onFinish={(e) => onSubmitEvent(e)}>
            <Form.Item
                label={labelName}
                rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input onChange={(e) => onChangeEvent(e)}
                    value={newUserData.name}
                    name="name"
                    placeholder={placeholderName} />
            </Form.Item>            
            <Form.Item
                label={labelId}
                rules={[{ required: true, message: 'Please input your id!' }]}>
                <Input onChange={(e) => onChangeEvent(e)}
                    value={newUserData.id}
                    name="id"
                    placeholder={placeholderId} />
            </Form.Item>
            {
                (signFor == "manager") ? (
                    <Form.Item
                    label={labelTeamId}
                    rules={[{ required: true, message: 'Please input your team id!' }]}>
                    <Input onChange={(e) => onChangeEvent(e)}
                        value={newUserData.teamId}
                        name="teamId"
                        placeholder={palceholderTeamId} />
                </Form.Item>
                ) : null
            }
            <Form.Item
                label="Password"
                rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password
                    value={newUserData.loginPassword}
                    name="loginPassword"
                    onChange={(e) => onChangeEvent(e)}
                    placeholder="Enter New Password" />
            </Form.Item>
        </Form>
    )
}

export default ManagerSignup;