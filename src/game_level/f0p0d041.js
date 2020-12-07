import React from 'react';
import ReactDOM from "react-dom";
import Game_es from "../templates/acogue/soul/game_item";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "../css/tutorial.css";
import "../css/game_input.css";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import louis from '../img/personagens/louis/louis2.png'
import f0p0d042 from './f0p0d042'
import refresh from "../img/icons/refresh.svg";
import acertou from '../img/icons/acertou.png';
import errou from '../img/icons/errou.png';
import denovo from '../img/icons/tentenovamente.png';
import continuar from '../img/icons/continuar.png';
import $ from 'jquery';


export default class f0p0d005 extends React.Component{
    render(){    

        function refreshPage(){
            window.location.reload();
        } 

        function link(){
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d042" component={f0p0d042} />
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
                <Game_es/>
                <div id="nailed-it" className="none">                
                    <img src={acertou} style={{"borderRadius": "30px", "height": "266px", "width": "400px"}}/>
                    <img src={continuar} onClick={link} className="continuar-button"/>
                </div>
                <div id="failed-it" className="none">                
                    <img src={errou} style={{"borderRadius": "30px", "height": "266px", "width": "400px"}}/>
                    <img src={denovo} onClick={Failed} className="denovo-button"/>
                </div>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <h1 className="input_tittle">Digite a resposta do enigma</h1>
                <form id="form1" name="form1" action="#" onSubmit={right}>
                    <input type="text" id="answer" name="answer" className="answer" placeholder="**" />
                    <input type="submit" className="send" value="Enviar"/>
                </form>
                <img src={louis} className="load_b4"></img>

            </div>
        );
    }
}
