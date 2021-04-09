import { orgReducer } from "./reducer"

export interface teamManagerObj {
    name: string,
    id: number,
    loginPassword: string,
    teamId: number,
}
export interface employeeObj {
    name: string,
    id: number,
    loginPassword: string,
    teamsId?: number[]
}
// export interface message {       //old
//     content: string,
//     id: number
// }

export interface messageObj {          //new
    content: string,
    employeesId: number[],
    teamId: number
}

export interface orgState {
    teamManagers: teamManagerObj[]
    employees: employeeObj[]
    messages: messageObj[]
}

export interface login {
    id: number | undefined,
    loginPassword: ''
}

// export interface teamObj {                           //old
//     teamId: number,
//     employeesId: number[]
// }

export namespace orgStateModel {
    export type OrgStateModel = orgState
    export type EmpStateModel = employeeObj
    export type MngrStateModel = teamManagerObj
    // export type MsgsStateModel = message             //old
    export type MsgsStateModel = messageObj             //changes
    // export type teamStateModel = teamObj             //old
    // export type rootReducer = typeof orgReducer
}

