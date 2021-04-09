import React, {useMemo} from "react";
import { Dispatch, bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { createAction } from 'redux-actions';
import { states } from "../reducer";
import { EnumType } from "typescript";

export namespace OrgActions {
    export enum Type {
      ADD_MANAGER = 'ADD_MANAGER',
      ADD_EMPLOYEE = 'ADD_EMPLOYEE',
      ADD_MESSAGE = 'ADD_MESSAGE',
      ADD_TEAM = 'ADD_TEAM'
    //   CHECK_ID = 'CHECK_ID',
    //   FETCH_EMPLOYEE_DETAILS = 'FETCH_EMPLOYEE_DETAILS',
    //   FETCH_MANAGER_DETAILS = 'FETCH_MANAGER_DETAILS'
  }
    export interface actionObj {
        type: string,
        payload: any | undefined
    }

    export const addEmployeeData = createAction<PartialPick<states.employeeObj, keyof states.employeeObj>>(Type.ADD_EMPLOYEE);
    export const addManagerData = createAction<PartialPick<states.teamManagerObj, keyof states.teamManagerObj>>(Type.ADD_MANAGER);
    // export const addMessageData = createAction<PartialPick<states.message, keyof states.message>>(Type.ADD_MANAGER);     //old
    // export const addTeam = createAction<PartialPick<states.orgState, keyof states.orgState>>(Type.ADD_TEAM);             //old
    export const addMessageData = createAction<PartialPick<states.messageObj, keyof states.messageObj>>(Type.ADD_MESSAGE);  //changes

    
}
export const addEmpData = (addEmpData: states.orgStateModel.EmpStateModel) : OrgActions.actionObj=> {
    return {
        type: OrgActions.Type.ADD_EMPLOYEE,
        payload: addEmpData
    }
}
export const addManagerData = (addMngrData: states.orgStateModel.MngrStateModel) : OrgActions.actionObj=> {
    return {
        type: OrgActions.Type.ADD_MANAGER,
        payload: addMngrData
    }
}
export const addMessageData = (addMsgData: states.orgStateModel.MsgsStateModel) : OrgActions.actionObj=> {
    return {
        type: OrgActions.Type.ADD_MESSAGE,
        payload: addMsgData
    }
}
// export const addTeam = (teamObj: states.orgStateModel.teamStateModel) : OrgActions.actionObj=> {             //old
//     return {
//         type: OrgActions.Type.ADD_TEAM,
//         payload: teamObj
//     }
// }
    // export const actionDispatch = useDispatch<Dispatch<OrgActions.actionObj>>();
    // export const addEmployeeData = actionDispatch(addEmpData())
    //addManagerData



  export type OrgActions = Omit<typeof OrgActions, 'Type'>;
  export const useOrgActions = (dispatch: Dispatch) => {
    const { Type, ...actions } = OrgActions;
    return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as OrgActions;
  };

