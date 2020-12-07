
import React from 'react';
import ReactDOM from "react-dom";
import Choices from "../templates/porta/poppy/p0/game_choice";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "../css/tutorial.css";
import "../css/game_input.css";
import t3 from './t0p0d3';
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy from '../img/personagens/poppy/normal/poppy1.png'
import refresh from "../img/icons/refresh.svg";
import nailed from '../img/icons/nailed-it.png';
import failed from '../img/icons/failed-it.png';
import tryagain from '../img/icons/tryagain.png';
import next from '../img/icons/next.png';
import $ from 'jquery';


export default class t1i0 extends React.Component{
    render(){    

        function refreshPage(){
            window.location.reload();
        } 

        function link(){
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/t/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/t/t0p0d3" component={t3} />
                    </Switch>
                    <Redirect to="t0p0d3"></Redirect>
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
            var right_answer = "next";
            if (answer === right_answer){

                $("#nailed-it").removeClass("none").addClass("nailed")
            }else{
                $("#failed-it").removeClass("none").addClass("nailed")
            }
        }

        return(
            <div className="all_game">
                <Choices />
                <div id="nailed-it" className="none">                
                    <img src={nailed} style={{"borderRadius": "30px", "height": "266px", "width": "400px"}}/>
                    <img src={next} onClick={link} className="next-button"/>
                </div>
                <div id="failed-it" className="none">                
                    <img src={failed} style={{"borderRadius": "30px", "height": "266px", "width": "400px"}}/>
                    <img src={tryagain} onClick={Failed} className="again-button"/>
                </div>
                <h1 className="en_question_1-1">Type "next" to continue</h1>
                <form id="form1" methods="" name="form1" onSubmit={right} on action="#">
                    <input type="text" id="answer" name="answer" className="answer" placeholder="Digite aqui" />
                    <input type="button" onClick={right} className="send" value="Send"/>
                </form>
                <img src={poppy} className="load_b4"></img>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
            </div>
        );
    }
}