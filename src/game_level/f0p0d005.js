import React from 'react';
import ReactDOM from "react-dom";
import Game_es from "../game_template/deposito/poppy/soul-1/game_box";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "../css/tutorial.css";
import "../css/game_input.css";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy from '../img/personagens/poppy/sd/normal/poppy1.png'
import f0p0d006 from './f0p0d006'

export default class f0p0d005 extends React.Component{
    render(){    


        function right(){
            var answer = document.getElementById('answer').value;
            var right_answer = "360";
            if (answer === right_answer){
                alert("Acertou");
                ReactDOM.render(
                    <Router>
                        <Route path="/game/" component={TheBackgroundScreams} />
                        <Switch>
                            <Route path="/game/f0p0d006" component={f0p0d006} />
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