/***@
 *@ time: 2018/5/24
 *@ author: 二 白
 *@ use: 左侧栏组件
 */

import * as React from 'react';
import {Layout, Menu, Icon} from 'antd';

class LeftLand extends React.Component {
    public render() {
        return (
            <Layout.Sider>
                <Menu mode="inline" defaultSelectedKeys={['1']}>

                    <Menu.Item key="1">
                        <Icon type="user"/>
                        <span>nav 1</span>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Icon type="video-camera"/>
                        <span>nav 2</span>
                    </Menu.Item>

                </Menu>
            </Layout.Sider>
        );
    }
}

export default LeftLand;