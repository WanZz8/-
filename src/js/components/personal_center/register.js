//用户注册页面
import React from 'react';
import ReactDOM from 'react-dom';
import './register.css';
import VerificationCode from './verifyCode'
import {Radio} from 'antd';
const RadioGroup = Radio.Group;
import Background from '../../../images/icon1x.png'
//原生js定义trim()方法
String.prototype.trim=function() {
    return this.replace(/(^\s*)|(\s*$)/g,'');
};

var defaultClass= {
    border: '1px solid #ccc',
    color: '#888',
    borderRadius: '3px',
    padding: '2px 5px',
    outline: 'none',
    width:'200px',
    boxShadow: '0 0 5px #888',
    transition: 'all .15s linear',
    boxShadow:'inset 0 1px 1px rgba(0, 0, 0, .075)',
}
var active={
    color: '#888',
    borderRadius: '3px',
    padding: '2px 5px',
    outline: 'none',
    width:'200px',
    boxShadow: '0 0 5px #888',
    transition: 'all .15s linear',
    boxShadow:'inset 0 1px 1px rgba(0, 0, 0, .075)',
    border: '1px solid #88f',
    boxShadow: '0 0 5px #88f'
}
var dangerClass={
    borderRadius: '3px',
    padding: '2px 5px',
    outline: 'none',
    width:'200px',
    transition: 'all .15s linear',
    border: '1px solid #e4393c',
    boxShadow: '0 0 1px #e4393c'
}
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
class RegisterBox extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="padding_15">
                    <div id="contents">
                        <div className="form-contents">
                            <header className="title">
                                <h1>用户注册</h1>
                            </header>
                        <form>
                            <div className="padding_t_8s">
                                <div className="res_lefts"><label htmlFor="invite-link">邀请链接:</label></div>
                                <div className="res_right">
                                    <input type="text" className="txt-input"/>
                                    <span className="res_right txt2">请输入好友发送给你的邀请链接，没有可以选择不填</span>
                                </div>
                            </div>
                            <div className="padding_t_8s">
                                <div className="res_lefts"><label htmlFor="name">姓名:</label></div>
                                <div className="res_right">
                                    <NameBox/>
                                </div>
                            </div>
                            <div className="padding_t_8s">
                                <div className="res_lefts"><label htmlFor="sex">性别:</label></div>
                                <div className="res_right">
                                    <RadioBox/>
                                </div>
                            </div>
                            <div className="padding_t_8s">
                                <div className="res_lefts"><label htmlFor="telPhone">电话:</label></div>
                                <div className="res_right">
                                    <TelPhoneBox/>
                                </div>
                            </div>
                            <div className="padding_t_8s">
                                <div className="res_lefts"><label htmlFor="handleQQ">QQ:</label></div>
                                <div className="res_right">
                                    <UserQQBox/>
                                </div>
                            </div>
                            <div className="padding_t_8s">
                                <div className="res_lefts"><label htmlFor="weiChat">微信:</label></div>
                                <div className="res_right">
                                    <UserWeiChatBox/>
                                </div>
                            </div>
                            <div className="padding_t_8s">
                                <div className="res_lefts"><label htmlFor="address">联系地址:</label></div>
                                <div className="res_right">
                                    <UserAddress/>
                                </div>
                            </div>
                            <div className="padding_t_8s">
                                <div className="res_lefts"><label htmlFor="ME">我是:</label></div>
                                <div className="res_right">
                                    <RadioBoxMe/>
                                </div>
                            </div>
                            <div className="padding_t_8s">
                                <div className="res_lefts"><label htmlFor="VerificationCode">验证码:</label></div>
                                <div className="res_right">
                                    <VerificationCode/>
                                </div>
                            </div>
                        </form>
                    </div>
                        <div className="img-identify1">
                            <p className="img-tip">
                                <span>已有账号？</span>
                                <a href="">立即登录</a>
                            </p>
                            <p className="img-tip1">
                                <span>扫描公共号二维码，点击菜单"验证码"</span>
                                <br/>
                                <span>即可获得注册/登录验证码</span>
                                <br/>
                                <img src={require('../../../images/u162.jpg')} alt=""/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class NameBox extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            liked:defaultClass,
            userNameError: '',
            display:fade,
            right:pig
        }
    }
    handleFocus(e){
        this.setState({liked:active
        });
    }
    hanleBlur(e){
        this.name=e.target.value;
        if(this.name==""){
            this.setState({
                userNameError:" 不能为空！",
                liked:dangerClass,
                display:fadeIn,
                right:pig

            })
        }else{
            this.setState({
                userNameError:"",
                liked:defaultClass,
                right:good,
                display:fadeIn
            })
        }
    }
    render(){
        let style = this.state.liked;
        let shows =this.state.display;
        let right=this.state.right;
        return(
            <div>
                <input type="text" style={style} className="txt1" onFocus={(e)=>this.handleFocus(e)}
                       onBlur={(e)=>this.hanleBlur(e)}/>
                <span className="errors" style={shows}><b style={right}></b>{this.state.userNameError}</span>
            </div>
        )
    }
}
class RadioBox extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        value: 1,
        }
    }
    onChange (e){
        this.setState({
            value: e.target.value,
        });
    }
    render() {
        return (
            <RadioGroup onChange={(e)=>this.onChange(e)} value={this.state.value}>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
            </RadioGroup>
        );
    }
}
class TelPhoneBox extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            liked:defaultClass,
            telPhoneError: '',
            display:fade,
            right:pig
        }
    }
    handleFocus(e){
        this.setState({liked:active
        });
    }
    hanleBlur(e){
        let reg=/(\+86|0086)?\s*1[34578]\d{9}/;
        this.tel=e.target.value;
        if(reg.test(this.tel)==false){
            this.setState({
                telPhoneError:" 请输入正确的手机号！",
                liked:dangerClass,
                display:fadeIn,
                right:pig

            })
        }else{
            this.setState({
                telPhoneError:"",
                liked:defaultClass,
                right:good,
                display:fadeIn
            })
        }
    }
    render(){
        let style = this.state.liked;
        let shows =this.state.display;
        let right=this.state.right;
        return (
            <div>
                <input type="text" style={style} className="txt1" onFocus={(e)=>this.handleFocus(e)}
                       onBlur={(e)=>this.hanleBlur(e)}/>
                <span className="errors" style={shows}><b style={right}></b>{this.state.telPhoneError}</span>
            </div>
        )
    }
}
class UserQQBox extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            liked:defaultClass,
            userQQError: '',
            display:fade,
            right:pig
        }
    }
    handleFocus(e){
        this.setState({liked:active
        });
    }
    hanleBlur(e){
        let reg=/^\d{5,10}$/;;
        this.QQ=e.target.value;
        if(reg.test(this.QQ)==false){
            this.setState({
                userQQError:" 请输入正确的QQ号！",
                liked:dangerClass,
                display:fadeIn,
                right:pig

            })
        }else{
            this.setState({
                userQQError:"",
                liked:defaultClass,
                right:good,
                display:fadeIn
            })
        }
    }
    render(){
        let style = this.state.liked;
        let shows =this.state.display;
        let right=this.state.right;
        return (
            <div>
                <input type="text" style={style} className="txt1" onFocus={(e)=>this.handleFocus(e)}
                       onBlur={(e)=>this.hanleBlur(e)}/>
                <span className="errors" style={shows}><b style={right}></b>{this.state.userQQError}</span>
            </div>
        )
    }
}
class UserWeiChatBox extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            liked:defaultClass,
            userWeiChatError: '',
            display:fade,
            right:pig
        }
    }
    handleFocus(e){
        this.setState({liked:active
        });
    }
    hanleBlur(e){
        let reg=/^[a-zA-Z\d_]{5,}$/;
        this.QQ=e.target.value;
        if(reg.test(this.QQ)==false){
            this.setState({
                userWeiChatError:" 请填写您的微信！",
                liked:dangerClass,
                display:fadeIn,
                right:pig

            })
        }else{
            this.setState({
                userWeiChatError:"",
                liked:defaultClass,
                right:good,
                display:fadeIn
            })
        }
    }
    render(){
        let style = this.state.liked;
        let shows =this.state.display;
        let right=this.state.right;
        return (
            <div>
                <input type="text" style={style} className="txt1" onFocus={(e)=>this.handleFocus(e)}
                       onBlur={(e)=>this.hanleBlur(e)}/>
                <span className="errors" style={shows}><b style={right}></b>{this.state.userWeiChatError}</span>
            </div>
        )
    }
}
class UserAddress extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            liked:defaultClass,
            userAddressError: '',
            display:fade,
            right:pig
        }
    }
    handleFocus(e){
        this.setState({liked:active
        });
    }
    hanleBlur(e){
        this.Address=e.target.value;
        if(this.Address==""){
            this.setState({
                userAddressError:" 请填写您的地址！",
                liked:dangerClass,
                display:fadeIn,
                right:pig

            })
        }else{
            this.setState({
                userAddressError:"",
                liked:defaultClass,
                right:good,
                display:fadeIn
            })
        }
    }
    render(){
        let style = this.state.liked;
        let shows =this.state.display;
        let right=this.state.right;
        return (
            <div>
                <input type="text" style={style} className="txt1" onFocus={(e)=>this.handleFocus(e)}
                       onBlur={(e)=>this.hanleBlur(e)}/>
                <span className="errors" style={shows}><b style={right}></b>{this.state.userAddressError}</span>
            </div>
        )
    }
}
class RadioBoxMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        }
    }
    onChange (e){
        this.setState({
            value: e.target.value,
        });
    }
    render() {
        return (
            <RadioGroup onChange={(e)=>this.onChange(e)} value={this.state.value}>
                <Radio value={1}>厂家 (自己的产品)</Radio>
                <Radio value={2}>经销商 (代销，代销别人的产品)</Radio>
            </RadioGroup>
        );
    }
}
//handleFocus(e){
//    this.setState({liked:！this.state.liked});
//}
//handleBlur(field,e){
//    this.value=e.target.value;
//    this.setState({liked:defaultClass});
//    switch (field){
//        case 'phone':   var reg=/(\+86|0086)?\s*1[34578]\d{9}/;
//            if(reg.test(this.value)==false){
//                this.setState({
//                    telPhoneError:"     *请输入正确的手机号*"
//                })
//            }else{
//                this.setState({
//                    telPhoneError:""
//                })
//            }
//            break;
//        case 'name': var reg=/^\w{6,20}$/;
//            if(reg.test(this.value)==false){
//                this.setState({
//                    userNameError:" *密码为6-20位数字或字母或下划线！*"
//                })
//            }else{
//                this.setState({
//                    userNameError:""
//                })
//            }
//    }
//
//}
//this.state={
//    liked:false,
//    userNameError: '',
//    telPhoneError: '',
//    userQQError: '',
//    userWeiChatError: '',
//    userAddressError: '',
//    identifyCodeError:''
//}
//class Form extends React.Component{
//    constructor () {
//        super();
//        this.state = {
//            form: {
//                name: {
//                    valid: false,
//                    value: '',
//                    error: ''
//                },
//                age: {
//                    valid: false,
//                    value: 0,
//                    error: ''
//                },
//                gender: {
//                    valid: false,
//                    value: '',
//                    error: ''
//                }
//            }
//        };
//    }
//    handleValueChange (field, value, type = 'string') {
//        if (type === 'number') {
//            value = +value;
//        }
//        const {form} = this.state;
//        const newFieldObj = {value, valid: true, error: ''};
//
//        switch (field) {
//            case 'name': {
//                if (value.length >= 5) {
//                    newFieldObj.error = '用户名最多4个字符';
//                    newFieldObj.valid = false;
//                } else if (value.length === 0) {
//                    newFieldObj.error = '请输入用户名';
//                    newFieldObj.valid = false;
//                }
//                break;
//            }
//            case 'age': {
//                if (value > 100 || value <= 0) {
//                    newFieldObj.error = '请输入1~100之间的数字';
//                    newFieldObj.valid = false;
//                }
//                break;
//            }
//            case 'gender': {
//                if (！value) {
//                    newFieldObj.error = '请选择性别';
//                    newFieldObj.valid = false;
//                }
//                break;
//            }
//        }
//
//        this.setState({
//            form: {
//                form,
//                [field]: newFieldObj
//            }
//        });
//    }
//    handleSubmit (e) {
//        e.preventDefault();
//
//        const {form: {name, age, gender}} = this.state;
//        if (！name.valid || ！age.valid || ！gender.valid) {
//            alert('请填写正确的信息后重试');
//            return;
//        }
//
//        fetch('http://localhost:8080/webpack-dev-server/index.html', {
//            method: 'post',
//            body: JSON.stringify({
//                name: name.value,
//                age: age.value,
//                gender: gender.value
//            }),
//            headers: {
//                'Content-Type': 'application/json'
//            }
//        })
//            .then((res) => res.json())
//            .then((res) => {
//                if (res.id) {
//                    alert('添加用户成功');
//                } else {
//                    alert('添加失败');
//                }
//            })
//            .catch((err) => console.error(err));
//    }
//    render () {
//        const {form: {name, age, gender}} = this.state;
//        return (
//            <div>
//                <header>
//                    <h1>添加用户</h1>
//                </header>
//
//                <main>
//                    <form onSubmit={(e) => this.handleSubmit(e)}>
//                        <label>用户名：</label>
//                        <input
//                            type="text"
//                            value={name.value}
//                            onChange={(e) => this.handleValueChange('name', e.target.value)}
//                        />
//                        {！name.valid && <span>{name.error}</span>}
//                        <br/>
//                        <label>年龄：</label>
//                        <input
//                            type="number"
//                            value={age.value || ''}
//                            onChange={(e) => this.handleValueChange('age', e.target.value, 'number')}
//                        />
//                        {！age.valid && <span>{age.error}</span>}
//                        <br/>
//                        <label>性别：</label>
//                        <select
//                            value={gender.value}
//                            onChange={(e) => this.handleValueChange('gender', e.target.value)}
//                        >
//                            <option value="">请选择</option>
//                            <option value="male">男</option>
//                            <option value="female">女</option>
//                        </select>
//                        {！gender.valid && <span>{gender.error}</span>}
//                        <br/>
//                        <br/>
//                        <input type="submit" value="提交"/>
//                    </form>
//                </main>
//            </div>
//        );
//    }
//}
export default RegisterBox;