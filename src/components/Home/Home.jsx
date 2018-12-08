import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    gotoFeelForm = () => {
        this.props.history.push('/FeelForm')
    }
    render() {
        return (
            <div>
                <h1 style={{ backgroundColor: 'red' }}>Home Page</h1>
                <button onClick={this.gotoFeelForm}>
                    {'To feel form!'}
                </button>
            </div>
        );
    }
}

export default withRouter(Home);