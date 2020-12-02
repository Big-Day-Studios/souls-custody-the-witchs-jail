import React from 'react';
import ReactDOM from 'react-dom';
import Game_dp from "../../templates/deposito/poppy/soul-1/game_talk-zoom";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/game_index.css";
import f0p0d00d2_2 from "./f0p0d00d2_2";
import Typical from '../../typical';
import refresh from "../../img/icons/refresh.svg";
import f0p0d00d2_4 from "../e1-1/f0p0d00d1__5";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';



export default class f0p0d00d2_3 extends React.Component{
 
    

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
                        <Route path="/game/f/f0p0d00d2_4" component={f0p0d00d2_4} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_dp />
                <Link onClick={link} to="f0p0d00d2_2">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="f0p0d00d2_4">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">??????</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['▂▃▄▅▆▇█▓▒░on̰̟̾̄ogâ͎̹̐ṙͣt̜͚̰et́̋ͪ ̦͖͒ͩmu ͎̇ed͎̤̓͊ ̝s͂ö̦̬́ͥnr̭͚̹ḙ̓t̘̩̖̾ͦ̄n̔i̜̳̤ ̟ͣs̲̱͎̋͋͊õ̽l͐͐uͭ̅ͮǧnḁ̹̠̓ͪ̉ ̮s͚̞̃ͣod̖ ͑a̖̭̓̈m̥͛o̺͓̊ͮs̬̖.░▒▓█▇▆▅▄▃▂', 10 ]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}