import * as Models from "../models/ManagementModels";
import { ActionObject } from "../actions";
import { Types } from "../actions";

const initialState: Models.RootState = {
    teamManagers: [
        {
            name: 'Shah Rukh Khan',
            id: '1',
            loginPassword: '123',
            teamId: '100',
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
    messages: []
}

export const managementReducer = (state: Models.RootStateModels.RootStateModels = initialState, action: ActionObject): Models.RootStateModels.RootStateModels => {
    console.log('Reducer', action.payload)
    switch (action.type) {
        case Types.ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        case Types.ADD_MANAGER:

            return {
                ...state,
                teamManagers: [...state.teamManagers, action.payload]
            }
        case Types.ADD_MESSAGE:                          
            console.log('message reduce', action.payload)
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default: return state;
    }
}