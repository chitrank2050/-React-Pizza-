import React from "react";
import Reactdom from "react-dom";

import sample from "../sample-data";

import InboxPane from "./InboxPane";
import StorePane from "./StorePane";

export default class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
            "humans":{},  
            "stores":{},  
            "conversation":{}        
            
        }

    }
    loadSampleData(){
        this.setState({humans:sample.humans,stores:sample.stores});
    }
    //User navigates to a /conversation/ 
    componentWillMount(){
        if("human" in this.props.params){
            this.loadSampleData();
            }
    } 
    render(){
        var children=this.props.children?this.props.children:"Select a conversation from Inbox";
        var Style=children?{ marginTop:"10px", textAlign:"center", fontSize:"140%", fontWeight:"Light"}:{};
        return(
            <div>
                <div class="row">
                    <button class="btn btn-primary" onClick={this.loadSampleData.bind(this)}>Load Sample Data</button>
                </div>
                <div class="page row">
                    <div class="col-md-12">
                        <div class="col-md-4">
                            <InboxPane humans={this.state.humans}/>
                        </div>
                        <div class="conversation-pane col-md-4">
                            <div class="top_menu">
                                <div class="buttons">
                                    <div class="button close"></div>
                                    <div class="button minimize"></div>
                                    <div class="button maximize"></div>
                                </div>
                                <div class="title">Conversation</div>
                            </div>
                            <div class="MSG" style={Style}>
                                {children}
                            </div>
                        </div>
                        <div class="col-md-4">
                            <StorePane stores={this.state.stores}/>
                        </div>
                    </div>
                    </div>
            </div>
            
           
            
        );
    }
}