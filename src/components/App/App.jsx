
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
import StatusComponent from '../StatusComponent/StatusComponent';

// *----------* Material UI *----------*
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const styles = {
    skeleton: {
    height: 75,
    width: '100%',
    backgroundColor: 'red',
}
}



class App extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className="App">
      <div className={classes.skeleton}>

      </div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/FeelForm" component={FeelForm} />
            <Route path="/ComprehensionForm" component={ComprehensionForm} />
            <Route path="/SupportForm" component={SupportForm} />
            <Route path="/CommentForm" component={CommentForm} />
          </div>
        </Router>
        <StatusComponent/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
