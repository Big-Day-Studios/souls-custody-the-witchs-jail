import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect, Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "./css/main.css";
import Splash from "./splash"




export default class e404 extends React.Component{
 
    constructor(props){
        super(props)
        this.state = {
            count: 5
        }
    }

    render(){
        const{count} = this.state;


            setTimeout(function(){
                ReactDOM.render(
                <Router>
                    <Switch>
                    <Route path="/" component={Splash} />
                    </Switch>
                    <Redirect to="/" component={Splash}/>
                </Router>,
                document.getElementById('root')
            ) }, 5000)

        const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

        return(
            <div className= "all_game">
                <div className="background-black">
                <h1 className="big">404: Page Not Found</h1>
                    <div className="centralizeTiny">
                        <h1 className="tiny">Redirecting you in {count}s</h1>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        this.myInterval = setInterval(() => {
            this.setState(prevState =>({
                count: prevState.count - 1
            }))
        },1300)

    }
}
