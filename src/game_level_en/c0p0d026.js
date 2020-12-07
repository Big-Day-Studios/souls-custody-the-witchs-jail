import React from 'react';
import ReactDOM from 'react-dom';
import Game_up from "../templates/cutscene/1_talk";
import {Redirect, Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import en_f0p0d027 from "./f0p0d027";
import SorrowOfaLonelyGirl from '../audio/pages/SorrowOfaLonelyGirl';
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import $ from 'jquery';



export default class f0p0d026 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        }

        function f() {
            var fade = $(".all_game_unique")
            $(fade).attr("id", "fade-out");
                      
            link();
        }

        function link(){

            setTimeout(function(){
                ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Route path="/game/en/c/" exact={false} component={SorrowOfaLonelyGirl} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d027" component={en_f0p0d027} />
                    </Switch>
                    <Redirect to="/game/en/f/f0p0d027"/>
                </Router>,
                document.getElementById('root')
            ) }, 3000)
          }

        return(
            <div className= "all_game">
                <div className="background-black"></div>
                <div className= "all_game_unique">
                    <Game_up />
                    <div id="b1" className="Back_en">
                        <p className="disabled">Back</p>
                    </div>
                    <div className="en_bar_game"/>
                    <Link onClick={f} >
                        <div id="n1" className="Next_en">
                            <p className="next">Next</p>
                        </div>
                    </Link>
                    <h1 className="rebecca">Rebecca</h1>
                    <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                    <Typical
                    steps={['(Where I am?)', 1300, '(Was it all a dream?)', 1300, '(And who are these people...?)']}
                    loop={1}
                    wrapper="p"
                    className="texto-italic"
                    />
                </div>
            </div>
        );
    }
}