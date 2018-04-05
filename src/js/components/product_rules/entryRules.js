//入驻流程
import React from 'react';
import ReactDOM from 'react-dom';
import './entry_rules.css';

class EntryRules  extends React.Component{
    render(){
        return(
            <div>
                        <div className="r_content">
                            <div className="regulation-title"> 规则流程>>入驻流程 </div>
                            <div className="content_item">
                                <ul className="regulation-ul">
                                    <li>
                                        <div className="li2"> <span className="spannum">1</span> 商家注册 </div>
                                        <p> 点击 <a href="register.html">注册</a> 填写相关个人信息，扫描官方公众号二维码获取验证码，提交注册信息</p>
                                    </li>
                                    <li>
                                        <div className="li2"><span className="spannum">2</span> 商家登录</div>
                                        <p> 登陆后进入商家入驻页面补全商家信息，提交给后台审核，注意您提交的入驻货源所在店铺需要达到商家入驻标注，详情可参考 ---<a href="index.html#letgo">店铺要求</a> </p>
                                    </li>
                                    <li>
                                        <div className="li2"><span className="spannum">3</span> 商家入驻</div>
                                        <p> 1-3个工作日内工作人员会将审核结果通知短信发送到注册手机号，请关注短信提醒
                                            <br/> 1，通过审核，可直接在 <a>商品管理-产品入驻 </a>下提交商品，请按照 商品规范 提交商品，货源商品信息会被提交到后台由工作人员审核
                                            <br/> 2，未通过审核，可在 <a href="account_center.html">账户中心-我的账户</a> 下查看账户状态，审核未通过会显示“已拒绝” 状态，可根据拒绝备注重新提交，再次审核 </p>
                                    </li>
                                    <li>
                                        <div className="li2"><span className="spannum">4</span> 产品审核</div>
                                        <p> 1-3个工作日内工作人员会将审核结果通知短信发送到注册手机号，请关注短信提醒
                                            <br/> 1，通过审核， 在 <a>商品管理-我的产品</a>列表下可以看到所有提交的商品，会列出每个商品的审核状态，通过审核该商品即可被发布到产品库，供分销商挑选
                                            <br/> 2，未通过审核，在“审核状态” 一栏若是显示“未通过”，说明该商品未达到规定的入驻条件，未通过的原因可参考“审核备注”一栏，可根据备注提示点，<a
                                            >更新</a>修改相关信息再次提交</p>
                                    </li>
                                    <li>
                                        <div className="li2"><span className="spannum">5</span> 入驻成功</div>
                                        <p>商品通过审核后，即入驻成功，进入产品库待选购，可在<a>我的产品</a> 处看到每个入驻的商品被选购的次数</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
        )
    }
}
export default EntryRules