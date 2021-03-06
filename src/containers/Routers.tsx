/***@
 *@ time: 2018/5/22
 *@ author: 二 白
 *@ use: 路由文件
 */
import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Home from '../App';
import Login from '../containers/login/pages/Login';

class Routers extends React.Component {
    public render() {
        return (
            <Router>
                <Route render={({location}) => {
                    return (
                        <Switch key={location.pathname}>
                            <Route location={location} exact={true} path="/" component={Login}/>
                            <Route location={location} path="/home" component={Home}/>
                            {/*<Route component={NoMatch}/>*/}
                        </Switch>
                    )
                }}/>
            </Router>
        );
    }
}

export default Routers;