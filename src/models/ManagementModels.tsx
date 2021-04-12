export interface TeamManagerObject {
    name: string,
    id: number,
    loginPassword: string,
    teamId: number,
}
export interface TeamEmployeeObject {
    name: string,
    id: number,
    loginPassword: string,
    teamsId?: number[]
}

export interface MessagesObject {          //new
    content: string,
    employeesId: number[],
    teamId: number | undefined
}

export interface RootState {
    teamManagers: TeamManagerObject[]
    employees: TeamEmployeeObject[]
    messages: MessagesObject[]
}

export interface login {
    id: number | undefined,
    loginPassword: ''
}

export namespace RootStateModels {
    export type RootStateModels = RootState
    export type TeamEmployeeStateModel = TeamEmployeeObject
    export type TeamManagerStateModel = TeamManagerObject
    export type MessagesStateModel = MessagesObject             //changes
}

