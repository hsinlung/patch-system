import React, {Component} from 'react';
import { SideBar } from "antd-mobile";
import {tabs} from './tabs';
import styles from './List.css';
import classNames from 'classnames'
console.info(styles);
class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeKey: 'key1',
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        this.setState({activeKey:event});
    }
    render() {
        return(
            // 类名CSS Modules写法
            <div className={styles.container}>
                <div className="side">
                    <SideBar activeKey={this.state.activeKey} onChange={this.handleClick}>
                        {tabs.map(item => (
                            <SideBar.Item key={item.key} title={item.title} />
                        ))}
                    </SideBar>
                </div>
                <div className="main">
                    <div className={classNames(
                        'content',
                        this.state.activeKey === 'key1' && 'active'
                    )} >
                        页面 1
                    </div>
                    <div className={classNames(
                        'content',
                        this.state.activeKey === 'key2' && 'active'
                    )} >
                        页面 2
                    </div>
                    <div className={classNames(
                        'content',
                        this.state.activeKey === 'key3' && 'active'
                    )} >
                        页面 3
                    </div>
                </div>
            </div>
        );
    }
}
export default List;
