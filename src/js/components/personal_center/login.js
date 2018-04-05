//登录页面
import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import {Link} from 'react-router';
import { Modal, Button } from 'antd';
import VerificationCode from './verifyCode';


class HintBox extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}></Button>
                <Modal
                    title="登录失败！请重新登录！"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                </Modal>
            </div>
        );
    }
}
class LoginBox extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <div className="padding_15">
                    <div id="content">
                        <div className="form-content">
                            <header className="title">
                                <h1>用户登录</h1>
                            </header>
                            <form className="form">
                                <div className="qrcode">
                                    <img src={require('../../../images/u162.jpg')} alt="二维码"/>
                                </div>
                                <div className="verify">
                                    <div><label>验证码:</label></div>
                                    <div className="res_right">
                                        <VerificationCode/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="img-identify">
                            <p className="img-top">
                                <span>没有账号？</span>
                                <Link to="/register">立即注册</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginBox