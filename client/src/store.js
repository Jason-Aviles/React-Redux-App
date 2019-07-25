import { createStore } from "redux";
import {rooterReducer} from './components/reducer'


export const store = createStore(rooterReducer);
