//规则流程侧边栏
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import './entry_rules.css'

class ProduRulesSlider extends React.Component{
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
                'icon':'/EntryRules',
                'name':'入驻流程',
                'index': 0,
            },
            {
                'icon':'/PriceRules',
                'name':'价格规范',
                'index': 1,
            },
            {
                'icon':'/OrderReview',
                'name':'订单审核',
                'index': 2,
            },
        ]
        return(
            <div>
                <div className="padding_15"></div>
                <div className="page">
                    <div id="main-content">
                        <div className="l_content s-nav-bar">
                            <div className="title"><span>商品规范</span></div>
                            <ul>
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

export default ProduRulesSlider;