import React from "react";
import SignupForm from "./SignupForm";
import { Models } from "../../models";
import { SignupString } from "../../constants";

import "./styles.css";

interface Props {
    signFor: string,
    employeeData: Models.TeamEmployeeObject,
    onSubmitEmp: any,
    onChangeEventEmp: any,
}
const EmployeeSignup = ({ onSubmitEmp, onChangeEventEmp, signFor, employeeData }: Props) => {
    return (
        <SignupForm
        onSubmitEvent={onSubmitEmp}
        onChangeEvent={onChangeEventEmp}
        signFor={signFor}
        newUserData={employeeData}
        labelId={SignupString.EMPLOYEE_ID}
        placeholderId={SignupString.ENTER_EMPLOYEE_ID}
        labelName={SignupString.EMPLOYEE_NAME}
        placeholderName={SignupString.ENTER_EMPLOYEE_NAME}
        formName={SignupString.EMPLOYEE_FORM_NAME} />
    )
}
export default EmployeeSignup;