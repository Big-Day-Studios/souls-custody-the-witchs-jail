import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './css/index.css';
import Splash from './splash';
import Menu from './menu';
import About from './credits';
import Game from './game';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={Splash} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/game" component={Game} />
      </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
  );
            



