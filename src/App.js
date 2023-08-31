import Header from './app/Header';
import Footer from './app/Footer';
import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Project from './pages/ProjectPage';
import Work from './pages/WorkPage';

const App = () => {
  // constructor(){
  //   super();
  //   this.state = {
  //     currentActivePage: 'HOME'
  //   }
  // }
  // const { currentActivePage } = this.state;
  return (
    <Router>
      <Header 
        // currentActivePage={currentActivePage}
        // setCurrentActivePage= {(page) => {
        //   this.setState({
        //     currentActivePage: page,
        //   })
        // }}
      />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/works" element={<Project/>} />
        <Route path="/works/:work" element={<Work/>} />
      </Routes>
      {/* <Content 
        currentActivePage={currentActivePage}
      /> */}
      <Footer />
    </Router>
  )
};

export default App;
