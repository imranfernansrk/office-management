export interface TeamManagerObject {
    name: string,
    id: string,
    loginPassword: string,
    teamId: string,
}
export interface TeamEmployeeObject {
    name: string,
    id: string,
    loginPassword: string,
    teamsId?: string[]
}

export interface MessagesObject {          //new
    content: string,
    employeesId: string[],
    teamId: string | undefined
}

export interface RootState {
    teamManagers: TeamManagerObject[]
    employees: TeamEmployeeObject[]
    messages: MessagesObject[]
}

export interface Login {
    id: string,
    loginPassword: string
}

export namespace RootStateModels {
    export type RootStateModels = RootState
    export type TeamEmployeeStateModel = TeamEmployeeObject
    export type TeamManagerStateModel = TeamManagerObject
    export type MessagesStateModel = MessagesObject             //changes
}

