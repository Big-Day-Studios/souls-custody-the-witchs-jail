import React from 'react';
import ReactDOM from 'react-dom';
import Game from "../templates/porta/poppy/p2/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import t2e1 from './t0p0d2e1';
import t1e0 from './t0p0d1e0';
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class t2_1 extends React.Component{
    render(){    


        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/t/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/t/t0p0d2e1" component={t2e1} />
                        <Route path="/game/en/t/t0p0d1e0" component={t1e0} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game />
                <Link onClick={link} to="t0p0d1e0">
                    <div id="b1" className="Back_en">
                        <p className="back_">Back</p>
                    </div>
                </Link>
                <div className="en_bar_game"/>
                <Link  onClick={link} to="t0p0d2e1">
                    <div  id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['Ok, you just click on the Next button to see the next part of the story.',1600, 
                'And then, when there are decisions to be made, you will choose one of the question options. And because of that you can build your own story.', 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />

            </div>
        );
    }
}