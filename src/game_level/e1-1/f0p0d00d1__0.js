import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../../templates/escada/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/game_index.css";
import Typical from '../../typical';
import refresh from "../../img/icons/refresh.svg";
import f0p0d00d1__1 from "./f0p0d00d1__1";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';
import Game_up from "../../img/cenarios/cima.png";



export default class f0p0d00d1__0 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d00d1__1" component={f0p0d00d1__1} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es/>
                <div id="b1" className="Back_">
                    <p className="disabled">Voltar</p>
                </div>
                <div className="bar_game"/>
                <Link onClick={link} to="f0p0d00d1__1">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['Acho que é melhor eu subir essa escada.', 1300]}
                loop={1}
                wrapper="p"
                className="texto"
                />
                <img src={Game_up} className="load_b4"></img>
            </div>
        );
    }
}