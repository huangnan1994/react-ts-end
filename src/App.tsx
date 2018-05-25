import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from './containers/home/modules/anctions';
import LeftLand from './components/Sider';
import './index.styl';

interface IAppProps {
    addTodo?: any;
}

class App extends React.Component<IAppProps> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className='App'>
                <LeftLand/>
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
