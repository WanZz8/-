//商品规范-->图片规范流程
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import '../product_rules/entry_rules.css';
import ImgUpLoadBox from './imgUpload'
class PictureRules extends React.Component{
    render(){
        return(
            <div>
                        <div className="r_content">
                            <div className="regulation-title"> 商品规范>>货源链接商品图片规范 </div>
                            <div className="content_item">
                                <ul className="regulation-ul">
                                    <li>
                                        <div className="li1">主图，销售属性背景图，宝贝描述图片 大小规范</div>
                                        <p>提供的所有主图，销售属性背景图，描述图片，图片大小符合淘宝规范，尤其是宝贝描述图需要是严格遵守淘宝图片尺寸要求的 以免在生成手机详情的时候遇到故障，影响移动端展示
                                        </p>
                                    </li>
                                    <li>
                                        <div className="li1">图片自身要求</div>
                                        <p> 所有图片不可以带价格，品牌，店铺名称， Log，以及水印，如果由于以上原因导致分销商已涉嫌侵权被查处，货源入驻方需要积极配合分销商申诉</p>
                                    </li>
                                     <li>
                                        <div className="li1">图片保护</div>
                                        <p> 货源链接商品展示的所有图片不可加入图片保护，否则由此给分销商带来的损失货源入驻方需承担责任并积极配合解决</p>
                                     </li>
                                </ul>
                            </div>
                        </div>
                    </div>

        )
    }
}
export default PictureRules;