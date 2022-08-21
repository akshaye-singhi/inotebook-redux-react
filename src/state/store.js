import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// Todo: upgrade to "configureStore()"
export const store = createStore(reducers, {}, applyMiddleware(thunk))