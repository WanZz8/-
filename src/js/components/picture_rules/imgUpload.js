//商品规范-->图片上传
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import QueueAnim from 'rc-queue-anim';
import PictureRules from './picture_rules'
var style={
    paddingTop:'30px'
}
class ImgUpLoadBox extends React.Component{
    render(){
        let margin={
            marginBottom:'15px'
        }
        return(
            <div className="r_content" style={margin}>
                            <div className="regulation-title">
                                商品规范>>品牌授权，品牌资质，商品主图的图片空间地址如何获取
                            </div>
                                <ul className="regulation-ul">
                                    <QueueAnim className="content_item" delay={300}>
                                    <li key="a">
                                        <div className="li1">将图片上传至淘宝图片空间</div>
                                        <p>淘宝给每个卖家都提供了商品图片线上存储空间即 https://tu.taobao.com， 打开这个网址登陆你的商家旺旺账号即可进入图片空间上传图片登录，如下图</p>
                                        <div className="pic_upload_m">
                                            <img src={require('../../../images/index/u1080.png')}/>
                                        </div>
                                        <p className="p1" style={style}>如果一个店铺里需要提交入驻的产品比较多，那么对应需要上传的图片也很多，为了更加方便管理自己的图片，更快速的找到要上传的图片，这里建议为每一个入驻的商品单独建一个文件夹来存放这个商品要上传的图片，便于管理以后，如下图
                                        </p>
                                        <div className="pic_upload_m">
                                            <img src={require('../../../images/index/u1084.png')} width="920"/>
                                        </div>
                                        <p className="p1" style={style}>上传 ”毛绒暖手宝“这个商品相关的图片，例如：品牌授权，品牌资质，主图
                                        </p>
                                        <div className="pic_upload_m">
                                            <img src={require('../../../images/index/u1088.png')} style={style}/>
                                        </div>
                                    </li>
                                    <li key="b">
                                        <div className="li1">获取已上传图片的图片空间地址</div>
                                        <p>
                                            将鼠标放到想要使用的图片名字上，根据提示即可得到这张图片的空间地址，再将此地址复制到商品提交页面，系统即可获取到您提交的这张图片了</p>
                                        <div className="pic_upload_m">
                                            <img src={require('../../../images/index/u1096.png')}/>
                                        </div>
                                    </li>
                                </QueueAnim>
                                </ul>
            </div>


        )
    }
}
export default ImgUpLoadBox;