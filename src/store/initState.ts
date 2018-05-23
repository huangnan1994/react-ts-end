/***@
 *@ time: 2018/5/22
 *@ author: 二 白
 *@ use: store -> initState
 */

import {ITodoModel} from '../page/home/modules/models';

export interface IRootState {
    todo: ITodoModel;
}

export type TodoState = ITodoModel[];