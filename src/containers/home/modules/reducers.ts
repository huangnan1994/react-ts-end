/***@
 *@ time: 2018/5/22
 *@ author: 二 白
 *@ use: home -> reducer
 */

import {handleActions} from 'redux-actions';
import {ADD_TODO} from './types';
import {ITodoModel} from './models'

const initialState: ITodoModel = {
    completed: true,
    id: 1,
    text: 'Use Redux',
};

export const todoReducer = handleActions<ITodoModel>({
    [ADD_TODO]: (state: any, action: any) => {
        console.log('reducer->state:', state);
        console.log('reducer->action:', action);
        return {completed: true, text: action.payload.text, id: 2};
    },
}, initialState);
