/***@
 *@ time: 2018/5/22
 *@ author: 二 白
 *@ use: store -> index
 */
import {Store, createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';
import {IRootState} from './initState';
import {History} from 'history';

export function configureStore(history: History, initialState?: IRootState): Store<IRootState> {

    const middleware = applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history));

    return createStore(
        rootReducer as any,
        initialState as any,
        middleware
    ) as Store<IRootState>;
}