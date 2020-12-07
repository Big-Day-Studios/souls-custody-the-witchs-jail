import React from 'react';
import ReactDOM from 'react-dom';
import Game from "../templates/porta/poppy/p0/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import t1e0 from './t0p0d1e0';
import t1i0 from './t0p0d2i0';
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy from '../img/personagens/poppy/normal/poppy.png'




export default class t2_0 extends React.Component{
    render(){    


        function refreshPage(){
            window.location.reload();
        } 


        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/t/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/t/t0p0d1e0" component={t1e0} />
                        <Route path="/game/en/t/t0p0d2i0" component={t1i0} />
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
                <Link onClick={link} to="t0p0d2i0">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <p className="texto">
                <br/>
                <br/>
                
                </p>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['An Input screen will appear, you have to type the result of the puzzle or the answer to a question. You must type it in lowercase and without special characters.',1600, 
                'Click Next to continue.', 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />

                <img src={poppy} className="load_b4"></img>


            </div>
        );
    }

}