//规则流程--->订单管理
import React from 'react';
import ReactDOM from 'react-dom';

class OrderReview extends React.Component{
    render(){
        return(
            <div>
                <div className="r_content">
                    <div className="regulation-title">
                        规则流程>> 订单审核说明
                    </div>
                    <div className="content_item">
                        <ul className="regulation-ul">
                            <li>
                                <div className="li2">
                                    <span className="spannum">1</span> 什么是订单审核？
                                </div>
                                <p>
                                    入驻的商家在提交产品入驻的时候，针对这款产品需要给平台分销商一定的优惠幅度，例如您自己的淘宝店 销售价格是100元，我们分销商去采购拍单还是100元，您在入驻商品时候提交的优惠幅度设置是15元，那么只要 是分销商选择该商品并在您的淘宝店原价采购，您就需要下载并打开商家版犇店宝客户端，该客户端用于商家 查看卖家提交过来的成功分销的宝贝订单，以及这段时间总的成交单数，并根据自己店铺的成交订单号来核实 这些提交的订单，核实之后即可将该笔交易的优惠幅度以牛币的形式返给分销商
                                </p>
                            </li>
                            <li>
                                <div className="li2">
                                    <span className="spannum">2</span> 审核订单时间？
                                </div>
                                <p>商家需要每天登陆下客户端查看是否有分销商提交过来的订单，然后去核实，系统对于在超过7天商家还未处理 的订单会自动审核通过，并扣除与优惠幅度等额的牛币，所以请至少3天登陆一次查看订单，及时处理订单可以 建立您与分销商之间的长期信任跟合作
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default OrderReview;