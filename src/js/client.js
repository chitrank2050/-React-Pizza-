import React from "react";
import Reactdom from "react-dom";
import {Route,browserHistory,Router,Link} from "react-router";

import "../css/main.css";

import App from "./component/App";
import ConversationPane from "./component/ConversationPane";


Reactdom.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/conversation/:human" component={ConversationPane}></Route>
        </Route>
    </Router>,document.getElementById("main"));
