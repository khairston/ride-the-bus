import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
// import sessionStorage from "redux-persist/types/storage/session";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
});

export default persistReducer(persistConfig, rootReducer);
