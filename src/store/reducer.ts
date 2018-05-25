/***@
 *@ time: 2018/5/22
 *@ author: 二 白
 *@ use: store -> reducer
 */

import {combineReducers} from 'redux';
import {todoReducer} from '../containers/home/modules/reducers';

const rootReducer = combineReducers({
    todo: todoReducer as any
});

export default rootReducer;