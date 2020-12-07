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
import acertou from '../img/icons/acertou.png';
import errou from '../img/icons/errou.png';
import denovo from '../img/icons/tentenovamente.png';
import continuar from '../img/icons/continuar.png';
import $ from 'jquery';


export default class t1i0 extends React.Component{
    render(){    

        function refreshPage(){
            window.location.reload();
        } 

        function link(){
            ReactDOM.render(
                <Router>
                    <Route path="/game/t/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/t/t0p0d3" component={t3} />
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
            var right_answer = "continuar";
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
                    <img src={acertou} style={{"borderRadius": "30px"}}/>
                    <img src={continuar} onClick={link} className="continuar-button"/>
                </div>
                <div id="failed-it" className="none">                
                    <img src={errou} style={{"borderRadius": "30px"}}/>
                    <img src={denovo} onClick={Failed} className="denovo-button"/>
                </div>
                <h1 className="input_tittle">Digite “continuar” para<br/>prosseguir</h1>
                <form id="form1" name="form1" action="#" onSubmit={right}>
                    <input type="text" id="answer" name="answer" className="answer" placeholder="Digite aqui" />
                    <input type="submit" className="send" value="Enviar"/>
                </form>
                <img src={poppy} className="load_b4"></img>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>

            </div>
        );
    }
}