import * as states from "./state";
import { orgReducer } from "./reducer";
import { combineReducers } from 'redux';

export {states};
export {orgReducer}

// export const rootReducer = combineReducers<states.orgStateModel.rootReducer>(
//     {
//         orgReducer: orgReducer
//     }
// )