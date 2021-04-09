import React, { useReducer } from "react";
import * as RootState from "./state";
import { handleActions } from "redux-actions";
import { OrgActions } from "../actions";
import { states } from ".";

const initialState: RootState.orgState = {
    teamManagers: [
        {
            name: 'srk',
            id: 1,
            loginPassword: 'srk',
            teamId: 100,
        }
    ],
    employees: [
        {
            name: 'imran',
            id: 10,
            loginPassword: 'imran',
            teamsId: []
        }
    ],
    messages: [

    ]
}

export const orgReducer = (state: RootState.orgStateModel.OrgStateModel = initialState, action: OrgActions.actionObj): RootState.orgStateModel.OrgStateModel => {
    console.log('Reducer', action.payload)
    switch (action.type) {
        case OrgActions.Type.ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        case OrgActions.Type.ADD_MANAGER:
            
            return {
                ...state,
                teamManagers: [...state.teamManagers, action.payload]
            }
        // case OrgActions.Type.ADD_MESSAGE:                    //old
        //     return {
        //         ...state,
        //         messages: [...state.messages, action.payload]
        //     }
        // case OrgActions.Type.ADD_TEAM:                              //old
        //     let copyEmployees: states.employeeObj[] = [...state.employees]
        //     copyEmployees.map((el: states.employeeObj) => (
        //         action.payload.employeesId.includes(el.id)?(el.teamsId?.push(action.payload.teamId)): el
        //     ))
        //     console.log('action', action.payload)
        //     console.log('copy',copyEmployees)
        //     return {
        //         ...state,
        //         employees: copyEmployees
        //     }
        case OrgActions.Type.ADD_MESSAGE:                          //changes
                console.log('message reduce', action.payload)
                return {
                    ...state,
                    messages: [...state.messages, action.payload]
                }
        default: return state;
    }
}



// export const orgReducer = handleActions<RootState.orgState, RootState.orgStateModel.OrgStateModel>(
//     {
//       [OrgActions.Type.ADD_EMPLOYEE]: (state, action) => {
//         if (action.payload && action.payload.employees) {
//           return {
//               ...state,
//               employees: state.employees.push(action.payload)
//           }
//         }
//         return state;
//       },
//       [TodoActions.Type.DELETE_TODO]: (state, action) => {
//         return state.filter((todo) => todo.id !== (action.payload as any));
//       },
//       [TodoActions.Type.EDIT_TODO]: (state, action) => {
//         return state.map((todo) => {
//           if (!todo || !action || !action.payload) {
//             return todo;
//           }
//           return (todo.id || 0) === action.payload.id ? { ...todo, text: action.payload.text } : todo;
//         });
//       },
//       [TodoActions.Type.COMPLETE_TODO]: (state, action) => {
//         return state.map((todo) =>
//           todo.id === (action.payload as any) ? { ...todo, completed: !todo.completed } : todo
//         );
//       },
//       [TodoActions.Type.COMPLETE_ALL]: (state, action) => {
//         return state.map((todo) => ({ ...todo, completed: true }));
//       },
//       [TodoActions.Type.CLEAR_COMPLETED]: (state, action) => {
//         return state.filter((todo) => todo.completed === false);
//       }
//     },
//     initialState
//   );
