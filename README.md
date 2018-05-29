# 快速上手React+TypeScript+Redux技术栈

2018年的六一儿童节已到，特此一篇来献给小盆友们。此处应该有掌声....

![明猪不装暗逼.png](https://upload-images.jianshu.io/upload_images/5243706-05642b29878fdd9b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

写在前面: 
首先，什么是TypeScript？

官方原话:TypeScript is a typed superset of JavaScript that complies to plain JavaScript. Any host. Any OS. Open source.--TypeScript是JavaScript类型的超集(强类型版本)，它可以编译成纯的JavaScript，它可以再任何浏览器，任何计算机和任何操作系统上运行，并且开源。

嗯，是的，你可以理解为TypeScript硬是把JavaScript(弱类型语言)"掰弯"了，变成强类型语言；强类语言的优势在于静态类型的检查，TypeScript虽然是强类型的语言，但是如果对象被声明为any类型，就会忽略所有的类型检查。这种灵活的结构保证了它整体有强类语言检查优势的同时，在一些细节问题上保持了弱类型的灵活。

**1.为了能够快速搭建应用，我们将使用create-react-app官方脚手架为基础进行扩展。**

   创建一个项目(TypeScript版本)
    
     npx create-react-app 应用名称 --scripts-version=react-scripts-ts
       
**2.安装所需依赖包**  
      
     yarn add history @types/history react-router-dom @types/react-router-dom react-router-redux @types/react-router-redux redux-actions @types/redux-actions redux-thunk @types/redux-thunk redux --D
  *注意: redux 已经包含TypeScript包
  
**3.开始编码**

`(1) 新建一个models.ts`

     // 规定store中初始状态的数据类型
     export interface ITodoModel {
         id?: number;
         text: string;
         completed: boolean;
     }
 
`(2) 新建一个types.ts`

     // action 的标识符  
     export const ADD_TODO = 'ADD_TODO';
`(3) 新建一个anctions.ts`
    
      /**
      *** store中状态是只读的,要改变它里面的状态只能分发action去改变其属性  
      **/
      
      // createAction 让你可以轻松创建一个action
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
`(4) 新建一个reducers.ts` 
       
      import {handleActions} from 'redux-actions';
      import {ADD_TODO} from './types';
      import {ITodoModel} from './models'
      
      // 初始的状态,就像react中组件内的初始状态，只不过这个是全局的。
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
      
`(5) 开始组建store`
 
_1. store->initState.ts_  
 
    import {ITodoModel} from '../containers/home/modules/models';
   
    export interface IRootState {
       todo: ITodoModel;
    }
    
_2. store->reducer.ts_
    
    import {combineReducers} from 'redux';
    import {todoReducer} from '../containers/home/modules/reducers';
    
    // 把前面的reducers combine 起来
    const rootReducer = combineReducers({
        todo: todoReducer as any
    });
    
    export default rootReducer; 
    
_3. store->reducer.ts_
    
    import {Store, createStore, applyMiddleware} from 'redux';
    import {routerMiddleware} from 'react-router-redux';
    import thunkMiddleware from 'redux-thunk';
    import rootReducer from './reducer';
    import {IRootState} from './initState';
    import {History} from 'history';
    
    export function configureStore(history: History, initialState?: IRootState): Store<IRootState> {
        
        // store 中间件，根据个人需求添加
        const middleware = applyMiddleware(
            thunkMiddleware,
            routerMiddleware(history));
    
        return createStore(
            rootReducer as any,
            initialState as any,
            middleware
        ) as Store<IRootState>;
    }
    
`(6) 修改入口文件index.tsx`
    
    import * as React from 'react';
    import * as ReactDOM from 'react-dom';
    import {Provider} from 'react-redux';
    import registerServiceWorker from './registerServiceWorker';
    import Routers from './containers/Routers';
    import createHistory from 'history/createBrowserHistory'
    import {configureStore} from './store';
    
    const history = createHistory();
    const store = configureStore(history);
    
    ReactDOM.render(
        <Provider store={store}>
            <Routers/>
        </Provider>
        ,
        document.getElementById('root') as HTMLElement
    );
    registerServiceWorker();

`(7) 如何使用？`
 
    import * as React from 'react';
    import {Dispatch} from 'redux';
    import {connect} from 'react-redux';
    import {addTodo} from './containers/home/modules/anctions';
    import {Button} from 'antd';
    import './App.less';
    
    interface IAppProps {
        addTodo?: any;
        todos?: any;
    }
    
    class App extends React.Component<IAppProps> {
    
        constructor(props: any) {
            super(props);
        }
    
        // 组件内分发action,改变store中的属性值
        public change = () => {
            const myName = '我叫二白';
            this.props.addTodo(myName)
        };
    
        // 把store绑定在视图层上
        public render() {
            console.log(this.props);
            return (
                <div className='App'>
                    <div>{this.props.todos.todo.text}</div>
    
                    <Button onClick={() => this.change()}>redux点击一下</Button>
                </div>
            );
        }
    }
    
    const mapStateToProps = (state: any) => ({
        todos: state
    });
    
  
    const mapDispatchToProps = (dispatch: Dispatch<any>) => {
        return {
            addTodo: (payload: string) => dispatch(addTodo(payload)),
        }
    };
    
    // mapStateToProps(state, ownProps) 方法允许我们将store中的数据作为props绑定到组件中，只要store更新了就会调用mapStateToProps方法，mapStateToProps返回的结果必须是object对象，该对象中的值将会更新到组件中;
    // mapDispatchToProps(dispatch, [ownProps]) 第二个参数允许我们将action作为props绑定到组件中，mapDispatchToProps希望你返回包含对应action的object对象; 
    export default connect(mapStateToProps, mapDispatchToProps)(App);
