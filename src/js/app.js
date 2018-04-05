import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import Common from './components/global/menu';
import "../css/global.css";

import Header from './components/global/header';
import ServiceBox from './components/global/service';
import Footer from './components/global/footer';
import IndexPage from './components/home/home';
import Merchant from './components/shops_enter/merchant';
import EntryRules from './components/product_rules/entryRules';
import ProduRulesSlider from './components/product_rules/produRulesBar';
import PriceRules from './components/product_rules/priceRules';
import OrderReview from './components/product_rules/orderReview';
import GoodsNavBar from './components/goods_management/goodsSideNav';
import CmdManage from './components/goods_management/cmdManage';
import MyProduct from './components/goods_management/myProduct';
import ProductEntry from './components/goods_management/productEntry';
import PriceChangeBox from './components/goods_management/priceChange';
import PictureRules from './components/picture_rules/picture_rules';
import ImgUpLoadBox from './components/picture_rules/imgUpload';
import PigSider from './components/picture_rules/pigNavBar';
import PersonNavBar from './components/personal_center/personNavbar';
import PersonalCenter from './components/personal_center/personal_center';
import MyShops from './components/personal_center/myShops';
import RegisterBox from './components/personal_center/register';
import LoginBox from './components/personal_center/login';

export default class Root extends React.Component{
  render() {
      return (
          <div>
              <Header/>
              <ServiceBox/>
              <Common/>
              {this.props.children}
              <Footer/>
          </div>
      )
  }
}
ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={Root}>
                <IndexRoute component={IndexPage}/>
                <Route path="/IndexPage" component={IndexPage}/>
                <Route path="/Merchant/:id" component={Merchant}/>
                <Route path="/GoodsNavBar" component={GoodsNavBar}>
                    <IndexRoute component={CmdManage}/>
                    <Route path="/CmdManage" component={CmdManage}/>
                    <Route path="/MyProduct" component={MyProduct}/>
                    <Route path="/ProductEntry/:id" component={ProductEntry}/>
                    <Route path="/PriceChangeBox" component={PriceChangeBox}/>
                </Route>
                <Route path="/ProduRulesSlider" component={ProduRulesSlider}>
                    <IndexRoute component={EntryRules}/>
                        <Route path="/EntryRules" component={EntryRules} key="a"/>
                        <Route path="/PriceRules" component={PriceRules} key="b"/>
                        <Route path="/OrderReview" component={OrderReview} key="c"/>
                </Route>
                <Route path="/PigSider" component={PigSider}>
                    <IndexRoute component={PictureRules}/>
                    <Route path="/imgRules" component={PictureRules}/>
                    <Route path="/imgUpLoad" component={ImgUpLoadBox}/>
                </Route>
                <Route path="/PersonNavBar" component={PersonNavBar}>
                    <IndexRoute component={PersonalCenter}/>
                    <Route path="/PersonalCenter" component={PersonalCenter}/>
                    <Route path="/Myshops" component={MyShops}/>
                </Route>
                <Route path="/login" component={LoginBox}/>
                <Route path="/register" component={RegisterBox}/>
            </Route>
        </Router>
    ),document.getElementById('mainContainer')
);
