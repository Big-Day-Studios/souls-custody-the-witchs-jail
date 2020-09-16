import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './css/index.css';
import Splash from './splash';
import Menu from './menu';
import About from './credits';
import Game from './game';
import ena from './game_text/f0p0d000'
import dio from './game_text/f0p0d001'



ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={Splash} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/game" exact  component={Game} />
          <Route path="/game/f0p0d000"  component={ena} />
          <Route path="/game/f0p0d001"  component={dio} />


      </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
  );
            



