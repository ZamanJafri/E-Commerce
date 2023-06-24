import combineReducer from "../reducer/combine.reducer";
import createSagaMiddleware from 'redux-saga'
import { configureStore } from "@reduxjs/toolkit";
import root from "../saga/root.saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: combineReducer(),
    middleware: [sagaMiddleware],
    devTools:true
})

sagaMiddleware.run(root);

export default store