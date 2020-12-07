import React from 'react';
import ReactDOM from 'react-dom';
import Box from "../templates/deposito_en/poppy/soul-1/game_box";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import en_f0p0d004 from "./f0p0d004";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import caixa from '../img/itens/caixafechada.png'


export default class f0p0d003 extends React.Component{
 
    

    render(){
    
        
        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d004" component={en_f0p0d004} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <img src={caixa} className="box-closed"/>

                <Box/>
                <Link onClick={link} to="f0p0d004">
                    <div className="item-next">
                        <p className="item-next-text">Next</p>
                    </div>
                </Link>
            </div>
        );
    }
}