import React from 'react';
import ReactDOM from 'react-dom';
import {Link,hashHistory } from 'react-router';
import http from 'axios';
import { Modal, Button } from 'antd';
import './login.css';
import Background from '../../../images/icon1x.png';
var fade={
    display:'none'
}
var fadeIn={
    display:'inline-block'
}
var pig={
    background:`url(${Background}) no-repeat 0px -90px`
}
var good={
    background:`url(${Background}) no-repeat 0px -191px`
}

String.prototype.trim=function() {
    return this.replace(/(^\s*)|(\s*$)/g,'');
};
class VerificationCode extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            identifycode0:'',
            identifycode1:'',
            identifycode2:'',
            identifycodeerror:'',
            display:fade,
            right:pig,
        }
    }
    handleIdentifyCode0Change(e) {
        if(e.target.value.trim().length <= 4) {
            this.setState({identifycode0: e.target.value.trim()})
        }
        if (e.target.value.length === 4) {
            this.refs.identifycode1.focus();
            this.setState({
                identifycodeerror:'',
                right:good,
                display:fadeIn
            })
        }else{
            this.setState({
                identifycodeerror:'格式错误！',
                display:fadeIn,
                right:pig
            })
        }
    }
    handleIdentifyCode1Change(e) {
        if(e.target.value.trim().length <= 3) {
            this.setState({identifycode1: e.target.value.trim()})
        }
        if (e.target.value.length === 3) {
            this.setState({
                identifycodeerror:'',
                right:good,
                display:fadeIn
            })
            this.refs.identifycode2.focus();
        }else{
            this.setState({
                identifycodeerror:'格式错误！',
                display:fadeIn,
                right:pig
            })
        }
    }
    handleIdentifyCode2Change(e) {
        if(e.target.value.length <= 4) {
            this.setState({identifycode2: e.target.value.trim()})
        }
    }
    handleSubmit(e){
        e.preventDefault();
        e.icon=''
        var identifycode = "" + this.state.identifycode0+ "-" + this.state.identifycode1 +
            "-" + this.state.identifycode2;
        var that=this;
        http({
            method:"POST",
            url:"/busi/login",
            data:{identifycode:identifycode},
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then(function(res){
            console.log(res);
            if(res.data.errorCode=='ok'){
                console.log(res);
                sessionStorage.setItem("token",res.data.data.token);
                sessionStorage.setItem("userId",res.data.data.id);
                sessionStorage.setItem("name",res.data.data.name);
                hashHistory.push('/Merchant/2');

            }else that.refs.tip.showModal();

        })
        .catch(function(error){
        })
        this.forceUpdate();
    }
    render(){
        let shows =this.state.display;
        let right=this.state.right;
        return(
            <div>
                <input
                    className="identify-code txt-input"
                    id="identify-code-1"
                    value={this.state.identifycode0}
                    onChange={this.handleIdentifyCode0Change.bind(this)}
                />
                <span> - </span>
                <input
                    ref="identifycode1"
                    type="text"
                    className="identify-code txt-input"
                    value={this.state.identifycode1}
                    onChange={this.handleIdentifyCode1Change.bind(this)}
                />
                <span> - </span>
                <input
                    ref="identifycode2"
                    type="text"
                    className="identify-code txt-input"
                    value={this.state.identifycode2}
                    onChange={this.handleIdentifyCode2Change.bind(this)}
                />
                <span className="errorsOne" style={shows}><b style={right}></b>{this.state.identifycodeerror}</span>
                <div>
                    <p className="identify-tip">
                        如何获取验证码？请扫描上方公告号
                    </p>
                </div>
                <div className="btnds">
                    <Link className="btn btn-success" id="btn-login" onClick={(e)=>this.handleSubmit(e)}>登&nbsp;&nbsp;&nbsp;&nbsp;录</Link>
                    <ErrorModel ref="tip"/>
                </div>
            </div>
        )
    }
}
//antd 模态

class ErrorModel extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <div>
                <Modal
                    title="错误的验证码"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>
                        <img src={require('../../../images/404.png')} alt="验证码错误"/>
                    </p>
                </Modal>
            </div>
        );
    }
}
export var SetItem = sessionStorage.setItem;
// 修改localStorage的setItem方法
 sessionStorage.setItem = function(key,value) {
    var setItemEvent = new Event("setItemEvent");
    setItemEvent.value = value;
    setItemEvent.key = key;
    // 手动触发setItemEvent
    window.dispatchEvent(setItemEvent);
    // 执行原方法
    SetItem.apply(this,arguments);
}
window.addEventListener("setItemEvent", function(e) {
    // 检测是否为需要监听的key值
    if (e.key == "xxx") {
        console.log(e.value);
    }
});

export default VerificationCode;