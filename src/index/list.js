import React, {Component} from 'react';
import { SideBar,AutoCenter,SearchBar } from "antd-mobile";
import {tabs} from './tabs';
import styles from './list.module.css';
import classNames from 'classnames'
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
            <div>
                <div className={styles.title}>
                    <AutoCenter className={styles.search}>
                        <SearchBar style={{ '--border-radius': '20px','--height':'38px' }} placeholder='请输入内容' />
                    </AutoCenter>
                </div>
                <div className={styles.container}>
                    <div className={styles.side}>
                        <SideBar activeKey={this.state.activeKey} onChange={this.handleClick}>
                            {tabs.map(item => (
                                <SideBar.Item key={item.key} title={item.title} />
                            ))}
                        </SideBar>
                    </div>
                    <div className={styles.main}>
                        <div className={classNames(
                            styles.content,
                            this.state.activeKey === 'key1' && styles.active
                        )} >
                            页面 1
                        </div>
                        <div className={classNames(
                            styles.content,
                            this.state.activeKey === 'key2' && styles.active
                        )} >
                            页面 2
                        </div>
                        <div className={classNames(
                            styles.content,
                            this.state.activeKey === 'key3' && styles.active
                        )} >
                            页面 3
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default List;
