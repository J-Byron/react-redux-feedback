
import React, { Component } from 'react';
import './App.css';

// *----------* Routing *----------*
import { HashRouter as Router, Route, Link } from "react-router-dom";

// Page Components
import Home from '../Home/Home';
import FeelForm from '../FeelForm/FeelForm';
import ComprehensionForm from '../ComprehensionForm/ComprehensionForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentForm from '../CommentForm/CommentForm';
import ReviewForm from '../ReviewForm/ReviewForm';

// *----------* Material UI *----------*
import { withStyles } from '@material-ui/core/styles';

const styles = {
  skeleton: {
    height: 75,
    width: '100%',
    backgroundColor: '#454444',
  }
}



class App extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className="App">
        <div className={classes.skeleton}> </div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/FeelForm" component={FeelForm} />
            <Route path="/ComprehensionForm" component={ComprehensionForm} />
            <Route path="/SupportForm" component={SupportForm} />
            <Route path="/CommentForm" component={CommentForm} />
            <Route path="/Review" component={ReviewForm} />
          </div>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
