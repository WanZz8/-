import React from 'react';
import ReactDOM from 'react-dom';
class CmdManage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="page">
                    <div className="padding_15"></div>
                    <div>
                        <div className="img" ref="img">
                            <img src={require('../../../images/405.png')} alt=""/>
                        </div>
                        <h1 className="page-content">
                            产品库近期完善中！
                        </h1>
                    </div>
                    <div className="padding_15"></div>
                </div>
            </div>
        )
    }
}
export default CmdManage;
