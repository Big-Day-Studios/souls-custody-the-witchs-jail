import React from 'react';
import ReactDOM from 'react-dom';
import Game_dp from "../../templates/deposito_en/poppy/soul-1/game_talk-zoom";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/game_index.css";
import en_f0p0d00d1__2 from "./f0p0d00d1__2";
import Typical from '../../typical';
import refresh from "../../img/icons/refresh.svg";
import en_f0p0d00d1__4 from "./f0p0d00d1__4";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';



export default class f0p0d00d1__3 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d00d1__2" component={en_f0p0d00d1__2} />
                        <Route path="/game/en/f/f0p0d00d1__4" component={en_f0p0d00d1__4} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_dp />
                <Link onClick={link} to="f0p0d00d1__2">
                    <div id="b1" className="Back_en">
                        <p className="back_">Back</p>
                    </div>
                </Link>
                <div className="en_bar_game"/>
                <Link onClick={link} to="f0p0d00d1__4">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="poppy">??????</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['▂▃▄▅▆▇█▓▒░ ̳͙͇̣͔n̤̖͚͖̭̯͇̳o̖r̘̥̣̫̺ḍ̦̻e̱̱̭̻̖̠h͎̳̝̲̞a͇̗̭͚̙͍̬̠ͅr̪̠͙̟̲̹t̻͎̦̫̘̘e̱̭͍̺t̤̤̦̤͚̘ ̤̲̩͔̰a̮͔̤̠̟̪ ̱̝f̞͈͓͉̗̰o̗ ͎̝͉̹̲͓s̲̩̹͖̜̟̺e̥̖̖͚̘̲l̥̜̰͓g͓̭͈̝͚n̯͙̯̖a͈̤͙͇͔̙̩̤ ̮̺͇͍̗l͇̬̺̤̭̺̹a͕̥͔͇̝̲̜̝n̳̯͔̼̠r̘̳͈̜̠̳e̺̥͖̬t̰̤̘n̬̖̪͔͔i̻̭͍̺̯̜ ̩̙̲͍͇̖̦͇e̮̱̘̬h̖t̼̦ ̻̖̺͇̻͙̰͎f̮̙̘o͚̯̙̺͕͎̳̯ͅ ̠̳̻̼̗̱͚m̪̳͕̣̘̭̻u̖̺̥͈̤̺̗ͅs̩░▒▓█▇▆▅▄▃▂', 10 ]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}