import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";


export default class Message extends React.Component{
    constructor(props){
    	super(props);

    	this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){ 
            console.log(this.props);
            var humanBot=this.props.who!='human'?'Bot':this.props.name;
            var iYou=this.props.who!='human'?"fa fa-circle you":"fa fa-circle me";
            var liClass=this.props.who!='human'?"":"clearfix";
            var iYouSpan=this.props.who!='human'?"message-data-name float-left you":"message-data-name float-right me";
            var textWrapper=this.props.who!='human'?"message you-message":"message me-message float-right";
            return(
                <li class={liClass} id={this.props.who}>
                    <div class="message-data">
                        <span class={iYouSpan}><i class={iYou}></i>{humanBot}</span>
                    </div>
                    <div class={textWrapper}>
                         <span class="text_wrapper">{this.props.text}</span>
                    </div>
                </li>
            );
    }
}
