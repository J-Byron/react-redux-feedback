import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux'
 
class FeelForm extends Component {
    gotoComprehensionForm = () => {
        this.props.history.push('/ComprehensionForm')
    }
    render() {
        return (
            <div>
                <h1 style={{ backgroundColor: 'blue' }}> Feel Form </h1>
                <button onClick={this.gotoComprehensionForm}>
                    {'To ComprehensionForm!'}
                </button>
            </div>
        );
    }
}

export default withRouter(FeelForm);