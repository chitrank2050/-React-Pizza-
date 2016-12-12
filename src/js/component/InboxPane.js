import React from "react";
import Reactdom from "react-dom";

import InboxItem from "./InboxItem";

export default class InboxPane extends React.Component{
    render(){
        return(
            <div id="inbox-pane" class="coloumn">
                 <div class="top_menu">
                        <div class="buttons">
                            <div class="button close"></div>
                            <div class="button minimize"></div>
                            <div class="button maximize"></div>
                         </div>
                    <div class="title">Inbox</div>
                </div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Chat Received</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.props.humans).map((human)=>{
                            return <InboxItem key={human} index={human} details={this.props.humans[human]}/>;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}