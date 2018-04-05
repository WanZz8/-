import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { Table, Button, Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

var defaultClass= {
    border: '1px solid #ccc',
    color: '#888',
    borderRadius: '3px',
    padding: '5px',
    outline: 'none',
    width:'366px',
    boxShadow: '0 0 5px #888',
    transition: 'all .15s linear',
    boxShadow:'inset 0 1px 1px rgba(0, 0, 0, .075)',
}
var active={
    color: '#888',
    borderRadius: '3px',
    padding: '5px',
    outline: 'none',
    width:'366px',
    boxShadow: '0 0 5px #888',
    transition: 'all .15s linear',
    boxShadow:'inset 0 1px 1px rgba(0, 0, 0, .075)',
    border: '1px solid #88f',
    boxShadow: '0 0 5px #88f'
}
const columns = [
    {
    title: '商品编号',
    dataIndex: 'name',
    },
    {
    title: '商品标题',
    dataIndex: 'age',
    },
    {
    title: '新淘宝售价',
    dataIndex: 'address',
    },
    {
        title: '新优惠幅度',
        dataIndex: 'go',
    },
    {
        title: '申请时淘宝售价',
        dataIndex: 'ruby',
    },
    {
        title: '申请时优惠幅度',
        dataIndex: 'nan',
    },
    {
        title: '审核状态',
        dataIndex: 'nv',
    },
    {
        title: '提交时间',
        dataIndex: 'cc',
    }
];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
        go: `London, Park Lane no. ${i}`,
        ruby: `London, Park Lane no. ${i}`,
        nan: `London, Park Lane no. ${i}`,
        nv: `London, Park Lane no. ${i}`,
        cc: `London, Park Lane no. ${i}`,
    });
}

class App extends React.Component {
    state = {
        selectedRowKeys: [],  // Check here to configure the default column
        loading: false,
    };
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        重新加载
                    </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}

var container={
    backgroundColor: '#FFFFFF',
    width: '1188px',
    margin: '0px auto',
    background:'#ffffff'
}
//class PriceChangeBox extends React.Component {
//    constructor(props){
//        super(props)
//        this.state = {
//            tabs:[
//                {tabName:'查询历史改价',id:'1'},
//                {tabName:'申请价格改变',id:'2'},
//            ],
//            currentIndex:1,
//        }
//    }
//    tabChoiced(id){
//        this.setState({currentIndex:id})
//    }
//    render() {
//        let _this=this;
//        var isBox1Show=this.state.currentIndex==1 ? 'block' : 'none';
//        var isBox2Show=this.state.currentIndex==2 ? 'block' : 'none';
//        let tabList=this.state.tabs.map(function(res,index){
//            var tabStyle=res.id==this.state.currentIndex?'tab_title active':'tab_title'
//            return <li key={index}  onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle} className={tabStyle}>{res.tabName}
//            </li>
//        }.bind(_this))
//        return (
//            <div className="container">
//                <ul className="subNavWrap">
//                    {tabList}
//                </ul>
//                <div className="tab_item_wrap"　style={container}>
//                    <div style={{"display":isBox1Show}} >
//                        <App/>
//                    </div>
//                    <div style={{"display":isBox2Show}}>
//                        <ApplyChangePriceBox/>
//                    </div>
//                </div>
//            </div>
//        )
//    }
//}
class PriceChangeBox extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Tabs defaultActiveKey="2">
                <TabPane tab={<span><Icon type="contacts" />查询历史改价</span>} key="1">
                   <App/>
                </TabPane>
                <TabPane tab={<span><Icon type="aliwangwang-o" />申请价格改变</span>} key="2">
                    <ApplyChangePriceBox/>
                </TabPane>
            </Tabs>
        )
    }
}
class ApplyChangePriceBox extends React.Component{
    render(){
        return(
            <div>
                    <div className="inputgroup">
                        <span className="goodsChange">需改价商品：</span><InputBox/>
                    </div>
                    <div className="inputgroup">
                        <span className="goodsChange">新淘宝售价：</span><InputBox/>
                    </div>
                    <div className="inputgroup">
                        <span className="goodsChange">新优惠幅度：</span><InputBox/>
                    </div>
                <div className="inputgroup">
                     <span className="goodsChange"></span>
                    <a className="btn">提交</a>
                    <a className="btn">清空</a>
                </div>
            </div>
        )
    }
}
class InputBox extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            liked:defaultClass,
        }
    }
    handleFocus(e){
        this.setState({liked:active
        });
    }
    hanleBlur(e){
            this.setState({
                liked:defaultClass,

            })
        }
    render(){
        let style = this.state.liked;
        return (

                <input type="text" style={style} className="txt1" onFocus={(e)=>this.handleFocus(e)}
                       onBlur={(e)=>this.hanleBlur(e)}/>

        )
    }
}
export default PriceChangeBox;