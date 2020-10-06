import React from 'react';
import ReactDOM from 'react-dom';
import Game from "../game_template/porta/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import Menu from "../menu";
import t1 from "./t0p0d1";

export default class t0 extends React.Component{
 
    

    render(){
        

        function typeWriter(elemento) {
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            textoArray.forEach((letra, i) => {
              setTimeout(() => elemento.innerHTML += letra, 75 * i);
            });        
        }
        
          const titulo = document.getElementsByClassName('texto');
          console.log(titulo);

          typeWriter(titulo);
          


          
        function link() {
            ReactDOM.render(
                <Router>
                    <Switch>
                        <Route path="/menu" component={Menu} />
                        <Route path="/game/t0p0d1" component={t1} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all">
                <Game />
                <Link onClick={link} to="/menu">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="t0p0d1">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <p className="texto" >
                    Olá, eu sou a Poppy, você vai me conhecer mais pra frente. <br/>
                    Clique em próximo para continuar.
                </p>

            </div>
        );
    }
}