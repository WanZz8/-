//首页
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Draggable from 'react-draggable';
import Animate from 'animate.css'
import Slider from './Slider';
import './home.css';
import { Carousel,BackTop } from 'antd';

const IMAGE_DATA = [
    {
        src: require('../../../images/index/01.jpg'),
        alt: 'images-1',
    },
    {
        src: require('../../../images/index/index_1.jpg'),
        alt: 'images-2',
    },
    {
        src: require('../../../images/index/index_2.jpg'),
        alt: 'images-3',
    },
    {
        src: require('../../../images/index/index_3.jpg'),
        alt: 'images-4',
    }
];
class IndexPage extends React.Component{
    render(){
        return (
          <div>
              <div className="page">
                  <div id="main-content">
                      <div id="investment-dynamic">
                          <div className="index_login_bg">
                              <div className="login_space">
                                  <div className="title"><a href="http://test.bendianbao.com/bsclient.zip">犇店宝商家版下载</a></div>
                                  <div className="busi_login">
                                      <p className="not-login">
                                          <Link to='/login' className="mai_login">商家登录</Link>
                                         <Link to="/register" className="new_register">
                                          免费注册
                                      </Link>
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div id="ck-slide">
                              <Slider
                                  items={IMAGE_DATA}
                                  speed={1.2}
                                  delay={2.1}
                                  pause={true}
                                  autoplay={true}
                                  dots={true}
                                  arrows={true}
                              />
                          </div>
                      </div>
                      <div className="clear"></div>
                      <div className="adv_content">
                          <div className="adv_left"><img src={require('../../../images/index/adv.jpg')} /></div>
                          <div className="adv_c_b">
                              <div className="adv_center">
                                  <div className="s1">
                                      <Carousel autoplay vertical="true">
                                          <div><a href="##"><span>▪</span> 新手开店如何寻找个好的代销上家...<b>2017-02-15</b></a></div>
                                          <div><a href="##"><span>▪</span> 前100名商家免费入驻，不收任何费用，抢到就是赚到
                                              ...<b>2017-02-12</b></a></div>
                                          <div><a href="##"><span>▪</span> 策划导师教你开淘宝网店怎么做网络营销...<b>2017-02-16</b></a></div>
                                      </Carousel>
                                      </div>
                                  <div className="s2">
                                      <Carousel autoplay vertical="true">
                                          <div><a href="##"><span>▪</span> 前100名商家免费入驻，不收任何费用，抢到就是赚到
                                              ...<b>2017-02-12</b></a></div>
                                          <div><a href="##"><span>▪</span> 策划导师教你开淘宝网店怎么做网络营销...<b>2017-02-16</b></a></div>
                                          <div><a href="##"><span>▪</span> 新手开店如何寻找个好的代销上家...<b>2017-02-15</b></a></div>
                                      </Carousel>
                                  </div>
                                  </div>
                          </div>
                      </div>
                      <Appp/>
                  <div className="clear"></div>
                  <h2 className="rz_process">
                      <p className="p1">点击 <Link to='/login'>登录</Link> ,在之前关注的官方公告号菜单上获取验证码，即可登录</p>
                      <p className="p2">登陆后进入商家入驻页面补全商家店铺信息,提交后台审核,审核结果将会短信通知到您,注意您提交的入驻货源所在店铺需达到商家入驻标准,详情请参考--<a href="#letgo">店铺要求</a></p>
                      <p className="p3">点击   <Link to="/register">
                          注册
                      </Link> 填写相关个人信息，扫描官方公告号二维码获取验证码,提交注册信息</p>
                      <p className="p4">商家店铺审核通过后即可登录到 <Link to="/ProductEntry/3">商品管理--产品入驻</Link>   提交商品信息，基本信息完成后需要登录到商家客户端完成对应商品的泛词根库建立(如何建立词根库),提交词库后整个商品待客服审核，审核结果将短信通知您</p>
                      <p className="p5">工作人员确认该货源达到入驻要求后，该货源即可上线进入平台货源库等待分销商选购，对于商品入驻要求详情请参考-- <a href="#letwin">商品要求</a></p>
                  </h2>
                  <div id="entry-quality">
                      <h2 className="rz_zz"> 入驻资质 </h2>
                      <div id="entry-quality-content">
                          <div className="quality-item-group">
                              <div className="left-item">
                                  <div className="left_b">
                                      <div className="quality-item-title"> <span>商家要求</span> </div>
                                      <div className="quality-item-content">
                                          <div className="quality-item-icon"> 1 </div>
                                          <div className="quality-concrete-content"> 商家需要有一家淘宝店铺作为货源店铺，提交的 入驻商品也必须是来自此店铺在售商品，并且有销售数据可查 </div>
                                      </div>
                                      <div className="quality-item-content">
                                          <div className="quality-item-icon"> 2 </div>
                                          <div className="quality-concrete-content"> 对于想要提交入驻的同一个商品，需要有2个链接，一个是正常的正在售的商品链接（采购链接）， 该链接将用于分销商采购；另外一个链接则是该商品不带任何店铺log，水印，价格的复制版本（货源链接） </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="right-item">
                                  <div className="quality-item-title" id="letgo"><span>店铺要求</span> </div>
                                  <div className="quality-item-content">
                                      <div className="quality-item-icon"> 1 </div>
                                      <div className="quality-concrete-content"> 绑定的货源店铺信誉级别不低于3颗星，店铺动态评分3项指标均高于或者与同行标准持平，淘宝店铺好评率不低于98% </div>
                                  </div>
                                  <div className="quality-item-content">
                                      <div className="quality-item-icon">2 </div>
                                      <div className="quality-concrete-content"> 已加入淘宝网消费者保障服务且消保保证金余额≥1000元，需要加入“7天无理由退换货”服务 </div>
                                  </div>
                              </div>
                          </div>
                          <div className="clear"></div>
                          <div className="quality-item-group">
                              <div className="left-item">
                                  <div className="left_b">
                                      <div className="quality-item-title"><span>商品要求（采购链接）</span> </div>
                                      <div className="quality-item-content">
                                          <div className="quality-item-icon">1 </div>
                                          <div className="quality-concrete-content"> 商品最近30天交易成功的订单数量≥100件 </div>
                                      </div>
                                      <div className="quality-item-content">
                                          <div className="quality-item-icon">2 </div>
                                          <div className="quality-concrete-content"> 已加入淘宝网消费者保障服务且消保保证金余额≥1000元，需要加入“7天无理由退换货”服务 </div>
                                      </div>
                                      <div className="quality-item-content">
                                          <div className="quality-item-icon">3 </div>
                                          <div className="quality-concrete-content"> 参加入驻的商品库存必须>=50 件 </div>
                                      </div>
                                      <div className="quality-item-content">
                                          <div className="quality-item-icon">4 </div>
                                          <div className="quality-concrete-content"> 所有提交报名的商品及活动页面素材须确保不存在任何侵犯他人知识产权及其他合法权益的信息 </div>
                                      </div>
                                      <div className="quality-item-content">
                                          <div className="quality-item-icon">5 </div>
                                          <div className="quality-concrete-content"> 运动户外类目商品需要符合《淘宝网运动户外类行业标准》 </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="right-item">
                                  <div className="quality-item-title" id="letwin"> <span>商品要求（货源链接）</span> </div>
                                  <div className="quality-item-content">
                                      <div className="quality-item-icon">1 </div>
                                      <div className="quality-concrete-content"> 主图，销售属性背景图均不可以带商品价格，店铺名称，品牌水印 </div>
                                  </div>
                                  <div className="quality-item-content">
                                      <div className="quality-item-icon">2 </div>
                                      <div className="quality-concrete-content "> 商品宝贝详情图片均不可带销售价格，店铺名称，品牌水印，文字也是如此 </div>
                                  </div>
                                  <div className="quality-item-content">
                                      <div className="quality-item-icon">3 </div>
                                      <div className="quality-concrete-content "><a href="picture_regulation.html">详情请参考&nbsp;图片规范</a> </div>
                                      <div className="index_r_bg"></div>
                                  </div>
                              </div>
                          </div>
                          <div className="clear"></div>
                          <BackTop>
                              <div className="ant-back-top-inner">
                                  <img src={require('../../../images/goTop.png')} alt="回到顶部"/>
                              </div>
                          </BackTop>
                      </div>
                  </div>
              </div>
              </div>
          </div>
        )
    }
}

