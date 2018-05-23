import {Button} from 'antd';
import * as React from 'react';
import './App.css';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from './page/home/modules/anctions';

interface IAppProps {
    addTodo?: any;
}

class App extends React.Component<IAppProps> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        console.log(this.props);
        return (
            <div className="App">
                <Button onClick={() => {
                    console.log(this.props.addTodo());
                    this.props.addTodo({text: '12'})
                }} type="primary">Button</Button>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    todos: state
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        addTodo: () => dispatch(addTodo('12')),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
