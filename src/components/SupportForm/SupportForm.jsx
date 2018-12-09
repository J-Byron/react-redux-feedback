import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux'
 
class SupportForm extends Component {
    gotoCommentForm = () => {
        this.props.history.push('/CommentForm')
    }
    render() {
        return (
            <div>
                <h1 style={{ backgroundColor: 'pink' }}>  SupportForm </h1>
                <button onClick={this.gotoCommentForm}>
                    {'To CommentForm!'}
                </button>
            </div>
        );
    }
}

export default withRouter(SupportForm);