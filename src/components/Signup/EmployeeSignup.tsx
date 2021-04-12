import React from "react";

import "./styles.css";
import { Form, Input } from "antd";

interface Props {
    onSubmitEmp: any,
    onChangeEventEmp: any,
    onChangeEventNumEmp: any,
    showLoginContainer: any
}
const EmployeeSignup = ({ onSubmitEmp, onChangeEventEmp, onChangeEventNumEmp, showLoginContainer }: Props) => {
    return (
        <Form
            name="manager_register"
            className=""
            onFinish={(e) => onSubmitEmp(e)}
            style={{ padding: '10px' }}>
            <Form.Item
                label="Emplyee Name"
                rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input onChange={(e) => onChangeEventEmp(e)}
                    name="name"
                    placeholder="Enter Employee Name" />
            </Form.Item>
            <Form.Item
                label="Employee Id"
                rules={[{ required: true, message: 'Please input your id!' }]}>
                <Input onChange={(e) => onChangeEventNumEmp(e)}
                    name="id"
                    placeholder="Enter Employee Id" />
            </Form.Item>
            <Form.Item
                label="Password"
                rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password
                    name="loginPassword"
                    onChange={(e) => onChangeEventEmp(e)}
                    placeholder="Enter Password" />
            </Form.Item>
        </Form>
    )
}
export default EmployeeSignup;