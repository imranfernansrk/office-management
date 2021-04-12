import { createStore } from "redux";
import { middleware } from "../middleware";
import { managementReducer } from '../reducer'

export const store = createStore(managementReducer, middleware)