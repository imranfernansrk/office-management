import React from "react";
import { Form, Input } from "antd";

import "./styles.css";

interface Props {
    onSubmitMngr: any,
    onChangeEventMngr: any,
    onChangeEventNumMngr: any
}

const ManagerSignup = ({ onSubmitMngr, onChangeEventMngr, onChangeEventNumMngr }: Props) => {
    return (
        <Form
            name="manager_register"
            className="form-signup"
            onFinish={(e) => onSubmitMngr(e)}>
            <Form.Item
                label="Manager Name"
                rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input onChange={(e) => onChangeEventMngr(e)}
                    name="name"
                    placeholder="Enter Manager Name" />
            </Form.Item>            <Form.Item
                label="Manager Id"
                rules={[{ required: true, message: 'Please input your id!' }]}>
                <Input onChange={(e) => onChangeEventNumMngr(e)}
                    name="id"
                    placeholder="Enter Manager Id" />
            </Form.Item>
            <Form.Item
                label="Team Id"
                rules={[{ required: true, message: 'Please input your team id!' }]}>
                <Input onChange={(e) => onChangeEventNumMngr(e)}
                    name="teamId"
                    placeholder="Enter Team Id" />
            </Form.Item>
            <Form.Item
                label="Password"
                rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password
                    name="loginPassword"
                    onChange={(e) => onChangeEventNumMngr(e)}
                    placeholder="Enter Password" />
            </Form.Item>
        </Form>
    )
}

export default ManagerSignup;