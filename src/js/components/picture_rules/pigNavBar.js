'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';


//http://react-china.org/t/react-js/3960/4 点击高亮
//http://blog.csdn.net/liuxuan12417/article/details/54096172 点击改变class
import './sliderBar.css';
class PigSider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current:'',
            index:0
        };
    }
    handleClick(i){
        this.setState({
            index:i
        });
    }
    componentWillMount(){
        let route = this.props.location.pathname;
    }
    render(){
        let title=[
            {
                'icon':'/imgRules',
                'name':'图片规范',
                'index': 0,
            },
            {
                'icon':'/imgUpLoad',
                'name':'图片上传',
                'index': 1,
            },
        ]
        return(
            <div>
                <div className="padding_15"></div>
                    <div className="page">
                        <div id="main-content">
                            <div className="l_content s-nav-bar">
                                <div className="title"><span>商品规范</span></div>                                  <ul>
                                {
                                    title.map((e,index) => {
                                        return(
                                            <li name={e} key={index} onClick={()=>this.handleClick(e.index)}
                                                className={this.state.index==e.index ?'left_nav active':'left_nav'}
                                                icon={e.icon}>
                                                <Link to={e.icon}>{e.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            </div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
        )
    }
}
export default PigSider;
