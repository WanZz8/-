//我的店铺
import React from 'react';
import ReactDOM from 'react-dom';

class MyShops extends React.Component{
    render(){
        return(
            <div>
                        <div className="padding_15"></div>
                        <div className="account_item">
                            <div className="account-content">
                                <div className="content-title">我的店铺</div>
                            </div>
                            <div id="my-store"></div>
                        </div>
                        <div className="padding_15"></div>
                        <div className="account_item">
                            <div className="account-content">
                                <div className="content-title">会员充值</div>
                            </div>
                            <div className="account_re_pic"> <img src={require('../../../images/u162.jpg')} width="175" height="175" /> </div>
                            <div className="recharge_space">
                                <p>请输入流水号</p>
                                <br/>
                                <div id="member-charge"> </div>
                                <div className="recharge_tip"> 支付宝扫描二维码转账，转账成功后输入交易号，待管理员确认后充值成功. <a id="dd">如何获得流水号?</a> </div>
                            </div>
                            <div id="table_content">
                                <div id="charge-history">充值记录</div>
                            </div>
                        </div>
                    <div className="padding_15"></div>
                </div>
        )
    }
}
export default MyShops;