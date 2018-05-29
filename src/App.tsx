import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from './containers/home/modules/anctions';
// import LeftLand from './components/Sider';
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

    public change = () => {
        const myName = '我叫二白';
        this.props.addTodo(myName)
    };

    public render() {
        console.log(this.props);
        return (
            <div className='App'>
                {/*<LeftLand/>*/}

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
