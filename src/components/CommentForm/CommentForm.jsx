import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
 
class CommentForm extends Component {
    gotoHome = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1 style={{ backgroundColor: 'gold' }}>  CommentForm </h1>
                <button onClick={this.gotoHome}>
                    {'To Home!'}
                </button>
            </div>
        );
    }
}

export default withRouter(CommentForm)