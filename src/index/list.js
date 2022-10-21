import React, {Component} from 'react';
import {SideBar, AutoCenter, SearchBar, Grid, Space, Image} from "antd-mobile";
import {AntOutline, ArrowDownCircleOutline} from 'antd-mobile-icons'
import {tabs} from './tabs';
import styles from './list.module.css';
import classNames from 'classnames'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: 'key1',
            img: [
                'http://cdn.cnbj2.fds.api.mi-img.com/product/thumbnail/34371.png',
                'http://cdn.cnbj2.fds.api.mi-img.com/product/thumbnail/28831.png',
                'http://cdn.cnbj2.fds.api.mi-img.com/product/thumbnail/62185.jpg'
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({activeKey: event});
    }

    render() {
        return (
            // 类名CSS Modules写法
            <div className={styles.body}>
                <div className={styles.title}>
                    <AutoCenter className={styles.search}>
                        <SearchBar style={{'--border-radius': '20px', '--height': '38px'}} placeholder='请输入内容'/>
                    </AutoCenter>
                </div>
                <div className={styles.container}>
                    <div className={styles.side}>
                        <SideBar activeKey={this.state.activeKey} onChange={this.handleClick}>
                            {tabs.map(item => (
                                <SideBar.Item key={item.key} title={item.title}/>
                            ))}
                        </SideBar>
                    </div>
                    <div className={styles.main}>

                        <div className={classNames(
                            styles.content,
                            this.state.activeKey === 'key1' && styles.active
                        )}>
                            <Grid columns={3} gap={8}>
                                <Grid.Item>
                                    <div className={styles['grid-demo-item-block']}>
                                        <Space wrap>
                                            <Image
                                                src={this.state.img[1]}
                                                width={64}
                                                height={64}
                                                fit='cover'
                                                style={{borderRadius: 32}}
                                            />
                                        </Space>
                                        <div>
                                            祈年殿
                                        </div>
                                    </div>
                                </Grid.Item>
                                <Grid.Item>
                                    <div className={styles['grid-demo-item-block']}>
                                        <Space wrap>
                                            <Image
                                                src={this.state.img[0]}
                                                width={64}
                                                height={64}
                                                fit='cover'
                                                style={{borderRadius: 32}}
                                            />
                                        </Space>
                                        <div>
                                            千年榫营造积木·天坛纪念版
                                        </div>
                                    </div>
                                </Grid.Item>
                                <Grid.Item>
                                    <div className={styles['grid-demo-item-block']}>
                                        <Space wrap>
                                            <Image
                                                src={this.state.img[2]}
                                                width={64}
                                                height={64}
                                                fit='cover'
                                                style={{borderRadius: 32}}
                                            />
                                        </Space>
                                        <div>
                                            祝融号积木火星车
                                        </div>
                                    </div>
                                </Grid.Item>
                            </Grid>
                        </div>

                        <div className={classNames(
                            styles.content,
                            this.state.activeKey === 'key2' && styles.active
                        )}>
                            页面 2
                        </div>
                        <div className={classNames(
                            styles.content,
                            this.state.activeKey === 'key3' && styles.active
                        )}>
                            页面 3
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
