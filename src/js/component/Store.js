import React from "react";
import Reactdom from "react-dom";
import PureRenderMixin from "react-addons-pure-render-mixin";

import Confirmed from "../../assets/order-confirmed.png";
import Delivered from "../../assets/order-delivered.png";
import Oven from "../../assets/order-oven.png";

export default class Store extends React.Component{
    constructor(props){
        super(props);

        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    getCount(status){
        return this.props.details.orders.filter((n)=>{
            return n.status===status
        }).length;
    }
    render(){
             return(
                <tr>
                    <td><p class="index">{this.props.index}</p></td>
                    <td><span class="confirmed"><img src={Confirmed}/>{this.getCount("Confirmed")}</span></td>
                    <td><span class="oven"><img src={Oven}/>{this.getCount("In The Oven")}</span></td>
                    <td><span class="delivered"><img src={Delivered}/>{this.getCount("Delivered")}</span></td>
                </tr>
            );
    }
}