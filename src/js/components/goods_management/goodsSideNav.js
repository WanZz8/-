//商品管理页面
'user strict';
import React from 'react';
import ReactDOM from 'react-dom';
import './goodsCom.css';
import {Link} from 'react-router';


class GoodsNavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current:'',
            index:0
        };
    }
    handleClick(i){
        this.setState({index:i})

    }
    render(){
        let title=[
            {
                'ico':'/CmdManage',
                'name':'产品库',
                'index': 0,
            },
            {
                'ico':'/MyProduct',
                'name':'我的产品',
                'index': 1,
            },
            {
                'ico':'/ProductEntry/3',
                'name':'产品入驻',
                'index': 2,
            },
            {
                'ico':'/PriceChangeBox',
                'name':'产品改价',
                'index': 3,
            }

        ];
     this.state.index = this.props.params.id==3?2: this.state.index;
        return(
            <div>
                <div className="padding_15"></div>
                <div className="page">
                    <div id="main-content">
                        <div className="side-nav-bar">
                            <ul>
                                {
                                    title.map((e,index) => {
                                        return(
                                                <li name={e} key={index} onClick={()=>this.handleClick(e.index)}
                                                    className={this.state.index==e.index ?'left_nav active':'left_nav'}
                                                    icon={e.ico}>
                                                    <Link to={e.ico}>{e.name}</Link>
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
export default GoodsNavBar;