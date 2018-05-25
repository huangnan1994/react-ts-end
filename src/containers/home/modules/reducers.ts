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
    [ADD_TODO]: () => {
        return {completed: true, text: '112', id: 2};
    },
}, initialState);
