import { Types } from "./actionTypes";
import { Models } from "../models";

export interface ActionObject {
    type: string,
    payload: any | undefined
}
export const postEmpolyeeData = (postEmpolyeeData: Models.RootStateModels.TeamEmployeeStateModel): ActionObject => {
    return {
        type: Types.ADD_EMPLOYEE,
        payload: postEmpolyeeData
    }
}
export const postManagerData = (addMngrData: Models.RootStateModels.TeamManagerStateModel): ActionObject => {
    return {
        type: Types.ADD_MANAGER,
        payload: addMngrData
    }
}
export const postMessagesData = (addMsgData: Models.RootStateModels.MessagesStateModel): ActionObject => {
    return {
        type: Types.ADD_MESSAGE,
        payload: addMsgData
    }
}

