import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './css/index.css';
import Splash from './splash';
import Menu from './menu';
import About from './credits';
import f0p0d000 from './game_level/f0p0d000';
import f0p0d001 from './game_level/f0p0d001';
import f0p0d00d1_0 from './game_level/e1-0/f0p0d00d1_0';
import f0p0d00d1_1 from './game_level/e1-0/f0p0d00d1_1';
import f0p0d00d1_2 from './game_level/e1-0/f0p0d00d1_2';
import f0p0d00d2_0 from './game_level/e1-0/f0p0d00d2_0';
import f0p0d00d2_1 from './game_level/e1-0/f0p0d00d2_1';
import f0p0d00d2_2 from './game_level/e1-0/f0p0d00d2_2';
import f0p0d00d2_3 from './game_level/e1-0/f0p0d00d2_3';
import f0p0d00d2_4 from './game_level/e1-0/f0p0d00d2_4';
import f0p0d00d1__0 from './game_level/e1-1/f0p0d00d1__0';
import f0p0d00d1__1 from './game_level/e1-1/f0p0d00d1__1';
import f0p0d00d1__2 from './game_level/e1-1/f0p0d00d1__2';
import f0p0d00d1__3 from './game_level/e1-1/f0p0d00d1__3';
import f0p0d00d1__4 from './game_level/e1-1/f0p0d00d1__4';
import f0p0d00d1__5 from './game_level/e1-1/f0p0d00d1__5';
import f0p0d003 from './game_level/f0p0d003';
import f0p0d004 from './game_level/f0p0d004';
import f0p0d005 from './game_level/f0p0d005';
import f0p0d006 from './game_level/f0p0d006';
import f0p0d007 from './game_level/f0p0d007';
import f0p0d00d7_0 from './game_level/e2-0/f0p0d00d7_0';
import f0p0d00d7_1 from './game_level/e2-0/f0p0d00d7_1';
import f0p0d00d7_2 from './game_level/e2-0/f0p0d00d7_2';
import f0p0d00d7__0 from './game_level/e2-1/f0p0d00d7__0';
import f0p0d00d7__1 from './game_level/e2-1/f0p0d00d7__1';
import f0p0d00d7__2 from './game_level/e2-1/f0p0d00d7__2';
import f0p0d008 from './game_level/f0p0d008';
import f0p0d009 from './game_level/f0p0d009';
import f0p0d010 from './game_level/f0p0d010';
import f0p0d011 from './game_level/f0p0d011';
import f0p0d012 from './game_level/f0p0d012';
import f0p0d013 from './game_level/f0p0d013';
import f0p0d014 from './game_level/f0p0d014';
import f0p0d015 from './game_level/f0p0d015';
import f0p0d016 from './game_level/f0p0d016';
import f0p0d017 from './game_level/f0p0d017';
import f0p0d018 from './game_level/f0p0d018';
import f0p0d019 from './game_level/f0p0d019';
import f0p0d020 from './game_level/f0p0d020';
import f0p0d021 from './game_level/f0p0d021';
import f0p0d022 from './game_level/f0p0d022';
import f0p0d023 from './game_level/f0p0d023';
import f0p0d024 from './game_level/f0p0d024';
import cf0p0d025 from './game_level/c0p0d025';
import cf0p0d026 from './game_level/c0p0d026';
import f0p0d027 from './game_level/f0p0d027';
import f0p0d028 from './game_level/f0p0d028';
import f0p0d029 from './game_level/f0p0d029';
import f0p0d030 from './game_level/f0p0d030';
import f0p0d031 from './game_level/f0p0d031';
import f0p0d032 from './game_level/f0p0d032';
import f0p0d033 from './game_level/f0p0d033';
import f0p0d032_1 from './game_level/e3-0/f0p0d032_1';
import f0p0d032__1 from './game_level/e3-1/f0p0d032__1';
import f0p0d034 from './game_level/f0p0d034';
import f0p0d035 from './game_level/f0p0d035';
import f0p0d036 from './game_level/f0p0d036';
import f0p0d037 from './game_level/f0p0d037';
import f0p0d038 from './game_level/f0p0d038';
import f0p0d039 from './game_level/f0p0d039';
import f0p0d040 from './game_level/f0p0d040';
import f0p0d041 from './game_level/f0p0d041';
import f0p0d042 from './game_level/f0p0d042';
import f0p0d043 from './game_level/f0p0d043';

import t0 from './tutorial/t0p0d0';
import t1 from './tutorial/t0p0d1';
import t1e0 from './tutorial/t0p0d1e0';
import t2_0 from './tutorial/t0p0d2.0';
import t2_1 from './tutorial/t0p0d2.1';
import t2e1 from './tutorial/t0p0d2e1';
import t1i0 from './tutorial/t0p0d2i0';
import t3 from './tutorial/t0p0d3';
import TheBackgroundScreams from './audio/pages/TheBackgroundScreams';
import SorrowOfaLonelyGirl from './audio/pages/SorrowOfaLonelyGirl';


