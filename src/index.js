import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './css/index.css';
import Splash from './splash';
import Menu from './menu';
import About from './credits';
import ena from './game_level/f0p0d000';
import dio from './game_level/f0p0d001';
import choices from './game_template/game_choice';
import t0 from './tutorial/t0p0d0';
import t1 from './tutorial/t0p0d1';
import t1e0 from './tutorial/t0p0d1e0';
import t2_0 from './tutorial/t0p0d2.0';
import t2_1 from './tutorial/t0p0d2.1';
import t2e1 from './tutorial/t0p0d2e1';
import t1i0 from './tutorial/t0p0d2i0';
import t3 from './tutorial/t0p0d3';



ReactDOM.render(
  <BrowserRouter>
      <Switch>
            <Route path="/" exact={true} component={Splash} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/game/choices"   component={choices} />
            <Route path="/game/t0p0d0" component={t0}/>
            <Route path="/game/t0p0d1" component={t1}/>
            <Route path="/game/t0p0d1e0" component={t1e0} />
            <Route path="/game/t0p0d2.0" component={t2_0}/>
            <Route path="/game/t0p0d2.1"  component={t2_1}/>
            <Route path="/game/t0p0d2e1" component={t2e1}/>
            <Route path="/game/t0p0d3" component={t3}/>
            <Route path="/game/t0p0d2i0" exact={false} component={t1i0} />
            <Route path="/game/f0p0d000"  component={ena} />
            <Route path="/game/f0p0d001"  component={dio} />
      </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
  );
            



