import React from 'react';
import {Link} from 'react-router';
import './common.css';
let menuLis = [
    {
        'icon':'/IndexPage',
        'name':'商家首页',
        'index': 0,
    },
    {
        'icon':'/Merchant/2',
        'name':'商家入驻',
        'index': 1,
    },
    {
        'icon':'/GoodsNavBar',
        'name':'商品管理',
        'index': 2,
    },
    {
        'icon':'/ProduRulesSlider',
        'name':'规则流程',
        'index': 3,
    },
    {
        'icon':'/PigSider',
        'name':'商品规范',
        'index': 4,
    },
    {
        'icon': '/PersonNavBar',
        'name': '账户中心',
        'index': 5,
    }

]

class MenuUl extends React.Component{
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
        return(
            <div className="nav_bg">
                <div className="nav_con">
                    <ul>
                        {
                            menuLis.map((e,index) => {
                                return(
                                    <li name={e.name} key={index}onClick={()=>this.handleClick(e.index)} className={this.state.index==e.index ?'nav-list active':'nav-list'} icon={e.icon}>
                                        <Link to={e.icon}>{e.name}</Link>
                                        </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}
class Common extends React.Component{
    render(){
        return(
            <nav>
                <div>
                    <MenuUl/>
                </div>
            </nav>
        )
    }
}
export default Common;