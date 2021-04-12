import { useMemo } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { createAction } from 'redux-actions';
import { Models } from "../models";

export namespace ManagementActions {
    export enum Type {
        ADD_MANAGER = 'ADD_MANAGER',
        ADD_EMPLOYEE = 'ADD_EMPLOYEE',
        ADD_MESSAGE = 'ADD_MESSAGE',
        ADD_TEAM = 'ADD_TEAM'
    }
    export interface ActionObject {
        type: string,
        payload: any | undefined
    }

    export const postEmployeeData = createAction<PartialPick<Models.TeamEmployeeObject, keyof Models.TeamEmployeeObject>>(Type.ADD_EMPLOYEE);
    export const postManagerData = createAction<PartialPick<Models.TeamManagerObject, keyof Models.TeamManagerObject>>(Type.ADD_MANAGER);
    export const postMessagesData = createAction<PartialPick<Models.MessagesObject, keyof Models.MessagesObject>>(Type.ADD_MESSAGE);  //changes


}
export const postEmpolyeeData = (postEmpolyeeData: Models.RootStateModels.TeamEmployeeStateModel): ManagementActions.ActionObject => {
    return {
        type: ManagementActions.Type.ADD_EMPLOYEE,
        payload: postEmpolyeeData
    }
}
export const postManagerData = (addMngrData: Models.RootStateModels.TeamManagerStateModel): ManagementActions.ActionObject => {
    return {
        type: ManagementActions.Type.ADD_MANAGER,
        payload: addMngrData
    }
}
export const postMessagesData = (addMsgData: Models.RootStateModels.MessagesStateModel): ManagementActions.ActionObject => {
    return {
        type: ManagementActions.Type.ADD_MESSAGE,
        payload: addMsgData
    }
}
export type ManagementActions = Omit<typeof ManagementActions, 'Type'>;
export const useOrgActions = (dispatch: Dispatch) => {
    const { Type, ...actions } = ManagementActions;
    return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as ManagementActions.ActionObject;
};