ReactDOM.render(
  <BrowserRouter>
              <Route path="/game/f" exact={false} component={TheBackgroundScreams} />
              <Route path="/game/c/" exact={false} component={SorrowOfaLonelyGirl} />
              <Route path="/game/t/" exact={false} component={TheBackgroundScreams} />

      <Switch>
            <Route path="/" exact={true} component={Splash} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/game/t/t0p0d0" component={t0}/>
            <Route path="/game/t/t0p0d1" component={t1}/>
            <Route path="/game/t/t0p0d1e0" component={t1e0} />
            <Route path="/game/t/t0p0d2.0" component={t2_0}/>
            <Route path="/game/t/t0p0d2.1"  component={t2_1}/>
            <Route path="/game/t/t0p0d2e1" component={t2e1}/>
            <Route path="/game/t/t0p0d3" component={t3}/>
            <Route path="/game/t/t0p0d2i0" exact={false} component={t1i0} />
            <Route path="/game/f/f0p0d000"  component={f0p0d000} />
            <Route path="/game/f/f0p0d001"  component={f0p0d001} />
            <Route path="/game/f/f0p0d00d1_0"  component={f0p0d00d1_0} />
            <Route path="/game/f/f0p0d00d1_1"  component={f0p0d00d1_1} />
            <Route path="/game/f/f0p0d00d1_2"  component={f0p0d00d1_2} />
            <Route path="/game/f/f0p0d00d2_0"  component={f0p0d00d2_0} />
            <Route path="/game/f/f0p0d00d2_1"  component={f0p0d00d2_1} />  
            <Route path="/game/f/f0p0d00d2_2"  component={f0p0d00d2_2} />  
            <Route path="/game/f/f0p0d00d2_3"  component={f0p0d00d2_3} />  
            <Route path="/game/f/f0p0d00d2_4"  component={f0p0d00d2_4} />  
            <Route path="/game/f/f0p0d00d1__0" component={f0p0d00d1__0} />
            <Route path="/game/f/f0p0d00d1__1" component={f0p0d00d1__1} />
            <Route path="/game/f/f0p0d00d1__2" component={f0p0d00d1__2} />
            <Route path="/game/f/f0p0d00d1__3" component={f0p0d00d1__3} />
            <Route path="/game/f/f0p0d00d1__4" component={f0p0d00d1__4} />
            <Route path="/game/f/f0p0d00d1__5" component={f0p0d00d1__5} />
            <Route path="/game/f/f0p0d003" component={f0p0d003} />
            <Route path="/game/f/f0p0d004" component={f0p0d004} />
            <Route path="/game/f/f0p0d005" component={f0p0d005} />
            <Route path="/game/f/f0p0d006" component={f0p0d006} />
            <Route path="/game/f/f0p0d007" component={f0p0d007} />
            <Route path="/game/f/f0p0d00d7_0" component={f0p0d00d7_0} />
            <Route path="/game/f/f0p0d00d7_1" component={f0p0d00d7_1} />
            <Route path="/game/f/f0p0d00d7_2" component={f0p0d00d7_2} />
            <Route path="/game/f/f0p0d00d7__0" component={f0p0d00d7__0} />
            <Route path="/game/f/f0p0d00d7__1" component={f0p0d00d7__1} />
            <Route path="/game/f/f0p0d00d7__2" component={f0p0d00d7__2} />
            <Route path="/game/f/f0p0d008" component={f0p0d008} />
            <Route path="/game/f/f0p0d009" component={f0p0d009} />
            <Route path="/game/f/f0p0d010" component={f0p0d010} />
            <Route path="/game/f/f0p0d011" component={f0p0d011} />
            <Route path="/game/f/f0p0d012" component={f0p0d012} />
            <Route path="/game/f/f0p0d013" component={f0p0d013} />
            <Route path="/game/f/f0p0d014" component={f0p0d014} />
            <Route path="/game/f/f0p0d015" component={f0p0d015} />
            <Route path="/game/f/f0p0d016" component={f0p0d016} />
            <Route path="/game/f/f0p0d017" component={f0p0d017} />
            <Route path="/game/f/f0p0d018" component={f0p0d018} />
            <Route path="/game/f/f0p0d019" component={f0p0d019} />
            <Route path="/game/f/f0p0d020" component={f0p0d020} />
            <Route path="/game/f/f0p0d021" component={f0p0d021} />
            <Route path="/game/f/f0p0d022" component={f0p0d022} />
            <Route path="/game/f/f0p0d023" component={f0p0d023} />
            <Route path="/game/f/f0p0d024" component={f0p0d024} />
            <Route path="/game/c/cf0p0d025" component={cf0p0d025} />
            <Route path="/game/c/cf0p0d026" component={cf0p0d026} />
            <Route path="/game/f/f0p0d027" component={f0p0d027} />
            <Route path="/game/f/f0p0d028" component={f0p0d028} />
            <Route path="/game/f/f0p0d029" component={f0p0d029} />
            <Route path="/game/f/f0p0d030" component={f0p0d030} />
            <Route path="/game/f/f0p0d031" component={f0p0d031} />
            <Route path="/game/f/f0p0d032" component={f0p0d032} />
            <Route path="/game/f/f0p0d032_1" component={f0p0d032_1} />
            <Route path="/game/f/f0p0d032__1" component={f0p0d032__1} />
            <Route path="/game/f/f0p0d033" component={f0p0d033} />
            <Route path="/game/f/f0p0d034" component={f0p0d034} />
            <Route path="/game/f/f0p0d035" component={f0p0d035} />
            <Route path="/game/f/f0p0d036" component={f0p0d036} />
            <Route path="/game/f/f0p0d037" component={f0p0d037} />
            <Route path="/game/f/f0p0d038" component={f0p0d038} />
            <Route path="/game/f/f0p0d039" component={f0p0d039} />
            <Route path="/game/f/f0p0d040" component={f0p0d040} />
            <Route path="/game/f/f0p0d041" component={f0p0d041} />
            <Route path="/game/f/f0p0d042" component={f0p0d042} />
            <Route path="/game/f/f0p0d043" component={f0p0d043} />

      </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
);
            



