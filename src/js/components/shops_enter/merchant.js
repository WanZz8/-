//商家入驻页面
import React from 'react';
import ReactDOM from 'react-dom';
import './merchant.css';
import QueueAnim from 'rc-queue-anim';
import {Checkbox,Icon,Button,Input,Col} from 'antd';
const InputGroup = Input.Group;

class Merchant extends React.Component{

    render(){
        return(
            <div>
                <div className="page">
                    <div className="padding_15"></div>
                    <div id="main-content">
                        <div className="main_part1">
                            <h3>入驻协议</h3>
                            <p>1. 请仔细阅读我们的 ”入驻资质“，确保您的店铺以及商品达到了入驻要求<br/>
                            2. 请保证您提供的货源商品是经过授权的，分销商如果因为使用您的货源被淘宝查处，当分销商有需要的时候，您有责任协助分销商解决问题，避免被淘宝处罚
                            <br/>3. 不可以随意调高商品出售价格，如有客观因素必须调高价格请第一时间告知平台，同时去更新自己的货源价格<br/>4.不可以随意下架商品，至少保证已经入驻商品在平台出售一个月，如有客观原因需下架请提前通知平台客服再下架处理<br/>5.及时处理分销商的订单优惠返利申请，7天内不审核将会自动审核通过 </p>
                <div id="agree-checkbox">
                    <Checkbox><span className="smart">我已阅读，并同意</span></Checkbox>
                </div>
            </div>
            <div className="padding_15"></div>
            <div id="content1">
                <div className="item-title">
                    <h3 id="title1">绑定店铺</h3>
                </div>
                <div className="item-content">
                    <div id="binding-store">
                        <QueueAnim delay={300} className="queue-simple">
                            <div className="colspan" key="a">
                                <BindingShops/>
                            </div>
                            <div className="colspan" key="b">
                                <WangID/>
                            </div>
                            <div className="colspan" key="c">
                                <HotGoodsLink/>
                            </div>
                    </QueueAnim>
                   </div>
                    <div id="entry-protocol">
                    </div>
                </div>
            </div>
            <div className="padding_15"></div>
                <div id="binded-store">
                    <div className="item-title">
                        <h5 id="title3">已绑定店铺</h5>
                    </div>
                    <div id="store-list"></div>
                </div>
            <div className="padding_15"></div>
            </div>
            <div className="clear"></div>
            </div>
            </div>
        )
    }
}
//店铺名称
class BindingShops extends React.Component{
    render(){
        return(
            <div>
                <InputGroup compact>
                    <span className="InputCla">店铺名称 :</span>
                    <Input style={{ width: '40%' }}/>
                    <span className="InputVa">绑定店铺是为了核实您货源店铺的动态评分（人工核实店名）</span>
                    <p className="errorsTips" ></p>
                </InputGroup>
            </div>
        )
    }
}
//店铺旺旺ID
class WangID extends React.Component{
    render(){
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClas">店铺旺旺ID :</span>
                    <Input style={{ width: '40%' }}/>
                    <span className="InputVa"></span>
                    <p className="errorsTips" ></p>
                </InputGroup>
            </div>
        )
    }
}
//热卖商品链接
class HotGoodsLink extends React.Component{
    render(){
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClaas">热卖商品链接 :</span>
                    <Input style={{ width: '40%' }}/>
                    <span className="InputVa">请提供您想入驻货源所在店铺的一个热销商品链接
（客服人员会在1-2个工作日内审核您提交的资料，届时会有短信通知审核结果，请耐心等待）</span>
                    <p className="errorsTips" ></p>
                </InputGroup>
            </div>
        )
    }
}
export default Merchant;