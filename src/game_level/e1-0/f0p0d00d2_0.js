import React from 'react';
import ReactDOM from 'react-dom';
import Choices_es from "../../game_template/escada/game_choices";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/game_choice.css";
import f0p0d00d2_1 from "./f0p0d00d2_1";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';



export default class f0p0d00d2_0 extends React.Component{
    

    render(){
    
        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f0p0d00d2_1" component={f0p0d00d2_1} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices_es/>
                <h1 className= "question_1U">O que vai fazer?</h1>
                <Link onClick={link} to="f0p0d00d2_1">
                    <div className="choice_U">
                        <p className="choice_1t">Subir a escada</p>
                    </div>
                </Link>
            </div>
        );
    }
}