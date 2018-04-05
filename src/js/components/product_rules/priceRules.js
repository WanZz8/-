//商品规范--->价格规范
import React from 'react';
import ReactDOM from 'react-dom';

class PriceRules extends React.Component{
    render(){
        return(
            <div>
                <div className="r_content">
                    <div className="regulation-title"> 规则流程>>价格规范说明 </div>
                    <div className="content_item">
                        <ul className="regulation-ul">
                            <li>
                                <div className="li2"> <span className="spannum">1</span> 设置优惠幅度 </div>
                                <p>入驻的商家在提交产品入驻的时候，针对这款产品需要给平台分销商一定的优惠幅度，例如您自己的淘宝店 销售价格是100元，我们分销商去采购拍单还是100元，您在入驻商品时候提交的优惠幅度是15元，那么只要 是分销商选择该商品并成功卖出且交易成功，您需要在平台内反给分销商15牛币
                                </p>
                            </li>
                            <li>
                                <div className="li2"> <span className="spannum">2</span> 价格设置 </div>
                                <p> 提交商品的时候设置的淘宝价格为您自己淘宝店铺的正常销售价格，不可专为犇店宝平台分销商单独设置一个 明显价格高出许多的采购链接
                                </p>
                            </li>
                            <li>
                                <div className="li2"><span className="spannum">3</span> 更改价格</div>
                                <p> 自产品入驻到平台计算，2个月之内不可以随意涨价，如有客观原因必须涨价，请提前到平台商品管理- <a href="my_commodity.html">我的产品</a> 下找到该商品，填写写的价格，新的价格会被客服审核，审核通过会第一时间将涨价信息推送到分销商</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PriceRules