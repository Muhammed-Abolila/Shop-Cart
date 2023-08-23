import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { AllReducers } from "../Reducer/AllReducers";
export let store=createStore(AllReducers,composeWithDevTools(applyMiddleware(thunk)))