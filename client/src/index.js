import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./index.css";

import Header from './components/Header/Header';

import Index from './pages/Index/Index';
import Films from './pages/Films/Films';
import People from './pages/People/People';
import Planets from './pages/Planets/Planets';
import Species from './pages/Species/Species';
import Starships from './pages/Starships/Starships';
import Vehicles from './pages/Vehicles/Vehicles';

ReactDOM.render(
    <div className="app">
        <Header />
        <BrowserRouter >
            <Switch>
                <Route path="/" exact component={Index}></Route>
                <Route path="/films/:id" component={Films}></Route>
                <Route path="/people/:id" component={People}></Route>
                <Route path="/planets/:id" component={Planets}></Route>
                <Route path="/species/:id" component={Species}></Route>
                <Route path="/starships/:id" component={Starships}></Route>
                <Route path="/vehicles/:id" component={Vehicles}></Route>
            </Switch>
        </BrowserRouter >
    </div>,
    document.getElementById('root'));

