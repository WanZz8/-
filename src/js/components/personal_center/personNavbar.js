//账户中心导航
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import './account.css';

class PersonNavBar extends React.Component{
    constructor(props){
        super(props)
        this.state=({
            current:'',
            index:0
        })
    }
    handleClick(i){
        this.setState({index:i})
    }
    render(){
        let title=[
            {
                'icon':'/PersonalCenter',
                'name':'个人中心',
                'index': 0,
            },
            {
                'icon':'/Myshops',
                'name':'我的店铺',
                'index': 1,
            }
        ]
        return(
            <div>
                <div className="padding_15"></div>
                <div className="page">
                    <div id="main-content">
                        <div className="account_dh">
                            <h3>账户中心</h3>
                            <ul>
                                {
                                    title.map((e,index) => {
                                        return(
                                            <li name={e} key={index} onClick={()=>this.handleClick(e.index)}
                                                className={this.state.index==e.index ?'active':' '}
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

export default PersonNavBar;