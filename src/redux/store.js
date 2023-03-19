import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {coursesReducer} from "./slices/coursesSlice";

const rootReducer = combineReducers({
    course: coursesReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};