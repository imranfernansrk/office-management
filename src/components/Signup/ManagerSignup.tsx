import React from "react";
import SignupForm from "./SignupForm";
import { Models } from "../../models";
import { SignupString } from "../../constants";

import "./styles.css";

interface Props {
    managerData: Models.TeamManagerObject
    onSubmitMngr: any,
    onChangeEventMngr: any,
    signFor: string
}

const ManagerSignup = ({ signFor, managerData, onSubmitMngr, onChangeEventMngr }: Props) => {
    return (
        <SignupForm
        onSubmitEvent={onSubmitMngr}
        onChangeEvent={onChangeEventMngr}
        signFor={signFor}
        newUserData={managerData}
        labelId={SignupString.MANAGER_ID}
        placeholderId={SignupString.ENTER_MANAGER_ID}
        labelName={SignupString.MANAGER_NAME}
        placeholderName={SignupString.ENTER_MANAGER_NAME}
        formName={SignupString.MANAGER_FORM_NAME}
        labelTeamId={SignupString.TEAM_ID}
        palceholderTeamId={SignupString.ENTER_TEAM_ID} />
    )
}

export default ManagerSignup;