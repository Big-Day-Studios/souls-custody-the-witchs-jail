import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../../templates/deposito/poppy/p1/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/tutorial.css";
import Typical from 'react-typical';
import refresh from "../../img/icons/refresh.svg";
import f0p0d008 from "../f0p0d008";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';



export default class f0p0d00d7_2 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d008" component={f0p0d008} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <div id="b1" className="Back_">
                    <p className="disabled">Voltar</p>
                </div>
                <div className="bar_game"/>
                <Link onClick={link} to="f0p0d008">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['Eu sou aquele bicho que tava aqui com você.', 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}