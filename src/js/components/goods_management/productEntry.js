//商品管理--->产品入驻
'user strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { Radio,Icon,Modal, Button ,Input, Col, Select} from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;
const RadioGroup = Radio.Group;
var fade={
    display:'none'
}
var fadeIn={
    display:'block'
}
class ProductEntry extends React.Component{
    render(){
        return(
            <div id="comm-container">
                <div className="colspan">
                    <GetDirectory/>
                </div>
                <div className="colspan">
                    <ProductNameBox/>
                </div>
                <div className="colspan">
                    <ProductTitle/>
                </div>
                <div className="colspan">
                    <PurchaseLink/>
                </div>
                <div className="colspan">
                    <GoodsLink/>
                </div>
                <div className="colspan">
                    <OwnShops/>
                </div>
                <div className="colspan">
                    <ProductOrigin/>
                </div>
                <div className="colspan">
                    <ShopsImpower/>
                </div>
                <div className="colspan">
                    <ShopsAptitudes/>
                </div>
                <div className="colspan">
                    <Pinkage/>
                </div>
                <div className="colspan">
                    <TBProductPrice/>
                </div>
                <div className="colspan">
                    <PreferentialBox/>
                </div>
                <div className="colspan">
                    <PreferentialBox/>
                </div>
                <div className="colspan">
                    <UpsetPrice/>
                </div>
                <div className="colspan">
                    <MonthSales/>
                </div>
                <div className="colspan">
                    <MainPhoto/>
                </div>
                <div className="colspan">
                    <MaterialRoot/>
                </div>
                <div className="colspan">

                </div>
            </div>
        )
    }
}
class GetDirectory extends React.Component {
    render() {
        let style={
            width: '20%',
            height:'35px'
        }
        return (
            <div>
                <InputGroup compact>
                    <span className="Inputspan">一级目录 :</span>
                    <Select style={style} defaultValue="Home">
                        <Option value="Home">Home</Option>
                        <Option value="Company">Company</Option>
                    </Select>
                    <span className="Inputspan">二级目录 :</span>
                    <Select style={style} defaultValue="Home">
                        <Option value="Home">Home</Option>
                        <Option value="Company">Company</Option>
                    </Select>
                </InputGroup>
            </div>
        );
    }
}
//产品名称
class ProductNameBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn,
            })
        }else if(this.value.length>32){
            this.setState({
                inputValue:'*长度请小于32个字符！',
                display:fadeIn,
            })
        }else{
            this.setState({
                display:fade
            })
        }
    }
    render(){
        let shows =this.state.display;
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClass">产品名称 :</span>
                    <Input style={{ width: '20%' }} onBlur={(e)=>this.handleBlur(e)}/>
                    <span className="InputValue">请填写简洁的名称,例如:暖手宝</span>
                    <p style={shows} className="errorsTips">{this.state.inputValue}</p>
                </InputGroup>
            </div>
        )
    }
}
//产品标题
class ProductTitle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn,
            })
        }else if(this.value.length>60){
            this.setState({
                inputValue:'*长度请小于60个字符！',
                display:fadeIn,
            })
        }else{
            this.setState({
                display:fade
            })
        }
    }
    render(){
        let shows =this.state.display;
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClass">产品标题 :</span>
                    <Input style={{ width: '20%' }}onBlur={(e)=>this.handleBlur(e)}/>
                    <p className="errorsTips" style={shows}>{this.state.inputValue}</p>
                </InputGroup>
            </div>
        )
    }
}
//采购链接
class PurchaseLink extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        let reg=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/g;
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn,
            })
        }else if(this.value.length>256){
            this.setState({
                inputValue:'*长度请小于256个字符！',
                display:fadeIn,
            })
        }else if(reg.test(this.value)==false){
            this.setState({
                inputValue:'*请输入合法链接！',
                display:fadeIn,
            })
        }
        else{
            this.setState({
                display:fade
            })
        }
    }
    render(){
        let shows =this.state.display;
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClass">采购链接 :</span>
                    <Input style={{ width: '20%' }} placeholder="请输入URL" onBlur={(e)=>this.handleBlur(e)}/>
                    <span className="InputValue">此链接为该商品一直在销售中的正常链接，将会作为分销商的采购链接（工作人员会审核该链接的销量，好评率等）</span>
                    <p className="errorsTips" style={shows}>{this.state.inputValue}</p>
                </InputGroup>
            </div>
        )
    }
}
//货源链接
class GoodsLink extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        let reg=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/g;
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn,
            })
        }else if(this.value.length>256){
            this.setState({
                inputValue:'*长度请小于256个字符！',
                display:fadeIn,
            })
        }else if(reg.test(this.value)==false){
            this.setState({
                inputValue:'*请输入合法链接！',
                display:fadeIn,
            })
        }
        else{
            this.setState({
                display:fade
            })
        }
    }
    render(){
        let shows =this.state.display;
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClass">货源链接 :</span>
                    <Input style={{ width: '20%' }}onBlur={(e)=>this.handleBlur(e)} placeholder="请输入URL"/>
                    <span className="InputValue">此链接为该商品去掉了包括主图，销售属性背景图，宝贝描述图片，描述文字上带有的产品log,价格，店铺名称水印等特殊标识的商品链接，而且品牌属性请一律改成其他（有知识产品的品牌除外）为了分销商复制该商品页面淘宝不会给予违规处罚，请妥善处理该页面文字，图片（工作人员会审核该页面是否符合要求）</span>
                    <p className="errorsTips" style={shows}>{this.state.inputValue}</p>
                </InputGroup>
            </div>
        )
    }
}
//所属店铺
class OwnShops extends React.Component {
    render() {
        let style={
            width: '20%',
            height:'35px'
        }
        return (
            <div>
                <InputGroup compact>
                    <span className="Inputspan">所属店铺 :</span>
                    <Select style={style} defaultValue="">
                        <Option value="w">Home</Option>
                        <Option value="C">Company</Option>
                    </Select>
                </InputGroup>
            </div>
        );
    }
}
//产品品牌
class ProductOrigin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn,
            })
        }else{
            this.setState({
                display:fade
            })
        }
    }
    render(){
        let shows =this.state.display;
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClass">产品品牌 :</span>
                    <Input style={{ width: '20%' }} onBlur={(e)=>this.handleBlur(e)}/>
                    <p style={shows} className="errorsTips">{this.state.inputValue}</p>
                </InputGroup>
            </div>
        )
    }
}
//品牌授权
class ShopsImpower extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade,
            src:''
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        let reg=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/g;
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn
            })
        }else if(this.value.length>256){
            this.setState({
                inputValue:'*长度请小于256个字符！',
                display:fadeIn
            })
        }else if(reg.test(this.value)==false){
            this.setState({
                inputValue:'*请输入合法链接！',
                display:fadeIn
            })
        }
        else {
            this.setState({
                display:fade,
                src:this.value
            })
        }
    }
    handleClick(e){
        let tipE=ReactDOM.findDOMNode(this.refs.tip);
        let imgDiv=ReactDOM.findDOMNode(this.refs.imgDiv);
        console.log(this.state.src)
        if(this.state.src!=''){
            if(imgDiv.style.display=='none'){
    imgDiv.style.display='block'
}
}
}
render(){
    let shows =this.state.display;
    return(
        <div>
            <InputGroup compact>
                <span className="InputClass">品牌授权 :</span>
                <Input style={{ width: '20%'}} ref="tip" onBlur={(e)=>this.handleBlur(e)} placeholder="请输入URL并点击上传按钮！" ref="tip"/>
                <Button type="primary" onClick={(e)=>this.handleClick(e)} className="submitBtn">上传</Button>
                    <span className="InputValue">
1，如果您有品牌授权请填入相关图片空间地址，有助于您的分销商合理使用品牌而不被淘宝处罚，提升出单率2，请填入该图片的淘宝图片空间地址，<Link to='/imgUpLoad'>如何获取图片空间地址</Link>
                    </span>
                <p style={shows} className="errorsTips">{this.state.inputValue}</p>
            </InputGroup>
            <div>
                <ImgDiv url={this.state.src} ref="imgDiv"/>
            </div>
        </div>
    )
}
}
//品牌资质
class ShopsAptitudes extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade,
            src:''
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        let reg=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/g;
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn
            })
        }else if(this.value.length>256){
            this.setState({
                inputValue:'*长度请小于256个字符！',
                display:fadeIn
            })
        }else if(reg.test(this.value)==false){
            this.setState({
                inputValue:'*请输入合法链接！',
                display:fadeIn
            })
        }
        else {
            this.setState({
                display:fade,
                src:this.value
            })
        }
    }
    handleClick(e){
        let tipE=ReactDOM.findDOMNode(this.refs.tip);
        let imgDiv=ReactDOM.findDOMNode(this.refs.imgDiv);
        console.log(this.state.src)
        if(this.state.src!=''){
            if(imgDiv.style.display=='none'){
                imgDiv.style.display='block'
            }
        }
    }
    render(){
        let shows =this.state.display;
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClass">品牌授权 :</span>
                    <Input style={{ width: '20%'}} ref="tip" onBlur={(e)=>this.handleBlur(e)} placeholder="请输入URL并点击上传按钮！" ref="tip"/>
                    <Button type="primary" onClick={(e)=>this.handleClick(e)} className="submitBtn">上传</Button>
                    <span className="InputValue">
1，如果您有品牌授权请填入相关图片空间地址，有助于您的分销商合理使用品牌而不被淘宝处罚，提升出单率2，请填入该图片的淘宝图片空间地址，<Link to='/imgUpLoad'>如何获取图片空间地址</Link>
                    </span>
                    <p style={shows} className="errorsTips">{this.state.inputValue}</p>
                </InputGroup>
                <div>
                    <ImgDiv url={this.state.src} ref="imgDiv"/>
                </div>
            </div>
        )
    }
}
//是否包邮
class Pinkage extends React.Component {
    state = {
        value: 1,
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }
    render() {
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>包邮</Radio>
                <Radio value={2}>不包邮</Radio>
            </RadioGroup>
        );
    }
}
//淘宝售价
class TBProductPrice extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        let reg=/^[1-9]\d*$/;
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn,
            })
        }else if(reg.test(this.value)==false){
            this.setState({
                inputValue:'*格式错误！',
                display:fadeIn,
            })
        }
        else{
            this.setState({
                display:fade
            })
        }
    }
    render(){
        let shows =this.state.display;
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClass">淘宝售价 :</span>
                    <Input style={{ width: '20%' }}onBlur={(e)=>this.handleBlur(e)} placeholder="请输产品淘宝零售价"/>&nbsp;元
                    <span className="InputValue">淘宝线上公开价格</span>
                    <p className="errorsTips" style={shows}>{this.state.inputValue}</p>
                </InputGroup>
            </div>
        )
    }
}
//优惠幅度
class PreferentialBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        let reg=/^[5-9]\d*$/;
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn,
            })
        }else if(reg.test(this.value)==false){
            this.setState({
                inputValue:'*格式错误！',
                display:fadeIn,
            })
        }
        else{
            this.setState({
                display:fade
            })
        }
    }
    render(){
        let shows =this.state.display;
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClass">优惠幅度 :</span>
                    <Input style={{ width: '20%' }}onBlur={(e)=>this.handleBlur(e)} placeholder="优惠幅度不低于五元"/>&nbsp;元
                    <span className="InputValue">优惠幅度指的是针对犇店宝平台下的分销商去采购该商品，在原价基础上的优惠金额，该优惠将以牛币的形式予以返还在订单交易成功后，分享商将会在系统提交订单中，您审核通过后该笔订单优惠将有牛币形式反给分销商</span>
                    <p className="errorsTips" style={shows}>{this.state.inputValue}</p>
                </InputGroup>
            </div>
        )
    }
}
//分销商最低售价
class UpsetPrice extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        let reg=/^\d+$/;
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn,
            })
        }else if(reg.test(this.value)==false){
            this.setState({
                inputValue:'*格式错误！',
                display:fadeIn,
            })
        }
        else{
            this.setState({
                display:fade
            })
        }
    }
    render(){
        let shows =this.state.display;
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClassone">分销商最低售价 :</span>
                    <Input style={{ width: '20%' }}onBlur={(e)=>this.handleBlur(e)}/>&nbsp;元
                    <span className="InputValue">指定分销商的零售价不可低于这个价格</span>
                    <p className="errorsTips" style={shows}>{this.state.inputValue}</p>
                </InputGroup>
            </div>
        )
    }
}
//月销量
class MonthSales extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        let reg=/^[1-9]\d*$/;
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn,
            })
        }else if(reg.test(this.value)==false){
            this.setState({
                inputValue:'*格式错误！',
                display:fadeIn,
            })
        }
        else{
            this.setState({
                display:fade
            })
        }
    }
    render(){
        let shows =this.state.display;
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClass">&nbsp;月&nbsp;销&nbsp;量 :</span>
                    <Input style={{ width: '20%' }}onBlur={(e)=>this.handleBlur(e)}/>&nbsp;笔
                    <span className="InputValue"></span>
                    <p className="errorsTips" style={shows}>{this.state.inputValue}</p>
                </InputGroup>
            </div>
        )
    }
}
//主图
class MainPhoto extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade,
            src:''
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        let reg=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/g;
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn
            })
        }else if(this.value.length>256){
            this.setState({
                inputValue:'*长度请小于256个字符！',
                display:fadeIn
            })
        }else if(reg.test(this.value)==false){
            this.setState({
                inputValue:'*请输入合法链接！',
                display:fadeIn
            })
        }
        else {
            this.setState({
                display:fade,
                src:this.value
            })
        }
    }
    handleClick(e){
        let tipE=ReactDOM.findDOMNode(this.refs.tip);
        let imgDiv=ReactDOM.findDOMNode(this.refs.imgDiv);
        console.log(this.state.src)
        if(this.state.src!=''){
            if(imgDiv.style.display=='none'){
                imgDiv.style.display='block'
            }
        }
    }
    render(){
        let shows =this.state.display;
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClass">&nbsp;主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;图 :</span>
                    <Input style={{ width: '20%'}} ref="tip" onBlur={(e)=>this.handleBlur(e)} placeholder="请输入URL并点击上传按钮！" ref="tip"/>
                    <Button type="primary" onClick={(e)=>this.handleClick(e)} className="submitBtn">上传</Button>
                    <span className="InputValue">
请上传不少于8张并且不同于线上已经在使用的主图图片<Link to='/imgUpLoad'>（如何获取图片空间地址）</Link>，用于不同分销商的店铺展示，主图上传详情请参看 <Link to="/imgRules">图片规范</Link>
                    </span>
                    <p style={shows} className="errorsTips">{this.state.inputValue}</p>
                </InputGroup>
                <div>
                    <ImgDiv url={this.state.src} ref="imgDiv"/>
                </div>
            </div>
        )
    }
}
//材质词根
class MaterialRoot extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn,
            })
        }else if(this.value.length>32){
            this.setState({
                inputValue:'*材质词根不得长于32个字符！',
                display:fadeIn,
            })
        }
        else{
            this.setState({
                display:fade
            })
        }
    }
    render(){
        let shows =this.state.display;
        return(
            <div>
                <InputGroup compact>
                    <span className="InputClass">材质词根 :</span>
                    <Input style={{ width: '20%' }}onBlur={(e)=>this.handleBlur(e)}/>
                    <span className="InputValue">例如:毛绒，涤纶</span>
                    <p className="errorsTips" style={shows}>{this.state.inputValue}</p>
                </InputGroup>
            </div>
        )
    }
}
//直接关联副词跟
class AdverbsWith extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            display:fade
        }
    }
    handleBlur(e){
        this.value=e.target.value;
        console.log(this.value);
        if(this.value==""){
            this.setState({
                inputValue:'*必  填！',
                display:fadeIn,
            })
        }else if(this.value.length>10){
            this.setState({
                inputValue:'*词根不得长于10个字符！',
                display:fadeIn,
            })
        }
        else{
            this.setState({
                display:fade
            })
        }
    }
    render(){
        let shows =this.state.display;
        return(
            <div>
                <InputGroup compact onChange={()=>this.handleBlur(e)}>
                    <span className="InputClassone">直接关联副词根 :</span>
                    <Input style={{ width: '8%' }}/>
                    <Input style={{ width: '8%' }}/>
                    <Input style={{ width: '8%' }}/>
                    <Input style={{ width: '8%' }}/>
                    <Input style={{ width: '8%' }}/>
                    <Input style={{ width: '8%' }}/>
                    <Input style={{ width: '8%' }}/>
                    <span className="InputValueOne">请填写与商品直接相关的属性词;如：USB充电，可移动，便携式</span>
                    <p className="errorsTips" style={shows}>{this.state.inputValue}</p>
                </InputGroup>
            </div>
        )
    }
}
//自定义图片上传容器
class ImgDiv extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            liked:fade
        })
    }
    handleCancel(e){
        let imgContainer=ReactDOM.findDOMNode(this.refs.shows);
        if(imgContainer.style.display=='block'){
            imgContainer.style.display="none"
        }
    }
    render(){
        let style={float:'left',marginRight:'5px'}
        return(
            <div ref="shows" style={this.state.liked}>
                <div className="clearfix">
                    <div className="imgContainer">
                        <img src={this.props.url}/>
                       <b>
                           <div className="antdIcon">
                               <Button icon="delete" style={style} onClick={(e)=>this.handleCancel(e)}/>
                               <App url={this.props.url}/>
                           </div>
                       </b>
                    </div>
                </div>
            </div>
        )
    }
}
class App extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        let style={float:'left'}
        return (
            <div style={style}>
                <Button ghost onClick={this.showModal} icon="eye-o"></Button>
                <Modal
                    title="图片预览"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <img src={this.props.url} alt="" className="Preview"/>
                </Modal>
            </div>
        );
    }
}

export default ProductEntry;
//handleClick(e){
//    var tipE=ReactDOM.findDOMNode(this.refs.tip);
//    console.log(tipE.value);
//    let reg=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/g;
//    if(tipE.value==""||tipE.value.length>256||reg.test(this.value)==false){
//        this.setState({
//            inputValue:'*请输入合法链接！',
//        })
//        return false;
//    }else {
//
//        key++;
//        fileList.push(
//            {
//                uid: key,
//                name: 'xxx.png',
//                status: 'done',
//                url: tipE.value
//            }
//        )
//        this.setState({
//            fileList: fileList
//        })
//    }
//}