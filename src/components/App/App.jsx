
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// *----------* Routing *----------*
import { HashRouter as Router, Route, Link } from "react-router-dom";
// Page Components
import Home from '../Home/Home';
import FeelForm from '../FeelForm/FeelForm';
import ComprehensionForm from '../ComprehensionForm/ComprehensionForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentForm from '../CommentForm/CommentForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/FeelForm" component={FeelForm} />
            <Route path="/ComprehensionForm" component={ComprehensionForm} />
            <Route path="/SupportForm" component={SupportForm} />
            <Route path="/CommentForm" component={CommentForm} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
