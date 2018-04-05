import React from 'react';
import './common.css';
import { Row, Col } from 'antd';
import {Link} from 'react-router';
import SetItem from './../personal_center/verifyCode'
import top_logo from '../../../images/top_logo.jpg';

const personone = <Row>
    <Col span={6}><img src={require('../../../images/userLogin.png')} alt="" className="userlogin"/></Col>
    <Col span={9}>
        {sessionStorage.getItem('name')}
    </Col>
    <Col span={9}>
      退出
    </Col>
</Row>
const persontwo = <Row>
    <Col span={6}><img src={require('../../../images/userLogin.png')} alt="" className="userlogin"/></Col>
    <Col span={9}>
        <Link to='/login'>登录</Link>
    </Col>
    <Col span={9}>
        <Link to="/register">
            注册
        </Link>
    </Col>
</Row>
var TOKEN=sessionStorage.getItem("token");
console.log(TOKEN)
class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            token:""
        }
    }
    componentDidMount(){
        this.setState({token:TOKEN})

    }
    render(){
            let style={
                position:'absolute',
                right:'85px',
                top:'40px',
                width:'240px',
                height:'50px',
                textAlign:'center',
                fontSize:'16px',
                lineHeight:'50px'
            }
        return (
            <div>
                <div className="dh_top">
                    <div id="top_content">
                        <img src={top_logo}  alt="犇店宝商家中心" height="114"/>
                    </div>
                    <div style={style}>
                        {this.state.token==null?persontwo:personone}
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;