import React from "react";
import { LoginTitle } from "../../constants";
import { Models } from "../../models";

import { Form, Input, Button } from "antd";
import './styles.css'

interface Props {
    loginData: Models.Login
    placeholderId: string,
    placeholderPassword: string,
    onSubmitEvent: any,
    onChangeEvent: any,
    onClickSignUpContainer: any
}

const LoginForm = ({ loginData, placeholderId,
    placeholderPassword, onSubmitEvent,
    onChangeEvent, onClickSignUpContainer }: Props) => {

    return (
        <Form
            name="normal_login"
            className="login-form"
            onFinish={() => onSubmitEvent()}>
            <Form.Item>
                <Input onChange={(e) => onChangeEvent(e)}
                    name="id"
                    value={loginData.id}
                    placeholder={placeholderId} />
            </Form.Item>
            <Form.Item>
                <Input.Password
                    value={loginData.loginPassword}
                    name="loginPassword"
                    onChange={(e) => onChangeEvent(e)}
                    placeholder={placeholderPassword} />
            </Form.Item>
            <Form.Item
                className="login-form-external-link">
                <a className="login-form-forgot" href="">
                    {LoginTitle.FORGOT_PASSWORD}
                </a>
            </Form.Item>
            <div
                className="login-form-buttons">
                <Button type="primary"
                    size="large"
                    htmlType="submit"
                    className="form-login-button">
                    {LoginTitle.LOG_IN}
                </Button>
            </div>
            <Form.Item
                className="login-form-external-link">
                <a
                    className="login-form-forgot"
                    onClick={() => onClickSignUpContainer()}>
                    {LoginTitle.REGISTER}
                </a>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;