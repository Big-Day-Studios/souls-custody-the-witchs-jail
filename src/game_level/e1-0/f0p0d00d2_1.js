import React from 'react';
import ReactDOM from 'react-dom';
import Game_dp from "../../templates/deposito/poppy/soul-1/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/game_index.css";
import f0p0d00d2_2 from "./f0p0d00d2_2";
import Typical from 'react-typical';
import refresh from "../../img/icons/refresh.svg";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';
import background from "../../img/cenarios/cima.png"


export default class f0p0d00d2_1 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d00d2_2" component={f0p0d00d2_2} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_dp/>
                <div id="b1" className="Back_">
                    <p className="disabled">Voltar</p>
                </div>
                <div className="bar_game"/>
                <Link onClick={link} to="f0p0d00d2_2">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['Acho que é melhor eu subir aquela escada.', 1000]}
                loop={1}
                wrapper="p"
                className="texto"
                />

                <img class="load_b4" src={background} />

            </div>
        );
    }
}