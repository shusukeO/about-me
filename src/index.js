import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header';

ReactDOM.render(
  <BrowserRouter basename="/about-me">
      <Header/>
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/Work'} component={Work}/>
        <Route exact path={'/AboutMe'} component={AboutMe}/>
      </Switch>
      
      <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
