'user strict';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class MyProduct extends React.Component{
    render(){
        return(
            <div>
                <div className="page">
                    <table className="table">
                        <thead className="thead">
                        <tr>
                            <th>编号</th>
                            <th>名称</th>
                            <th>标题</th>
                            <th>淘宝价</th>
                            <th>优惠幅度</th>
                            <th>采购链接</th>
                            <th>所属类目</th>
                            <th>审核状态</th>
                            <th>审核备注</th>
                            <th>操作</th>
                            <th>选购次数</th>
                            <th>提交时间</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}
export default MyProduct;