import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom' 

import base from './base'
import Home from './Home'
import Footer from './Footer'
import NovoAnuncio from './NovoAnuncio'
import Categorias from './Categorias'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categorias: []
    }
    base.bindToState('categorias',{
      context: this,
      state: 'categorias'
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact render={() => <Home categorias={this.state.categorias}/>} />
          <Route path='/novo-anuncio' exact render={() => <NovoAnuncio categorias={this.state.categorias}/>}/>
          <Route path='/categorias' render={() => <Categorias />} />
          
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
