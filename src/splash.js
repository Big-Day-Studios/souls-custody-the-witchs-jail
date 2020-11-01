import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Switch, Redirect} from "react-router-dom";
import splash from './img/splash.png';
import bds from './img/logo_bds.png';
import logo from './img/logo-min.png';
import $ from 'jquery';
import './css/var.css';
import './css/main.css';
import './css/splash.css';
import sign from './img/sign.png'
import Menu from './menu';


export default class App extends React.Component{
    render(){
        return (
                <div className="all_game">
                    <div className="splash">
                        <img className="splash_jrm" src={splash} alt="splash com logos da ETEC JRM, CPS."/>
                        <img src="img/load.png" alt="Unknown" className="load"/>
                    </div>
                    <div id='splash_2' className="splash_2">       
                            <img src={bds} className="logo_bds_splash" alt="logo bds"/>
                            <h1 className="bds_presets">Big Day Studios<br></br>presents</h1>
                    </div>
                    <div id="game_name" onLoad={s1} className="game_name">
                        <img src={logo} alt="Soul Custody: The Witch Jail" className="logo_start"/>
                        <h1 className="start_press">Pressione alguma tecla para começar</h1>
                    </div>
                    <div className="loading_container">
                        <p className="loading">carregando</p>
                    </div>
                    <img src={sign} className="load_b4"></img>
                </div>
        );

    function s1(){


        var splash_2 = $("#splash_2");
        var game_name = $("#game_name");

        setTimeout(function () {
            $('.splash').addClass('display-none');
        }, 5000); // O valor é representado em milissegundos.
        setTimeout(function () {
            $(splash_2).removeClass('splash_2').addClass('splash_2_');
        }, 6000); // O valor é representado em milissegundos.
        setTimeout(function () {
            $(splash_2).removeClass('splash_2_').addClass('splash_2');
        }, 11000); // O valor é representado em milissegundos.
        setTimeout(function () {
            $(game_name).removeClass().addClass('game_name_');
            $(document).keydown(function(e){
            $(document).off('keydown');
            e.preventDefault();
            $(".loading_container").show();
            $(game_name).removeClass("game_name_");
            $(game_name).addClass("game_name__");

                ReactDOM.render(
                    <BrowserRouter>
                        <Switch>
                            <Route path="/menu" component={Menu} />
                        </Switch>
                        <Redirect to="/menu"></Redirect>
                    </BrowserRouter>,
                    document.getElementById('root')
                );
                    
        });
        }, 13000); // O valor é representado em milissegundos.

        }
    }
}



