import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux'
 
class ComprehensionForm extends Component {
    gotoSupportForm = () => {
        this.props.history.push('/SupportForm')
    }
    render() {
        return (
            <div>
                <h1 style={{ backgroundColor: 'Green' }}>  ComprehensionForm </h1>
                <button onClick={this.gotoSupportForm}>
                    {'To SupportForm!'}
                </button>
            </div>
        );
    }
}

export default withRouter(ComprehensionForm);