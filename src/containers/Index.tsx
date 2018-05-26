/***@
 *@ time: 2018/5/26
 *@ author: 二 白
 *@ use: index 首页
 */

import * as React from 'react';
import Routers from './Routers';

class Index extends React.Component {
    public render() {
        return (
            <div>
                <div>头</div>
                <div>左边栏</div>
                <Routers/>
                <div>底部</div>
            </div>

        )
    }
}

export default Index;