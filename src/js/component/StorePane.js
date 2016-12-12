import React from "react";
import Reactdom from "react-dom";

import Store from "./Store";

export default class StorePane extends React.Component{
    
    render(){
        return(
                <div id="stores-pane">
                    <div class="top_menu">
                        <div class="buttons">
                            <div class="button close"></div>
                            <div class="button minimize"></div>
                            <div class="button maximize"></div>
                        </div>
                        <div class="title">Order Status</div>
                    </div>
                    <table class="table table-hover table-borderless">
                        <tbody>
                        {Object.keys(this.props.stores).map((store)=>{
                            return <Store key={store} index={store} details={this.props.stores[store]}/>
                        })}
                        </tbody>
                    </table>
                </div>
            );
    }
}