class Appp extends React.Component {
    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', event);
        console.log('Data: ', data);
    };
    componentDidMount(){
        var tipE=ReactDOM.findDOMNode(this.refs.iphone);
        tipE.className="iphone animated wobble";
        var canvas=ReactDOM.findDOMNode(this.refs.canvas);
        function GetRTime(){
            var EndTime= new Date('2017/07/18 00:00:00');
            var NowTime = new Date();
            var t =EndTime.getTime() - NowTime.getTime();
            var d=0;
            if(t>=0){
                d=Math.floor(t/1000/60/60/24);
            }
            canvas.innerHTML = d;
        }
        setInterval(GetRTime,1000);
    }
    render() {
        return (
            <Draggable
                axis="x"
                handle=".handle"
                defaultPosition={{x: 0, y: 100}}
                position={null}
                grid={[25, 25]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div className="iphone" ref="iphone">
                    <div id="iphone" className="handle">
                        <div className="iphoneBox">
                            <div className="iponeHeader">
                                <img src={require('../../../images/timelimit.png')} alt="" className="timelimit"/>
                                <div id="canvas" ref="canvas"></div>
                                <div className="dateBox">
                                    <b>仅剩</b>
                                    <img src={require('../../../images/date.png')} alt="" className="date"/>
                                    <b>天</b>
                                    <p id="countdown" className="countdown">
                                        <span>活动截止:</span>
                                        <strong id="strong">
                                            2017-6-17
                                        </strong>
                                    </p>
                                </div>
                            </div>
                            <div className="iponeSection">
                                <p className="first">犇店宝<span>开始招商啦<br/>&nbsp;!</span></p>
                                <div>
                                    <p className="second">免费入驻</p>
                                    <p className="secondNext">仅限前100名用户</p>
                                    <img src={require('../../../images/u162.jpg')} alt=""/>
                                </div>
                                <div>
                                    <p>
                                        <span>分销不花钱还能赚钱</span>
                                        <img src={require('../../../images/header.png')} alt="" className="IMgheader"/>
                                    </p>
                                    <p>赶快行动吧</p>
                                </div>
                            </div>
                            <div className="iphoneFooter">
                                <p>上万分销商为您卖货，迅速清库存</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Draggable>
        );
    }
}

export  default IndexPage;



