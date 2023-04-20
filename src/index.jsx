import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from './pages/Homepage/Home.jsx';
import About from './pages/About_page/About.jsx';
import Error from './pages/404/Error.jsx';
import Lodging from './pages/Lodging_form/Lodging.jsx';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path = '/' element={<Home/>}/>
      <Route path = '/a-propos' element={<About/>}/>
      <Route path='/logement' element={<Lodging/>}/>
      <Route path ='*' element={<Error/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
