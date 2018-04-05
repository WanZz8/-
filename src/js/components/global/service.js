//侧边栏的客服导航
import React from 'react';
import ReactDOM from 'react-dom';
import animate from './animate'
import './kefu.css';
//引入a标签的背景图片
import Background from '../../../images/shopnc.png'
var open={
    background:`url(${Background}) no-repeat -410px 0`,
    display:'block',
    top:'75px'
}
var close={
    background:`url(${Background}) no-repeat -450px 0`,
    display:'block',
    top:'75px'
}
var fade={
    width:0,
    opacity:0,
    transition:'all .3s linear',
    overflow:'hidden'
}
var fadeIn={
    width:150,
    transition:'all .3s linear',
    opacity:1,
    overflow:'hidden'
}
class ServiceBox extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            liked:false,
            display:false
        })
    }
    handleClick(e){
        this.setState({
            liked:!this.state.liked,
            display:!this.state.display
        })
    }
    componentDidMount(){
        var service=ReactDOM.findDOMNode(this.refs.service);
        window.addEventListener("scroll",function(){
            var scrollTop=document.documentElement.scrollTop||
                document.body.scrollTop;
            animate(service,"top",scrollTop+200);
        })
    }
    render(){
        let style=this.state.liked?close:open
        let shows =this.state.display?fadeIn:fade;
        return(
            <div>
                <div className="rides-cs" ref="service">
                    <div className="floatL">
                        <a style={style} className="btnCtn" title="查看在线客服"  href="javascript:void(0);" onClick={(e)=>this.handleClick(e)}>展开</a>
                    </div>
                    <div className="floatR" style={shows}>
                        <div className="cn">
                            <h3 className="titZx">在线客服</h3>
                            <ul>
                                <li><span>客服QQ</span>
                                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2852513646&site=qq&menu=yes"><img src={require('../../../images/online.png')} alt="点击这里给我发消息" title="点击这里给我发消息" /></a>
                                </li>
                                <li><span>客服QQ</span>
                                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2885717499&site=qq&menu=yes"><img src={require('../../../images/online.png')} alt="点击这里给我发消息" title="点击这里给我发消息" /></a>
                                </li>
                                <li className="qrcode">
                                    <dl>
                                        <dt><img src={require('../../../images/user.png')} alt="犇店宝二维码" width="86px" height="86px" /></dt>
                                        <dd>扫码加入官方体验群</dd>
                                        <dd><a href="https://jq.qq.com/?_wv=1027&k=4A8ddTU" target="_blank"><strong>点击立即加入</strong></a></dd>
                                        <dd><span>电话027-84755005</span></dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceBox;
