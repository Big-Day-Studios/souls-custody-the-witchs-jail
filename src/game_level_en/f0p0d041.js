import React from 'react';
import ReactDOM from "react-dom";
import Game_es from "../templates/acogue/soul/game_item";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "../css/tutorial.css";
import "../css/game_input.css";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy from '../img/personagens/louis/almasemvitrola.png'
import en_f0p0d042 from './f0p0d042'
import refresh from "../img/icons/refresh.svg";
import nailed from '../img/icons/nailed-it.png';
import failed from '../img/icons/failed-it.png';
import next from '../img/icons/next.png';
import $ from 'jquery';
import tryagain from '../img/icons/tryagain.png';


export default class f0p0d005 extends React.Component{
    render(){    

        function refreshPage(){
            window.location.reload();
        } 

        function link(){
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d042" component={en_f0p0d042} />
                    </Switch>
                    <Redirect to="f0p0d042"></Redirect>
                </Router>,
                document.getElementById('root')
            );
        }

        $(document).ready(function() {
            $(document).on('submit', '#form1', function() {
              // do your things
              return false;
             });
        });

        function Failed(){
            $("#failed-it").removeClass("nailed").addClass("none")
        }
        function right(){
            var answer = document.getElementById('answer').value;
            var right_answer = "25";
            if (answer === right_answer){

                $("#nailed-it").removeClass("none").addClass("nailed")
            }else{
                $("#failed-it").removeClass("none").addClass("nailed")
            }
        }

        return(
            <div className="all_game">
                <Game_es />
                <div id="nailed-it" className="none">                
                    <img src={nailed} style={{"borderRadius": "30px"}}/>
                    <img src={next} onClick={link} className="next-button"/>
                </div>
                <div id="failed-it" className="none">                
                    <img src={failed} style={{"borderRadius": "30px"}}/>
                    <img src={tryagain} onClick={Failed} className="again-button"/>
                </div>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <h1 className="input_tittle">Enter the puzzle<br/> answer</h1>
                <form id="form1" name="form1" action="#" onSubmit={right}>
                    <input type="text" id="answer" name="answer" className="answer" placeholder="**" />
                    <input type="button" className="send" onClick={right} value="Send"/>
                </form>
                <img src={poppy} className="load_b4"></img>

            </div>
        );
    }
}
