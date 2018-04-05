import React from 'react';
import './common.css';
import u162 from '../../../images/u162.jpg';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="copyright_bg">
                    <div className="copyright-content">
                        <div className="contact">
                            <ul>
                                <li>Copyright&nbsp;©&nbsp;2016-2017&nbsp;犇店宝&nbsp;版权所有&nbsp;All&nbsp;Rights&nbsp;Reserved&nbsp;鄂ICP备16010229号-2</li>
                                <li>公&nbsp;司：武汉思爵电子商务有限公司&nbsp;&nbsp;&nbsp;&nbsp;E-mail：2852513646@qq.com&nbsp;&nbsp;&nbsp;&nbsp; 电&nbsp;话：027-84755005 &nbsp;&nbsp;&nbsp;&nbsp;QQ：2852513646</li>
                            </ul>
                        </div>
                        <div className="two-dimension-code">
                            <img width="100" height="100" src={u162}/>
                            <p>扫一扫&nbsp;加关注</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;