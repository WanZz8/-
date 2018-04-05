//个人中心
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import './account.css';
import MyAjax from './myAxios';
import { Button ,Input, Col} from 'antd';
const InputGroup = Input.Group;

//定义trim()函数
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
//通过邀请人Id生成邀请码
function getRandomIdCode(id){
    var str = id + "";
    var len = 16 - str.length;
    var nums = [];
    for (var i = 0; i < len; i++) {
        nums.push(Math.floor(Math.random() * 9) + 1);
    }
    nums.push(0);
    for (var i = 0; i < str.length; i++) {
        nums.push(parseInt(str[i]));
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i] * nums[i];
    }
    var x = (sum % 9) + 1;
    return x + nums.join("");
}
class PersonalCenter extends React.Component{
    render(){
        return(
            <div>
                        <div className="padding_15"></div>
                        <div className="account_first">
                            <div className="account-content">
                                <div className="content-title">个人信息</div>
                            </div>
                            <div id="form-content">
                                <UserFormBox/>
                            </div>
                        </div>
                        <div className="padding_15"></div>
                        <div className="account_item">
                            <div className="account-content">
                                <div className="content-title">我的上级好友信息</div>
                            </div>
                            <div id="my-upper-friend">
                                <MyUpperFriend/>
                            </div>
                        </div>

                    <div className="padding_15"></div>
                </div>

        )
    }
}
//个人信息表
class UserFormBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userNameErrors:' ',
            userPhoneErrors:'',
            userQQErrors:'',
            userWerChatErrors:'',
            userPayErrors:'',
            userAddressErrors:''
        }
    }
    handleBlurName(e){
        this.value=e.target.value;
        if(this.value==""){
            this.setState({
                userNameErrors:'*必  填！'
            })
        }else{
            this.setState({
                userNameErrors:''
            })
        }
    }
    handleBlurPhone(e){
        this.value=e.target.value;
        let reg=/(\+86|0086)?\s*1[34578]\d{9}/;
        if(this.value==""){
            this.setState({
                userPhoneErrors:'*必  填！'
            })
        }else if(reg.test(this.value)==false){
            this.setState({
                userPhoneErrors:'*格式错误！'
            })
        }else{
            this.setState({
                userPhoneErrors:''
            })
        }
    }
    handleBlurQQ(e){
        this.value=e.target.value;
        let reg=/^\d{5,10}$/;
        if(this.value==""){
            this.setState({
                userQQErrors:'*必  填！'
            })
        }else if(reg.test(this.value)==false){
            this.setState({
                userQQErrors:'*格式错误！'
            })
        }else{
            this.setState({
                userQQErrors:''
            })
        }
    }
    handleBlurWeiChat(e){
        this.value=e.target.value;
        let reg=/^[a-zA-Z\d_]{5,}$/;
        if(this.value==""){
            this.setState({
                userWerChatErrors:'*必  填！'
            })
        }else if(reg.test(this.value)==false){
            this.setState({
                userWerChatErrors:'*格式错误！'
            })
        }else{
            this.setState({
                userWerChatErrors:''
            })
        }
    }
    handleBlurPay(e){
        this.value=e.target.value;
        if(this.value==""){
            this.setState({
                userPayErrors:'*必  填！'
            })
        }else{
            this.setState({
                userPayErrors:''
            })
        }
    }
    handleBlurAddress(e){
        this.value=e.target.value;
        if(this.value==""){
            this.setState({
                userAddressErrors:'*必  填！'
            })
        }else{
            this.setState({
                userAddressErrors:''
            })
        }
    }
    //用于发送请求
    handleOnSubmit(e){
        e.preventDefault();
        console.log(window.location.host)
    }
    render(){
        return(
            <div>
                <div className="personerInfo">
                    <InputGroup compact>
                        <span className="InputClassInfo">姓名 :</span>
                        <Input style={{ width: '25%' }}onBlur={(e)=>this.handleBlurName(e)}/>
                        <span className="errorsTipsInfo">{this.state.userNameErrors}</span>
                        <span className="InputClassInfo">号码 :</span>
                        <Input style={{ width: '25%' }}onBlur={(e)=>this.handleBlurPhone(e)}/>
                        <span className="errorsTipsInfo">{this.state.userPhoneErrors}</span>
                    </InputGroup>
                </div>
                <div className="personerInfo">
                    <InputGroup compact>
                        <span className="InputClassInfo">Q  Q :</span>
                        <Input style={{ width: '25%' }}onBlur={(e)=>this.handleBlurQQ(e)}/>
                        <span className="errorsTipsInfo">{this.state.userQQErrors}</span>
                        <span className="InputClassInfo">微信 :</span>
                        <Input style={{ width: '25%' }}onBlur={(e)=>this.handleBlurWeiChat(e)}/>
                        <span className="errorsTipsInfo">{this.state.userWerChatErrors}</span>
                    </InputGroup>
                </div>
                <div className="personerInfo">
                    <InputGroup compact>
                        <span className="InputClassInfoOne">支付宝账号 :</span>
                        <Input style={{ width: '25%' }}onBlur={(e)=>this.handleBlurPay(e)}/>
                        <span className="errorsTipsInfo">{this.state.handleBlurPay}</span>
                        <span className="InputClassInfoTwo">账户余额 :</span>
                        <Input style={{ width: '25%' }} disabled value="0"/>
                        <span className="errorsTipsInfo"></span>
                    </InputGroup>
                </div>
                <div className="personerInfo">
                    <InputGroup compact>
                        <span className="InputClassInfoThree">联系地址 :</span>
                        <Input style={{ width: '25%' }}onBlur={(e)=>this.handleBlurAddress(e)}/>
                        <span className="errorsTipsInfo">{this.state.userAddressErrors}</span>
                        <span className="InputClassInfoFo">我的邀请链接 :</span>
                        <Input style={{ width: '25%' }}/>
                        <Button type="primary">复制</Button>
                    </InputGroup>
                </div>
                <div className="errors-tips"></div>
                <div className="btn-update">
                    <Button type="primary" style={{ width: '25%' ,height:'35px'}} onClick={(e)=>this.handleOnSubmit(e)}>更新</Button>
                </div>
            </div>
        )
    }
}
//我的上级好友
class MyUpperFriend extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){

    }
    render(){
        return(
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>QQ</th>
                    <th>微信</th>
                    <th>手机</th>
                    <th>旺旺</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <span></span>
                    </td>
                    <td>
                        <span></span>
                    </td>
                    <td>
                        <span></span>
                    </td>
                    <td>
                        <span></span>
                    </td>
                    <td>
                        <span></span>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }

}
export default PersonalCenter;
