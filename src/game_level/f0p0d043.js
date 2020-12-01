import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from 'react-typical';
import Menu from "../menu";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import sign from '../img/logos/sign_standard.png'

export default class f0p0d039 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/menu" component={Menu} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
            <div className="background-black">
                <Typical
                steps={['Continua...']}
                loop={1}
                wrapper="p"
                className="continua"
                />
            </div> 
            <Link onClick={link} to="/menu">
                <div className="item-next">
                    <p className="item-next-text">Menu</p>
                </div>
            </Link>
            <img className="load_b4" src={sign} />
            </div>
        );
    }
}