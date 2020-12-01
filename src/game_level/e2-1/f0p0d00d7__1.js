import React from 'react';
import ReactDOM from 'react-dom';
import Choices_dp from "../../templates/deposito/poppy/p2/game_choice";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/game_choice.css";
import f0p0d00d7__2 from "./f0p0d00d7__2";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';



export default class f0p0d00d7__1 extends React.Component{
    

    render(){
    
        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d00d7__2" component={f0p0d00d7__2} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices_dp/>
                <h1 className= "question_2U">O que vai perguntar?</h1>
                <Link onClick={link} to="f0p0d00d7__2">
                    <div className="choice_U">
                        <p className="choice_1t">Quem é você?</p>
                    </div>
                </Link>
            </div>
        );
    }
}