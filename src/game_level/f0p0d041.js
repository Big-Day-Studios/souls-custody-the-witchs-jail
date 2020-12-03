import React from 'react';
import ReactDOM from "react-dom";
import Game_es from "../templates/acogue/soul/game_item";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "../css/tutorial.css";
import "../css/game_input.css";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy from '../img/personagens/louis/almasemvitrola.png'
import f0p0d042 from './f0p0d042'
import refresh from "../img/icons/refresh.svg";

export default class f0p0d041 extends React.Component{
    render(){    

        function refreshPage(){
            window.location.reload();
        } 

        function right(){
            var answer = document.getElementById('answer').value;
            var right_answer = "25";
            if (answer === right_answer){
                alert("Acertou");
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
            }else{
                alert("errou");
            }
        }

        return(
            <div className="all_game">
                <Game_es/>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <h1 className="input_tittle">Digite a resposta do enigma</h1>
                <form name="form1" action="#" onSubmit={right}>
                    <input type="text" id="answer" name="answer" className="answer" placeholder="**" />
                    <input type="submit" className="send" value="Enviar"/>
                </form>
                <img src={poppy} className="load_b4"></img>

            </div>
        );
    }
}
