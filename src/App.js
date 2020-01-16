import React from 'react';
import './Styles/Components/App.scss';
import Layout from './Components/Layout'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Portfolio from './Routes/Portfolio'
import Contact from './Routes/Contact'

function App() {
  return (
    <Router>
    <div className="App">
        <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        </Layout>
    </div>
    </Router>
  );
}

export default App;
