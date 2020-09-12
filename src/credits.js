import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import back from './img/back.svg';
import logo from './img/logo-min.png';
import bds from './img/logo_bds.png';
import bar from './img/vertical_bar.svg';
import './css/var.css';
import './css/main.css';
import './css/credits.css';


function About(){
    return(    
    <div className="all">
        <div id="all_credits" className="all_credits">
            <div className="loading_container">
                <p className="loading">carregando</p>
            </div>
            <Link to="/menu"><img src={back} className="back" alt="voltar"/></Link>
            <div className="logo_container">
                <img src={logo}  className="logo_game" alt="logo do jogo"/>
                <img src={bds} className="logo_bds" alt="logo bds"/>
            </div>
            <div className="information">
                <h1 className="edu_h">Objetivo de aprendizagem</h1>
                <p className="edu_p">Estimular o raciocínio lógico e matemático do 
                    jogador com enigmas divertidos e desafiadores. </p>
                <h1 className="sinopse_h">Sinópse do jogo</h1>
                <p className="sinopse_p">Rebecca Roberts, uma adolescente de 16 anos, acorda em um lugar desconhecido.
                    Desprovida de suas memórias, ela explora o local, onde encontra diversas almas corrompidas.
                    Decidida a sair desse lugar e recuperar suas memórias, a jovem enfrenta enigmas desafiadores
                    para conquistar a liberdade das almas e chegar até a pessoa que pode tirar-la de lá.</p>
                <img alt="this is a bar" src={bar} className="bar"/>
                <h1 className="orientacao_h">Orientação</h1>
                <p className="orientacao_p">Prof. Robson Vanderlei Alves de Andrade<br></br>
                    Prof. Diego Marques de Carvalho<br></br>
                    Prof. Marcelo Barbosa</p>
                <h1 className="dev_h">Desenvolvimento</h1>
                <p className="dev_p">Felipe (Haru) Marcoulakis de Borthole<br></br>
                    Arthur Monteiro Gois dos Santos<br></br>
                    Juan Pablo Mendes Caetano<br></br>
                    Isabela Dias Cerqueira<br></br>
                    Bianca Yasuda Leoni Jordão</p>
            </div>
        </div>
    </div>
)
}


export default About;