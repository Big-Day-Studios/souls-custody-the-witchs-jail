import React from 'react';
import ReactDOM from "react-dom";
import Game_es from "../templates/deposito/poppy/soul-1/game_box";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "../css/tutorial.css";
import "../css/game_input.css";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy from '../img/personagens/poppy/normal/poppy.png'
import f0p0d006 from './f0p0d006'
import refresh from "../img/icons/refresh.svg";

export default class f0p0d005 extends React.Component{
    render(){    

        function refreshPage(){
            window.location.reload();
        } 

        function right(){
            var answer = document.getElementById('answer').value;
            var right_answer = "360";
            if (answer === right_answer){
                alert("Acertou");
                ReactDOM.render(
                    <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                        <Switch>
                            <Route path="/game/f/f0p0d006" component={f0p0d006} />
                        </Switch>
                        <Redirect to="f0p0d006"></Redirect>
                    </Router>,
                    document.getElementById('root')
                );
            }else{
                alert("errou");
            }
        }

        return(
            <div className="all_game">
                <Game_es/>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <h1 className="input_tittle">Digite o código do cadeado</h1>
                <form name="form1" action="#" onSubmit={right}>
                    <input type="text" id="answer" name="answer" className="answer" placeholder="***" />
                    <input type="submit" className="send" value="Enviar"/>
                </form>
                <img src={poppy} className="load_b4"></img>

            </div>
        );
    }
}