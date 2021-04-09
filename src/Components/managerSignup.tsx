import React from "react";

import "./styles/signupPage.css";

import { Typography, Form, Input, Button } from "antd";
const { Title } = Typography;

interface Props {
    onSubmitMngr: any,
    onChangeEventMngr: any,
    showLoginContainer: any,
    onChangeEventNumMngr: any
}

const ManagerSignup = ({ onSubmitMngr, onChangeEventMngr, showLoginContainer, onChangeEventNumMngr }: Props) => {
    return (
        <Form
            name="manager_register"
            className=""
            onFinish={(e) => onSubmitMngr(e)}
            style={{ padding: '10px' }}
        >
            {/* <Title level={2} className="text-center">Create New Manager</Title> */}
            <Form.Item
                label="Manager Name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input onChange={(e) => onChangeEventMngr(e)}
                    name="name"
                    placeholder="Enter Manager Name" />
            </Form.Item>            <Form.Item
                label="Manager Id"
                rules={[{ required: true, message: 'Please input your id!' }]}
            >
                <Input onChange={(e) => onChangeEventNumMngr(e)}
                    name="id"
                    placeholder="Enter Manager Id" />
            </Form.Item>
            <Form.Item
                label="Team Id"
                rules={[{ required: true, message: 'Please input your team id!' }]}
            >
                <Input onChange={(e) => onChangeEventNumMngr(e)}
                    name="teamId"
                    placeholder="Enter Team Id" />
            </Form.Item>
            <Form.Item
                label="Password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password
                    name="loginPassword"
                    onChange={(e) => onChangeEventNumMngr(e)}
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
        // <form onSubmit={onSubmitMngr}>
        //     <div>
        //         <label >Name : </label>
        //         <input className="" type="text" name="name" onChange={onChangeEventMngr} />
        //     </div>
        //     <div>
        //         <label>Enter Manager Id : </label>
        //         <input type="text" name="id" onChange={onChangeEventNumMngr} />
        //     </div>
        //     <div>
        //         <label>Team Id : </label>
        //         <input type="text" name="teamId" onChange={onChangeEventNumMngr} />
        //     </div>
        //     <div>
        //         <label>Login Password : </label>
        //         <input type="password" name="loginPassword" onChange={onChangeEventMngr} />
        //     </div>
        //     <div>
        //         <button className="btn btn-md btn-success mr-2" onSubmit={onSubmitMngr}>Submit</button>
        //         <button className="btn btn-danger" onClick={() => showLoginContainer()}>Close</button>
        //     </div>
        // </form>
    )
}

export default ManagerSignup;