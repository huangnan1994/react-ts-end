/***@
 *@ time: 2018/5/21
 *@ author: 二 白
 *@ use: home -> actions
 @*/

import {createAction} from 'redux-actions';

import {ITodoModel} from './models';

import {ADD_TODO} from './types';

const addTodo = createAction<ITodoModel, string>(
    ADD_TODO,
    (text: string) => ({text, completed: false})
);

export {
    addTodo
}