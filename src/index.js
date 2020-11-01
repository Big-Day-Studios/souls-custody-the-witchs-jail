import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './css/index.css';
import Splash from './splash';
import Menu from './menu';
import About from './credits';
import f0p0d000 from './game_level/f0p0d000';
import f0p0d001 from './game_level/f0p0d001';
import Game_dor from './game_template/porta/game_talk';
import Game_es from './game_template/escada/game_talk';
import Game_dp from './game_template/deposito/game_talk';
import Choices_es from './game_template/escada/game_choices';
import Choices_dor from './game_template/porta/game_choice';
import Choices_dp from './game_template/deposito/game_choices';
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
            <Route path="/game/choices_dor" component={Choices_dor} />
            <Route path="/game/choices_es" component={Choices_es} />
            <Route path="/game/choices_dp" component={Choices_dp} />
            <Route path="/game/game_es" component={Game_es} />
            <Route path="/game/game_dp" component={Game_dp} />
            <Route path="/game/game_dor" component={Game_dor} />
            <Route path="/game/t0p0d0" component={t0}/>
            <Route path="/game/t0p0d1" component={t1}/>
            <Route path="/game/t0p0d1e0" component={t1e0} />
            <Route path="/game/t0p0d2.0" component={t2_0}/>
            <Route path="/game/t0p0d2.1"  component={t2_1}/>
            <Route path="/game/t0p0d2e1" component={t2e1}/>
            <Route path="/game/t0p0d3" component={t3}/>
            <Route path="/game/t0p0d2i0" exact={false} component={t1i0} />
            <Route path="/game/f0p0d000"  component={f0p0d000} />
            <Route path="/game/f0p0d001"  component={f0p0d001} />
      </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
  );
            



