import React from 'react';
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom";
import './css/main.css';
import br from './img/icons/brazil.svg';
import en from './img/icons/us.svg';
import en_Splash from './another_en/splash';
import Splash from './another/splash'

export default class lang extends React.Component{
    render() {

        function link() {
            ReactDOM.render(
                <Router>
                    <Switch>
                        <Route path="/s" exact={true} component={Splash} />
                        <Route path="/en/s" exact={true} component={en_Splash} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(  
            
                <div className="all_game" >
                    <div className="background-black"></div>
                    <h1 className='idioma'>Language/Idioma</h1>
                    <Link onClick={link} to="/s">
                        <img className="br" src={br}/>
                    </Link>
                    <Link onClick={link} to="/en/s">
                        <img className="en" src={en}/>
                    </Link>
                </div>
        )
    }
}


