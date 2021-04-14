import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Work from './components/Work';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header';

ReactDOM.render(
  <BrowserRouter basename="https://shusukeo.github.io/about-me">
      <Header/>
      <Route exact path={'/'} component={Home}/>
      <Route path={'/work'} component={Work}/>
      <Route path={'/aboutMe'} component={AboutMe}/>
      <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
