import { createStore } from "redux";
import { middleware } from "../middleware";
import {  } from "../reducer";
// import { rootReducer } from "../Reducer";
import {orgReducer} from '../reducer'

export const store = createStore(orgReducer, middleware)