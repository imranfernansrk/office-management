import * as Models from "../models/ManagementModels";
import { ManagementActions } from "../actions";

const initialState: Models.RootState = {
    teamManagers: [
        {
            name: 'Shah Rukh Khan',
            id: '1',
            loginPassword: '123',
            teamId: 100,
        }
    ],
    employees: [
        {
            name: 'Imran Basha',
            id: '10',
            loginPassword: '123',
            teamsId: []
        }
    ],
    messages: [

    ]
}

export const managementReducer = (state: Models.RootStateModels.RootStateModels = initialState, action: ManagementActions.ActionObject): Models.RootStateModels.RootStateModels => {
    console.log('Reducer', action.payload)
    switch (action.type) {
        case ManagementActions.Type.ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        case ManagementActions.Type.ADD_MANAGER:
            
            return {
                ...state,
                teamManagers: [...state.teamManagers, action.payload]
            }
        case ManagementActions.Type.ADD_MESSAGE:                          //changes
                console.log('message reduce', action.payload)
                return {
                    ...state,
                    messages: [...state.messages, action.payload]
                }
        default: return state;
    }
}