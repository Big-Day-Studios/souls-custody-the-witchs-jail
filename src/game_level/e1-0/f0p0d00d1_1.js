import React from 'react';
import ReactDOM from 'react-dom';
import Game_dp from "../../game_template/deposito/poppy/soul-1/game_talk-zoom";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/tutorial.css";
import f0p0d00d1_0 from "./f0p0d00d1_0";
import Typical from 'react-typical';
import refresh from "../../img/icons/refresh.svg";
import f0p0d00d1_2 from "./f0p0d00d1_2";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';



export default class f0p0d00d1_1 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f0p0d00d1_0" component={f0p0d00d1_0} />
                        <Route path="/game/f0p0d00d1_2" component={f0p0d00d1_2} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_dp />
                <Link onClick={link} to="f0p0d00d1_0">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="f0p0d00d1_2">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">??????</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['.onogartet mu ed sonretni solugna sod amos.', 10 ]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}