import Header from './app/Header';
import Content from './app/Content';
import Footer from './app/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentActivePage: 'HOME'
    }
  }

  render(){
    const { currentActivePage } = this.state;
    return (
      <div>
        <Header 
          currentActivePage={currentActivePage}
          setCurrentActivePage= {(page) => {
            this.setState({
              currentActivePage: page,
            })
          }}
        />
        <Content 
          currentActivePage={currentActivePage}
        />
        <Footer />
      </div>
    )
  }
};

export default App;
