import React from 'react';
import ReactDOM from 'react-dom';
import Game from "../game_template/porta/poppy/p0/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import t1e0 from './t0p0d1e0';
import t1i0 from './t0p0d2i0';
import Typical from 'react-typical';
import refresh from "../img/icons/refresh.svg";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy from '../img/personagens/poppy/sd/normal/poppy.png'




export default class t2_0 extends React.Component{
    render(){    


        function refreshPage(){
            window.location.reload();
        } 


        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/" component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/t0p0d1e0" component={t1e0} />
                        <Route path="/game/t0p0d2i0" component={t1i0} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game />
                <Link onClick={link} to="t0p0d1e0">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="t0p0d2i0">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <p className="texto">
                <br/>
                <br/>
                
                </p>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['Na tela vai aparecer um “Input” onde você tem que digitar o resultado do enigma ou a resposta a alguma pergunta,  você tem que digitar em minúsculo e sem caracteres especiais.',2500, 
                'Clique em próximo para continuar.', 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />

                <img src={poppy} className="load_b4"></img>


            </div>
        );
    }

}