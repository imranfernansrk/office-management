import React from "react";

import "./styles/signupPage.css";

import { Typography, Form, Input, Button } from "antd";
const { Title } = Typography;

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
            style={{ padding: '10px' }}
        >
            {/* <Title level={2} className="text-center">Create New Employee</Title> */}
            <Form.Item
                label="Emplyee Name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input onChange={(e) => onChangeEventEmp(e)}
                    name="name"
                    placeholder="Enter Employee Name" />
            </Form.Item>            
            <Form.Item
                label="Employee Id"
                rules={[{ required: true, message: 'Please input your id!' }]}
            >
                <Input onChange={(e) => onChangeEventNumEmp(e)}
                    name="id"
                    placeholder="Enter Employee Id" />
            </Form.Item>
            <Form.Item
                label="Password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password
                    name="loginPassword"
                    onChange={(e) => onChangeEventEmp(e)}
                    placeholder="Enter Password" />
            </Form.Item>
            {/* <div
                className="SIGNUP_FOOTER_BUTTONS">
                <Button type="primary"
                    size="large"
                    className="CLOSE_SIGNUP_BUTTON"
                    onClick={() => showLoginContainer()}>
                    Close
                </Button>
                <Button type="primary"
                    size="large"
                    htmlType="submit"
                    className=""
                >
                    Create Account
                </Button>
            </div> */}
        </Form>
        //     <form onSubmit={onSubmitEmp}>
        //     <div>
        //         <label>Name : </label>
        //         <input type="text" name="name" onChange={onChangeEventEmp}/>
        //     </div>
        //     <div>
        //         <label>Enter Employee Id : </label>
        //         <input type="text" name="id" onChange={onChangeEventNumEmp}/>
        //     </div>
        //     <div>
        //         <label>Login Password : </label>
        //         <input type="password" name="loginPassword" onChange={onChangeEventEmp}/>
        //     </div>
        //     <div>
        //         <button className="btn btn-md btn-success mr-2" type="submit" onSubmit={onSubmitEmp}>Submit</button>
        //         <button className="btn btn-danger" onClick={()=>showLoginContainer()}>Close</button>
        //     </div>
        // </form>
    )
}
export default EmployeeSignup;