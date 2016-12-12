import React from "react";
import Reactdom from "react-dom";


import Message from "./Message";
import sample from "../sample-data";

export default class ConversationPane extends React.Component{
    loadConversationData(human){
         this.setState({
            conversation: sample.humans[human].conversations });
    }
    //handle when user navigates / to /conversation/:human
    componentWillMount(){
        this.loadConversationData(this.props.params.human);

    }
    //handle when user navigates to between users
    componentWillReceiveProps(nextProps)
    {
        this.loadConversationData(nextProps.params.human);
    }
    render(){ 
        return(
                <div id="conversation-pane">
                    <div class="chat">
                        <div class="chat-history">
                            <ul class="chat-ul">
                            {this.state.conversation.map((val)=>
                                <Message key={val.time.getTime()} who={val.who} name={this.props.params.human} text={val.text}/>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            );
    }    
}