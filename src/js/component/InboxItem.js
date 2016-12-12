import React from "react";
import Reactdom from "react-dom";
import PureRenderMixin from "react-addons-pure-render-mixin";
import {Link} from "react-router";

export default class InboxItem extends React.Component{
    constructor(props){
        super(props);

        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
    }


    sortbyDate(a,b){
        return a.time>b.time?-1:a.time<b.time?1:0;
    }
    messageSummary(conversations){
        var lastMessage=conversations.sort(this.sortbyDate)[0];
        return lastMessage.who+'said:"'+lastMessage.text+'"@'+lastMessage.time.toDateString();
    }
    
    render(){
         return(
            <tr> 
                <td><Link class="link" to={"/conversation/"+encodeURIComponent(this.props.index)}>{this.messageSummary(this.props.details.conversations)}</Link></td>
                <td>{this.props.index}</td>
                <td>{this.props.details.orders.sort(this.sortbyDate)[0].status}</td>
            </tr>
        );
    }   
}