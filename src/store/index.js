import { createStore, combineReducers, applyMiddleware } from "redux";
import { photoReducer } from "./reducers/photoReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  photo: photoReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
