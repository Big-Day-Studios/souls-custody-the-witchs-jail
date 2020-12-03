import Typical from '.'

import React from 'react';
import '../css/var.css';
import '../css/main.css';
import '../css/splash.css';
import '../css/menu.css'




export default class Menu extends React.Component{

    render(){
        return(
                <div id="menu" className="menu">
                <Typical
                steps={['Eu vou tentar te ensinar como se joga essa coisa.',1600, 
                'Você tem que escolher entre as opções que aparecem na tela para escolher seu rumo de história.', 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />
                </div>

        );


    };
}





