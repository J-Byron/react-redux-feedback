// *----------*  *----------*
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// *----------*  page components *----------*
import StatusComponent from '../StatusComponent/StatusComponent'

// *----------*  *----------*
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const theme = createMuiTheme({
    palette:
        { primary: { main: '#39A094' } }
})

const styles = {
    form: {
        width: '80%',
        height: 400,
        margin: '40px 10% 10px 10%',
        backgroundColor: 'white',
        borderRadius: '6px',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#39A094',
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
    },
    status: {
        width:'80%',
        margin: '40px 10% 10px 10%',
        display: 'inline-block'
    }
}

// The entire store is passed in to this function
const mapReduxToProps = (reduxStore) => ({
    reducer: reduxStore.reviewReducer 
});

class CommentForm extends Component {

    state = {
        response: ''
    }

    handleChange = (event) => {
        this.setState({
            response: event.target.value
        })
    }

    handleNextClick = () => {
        this.props.history.push('/CommentForm');
        //history.goBack()

        // Dispatch state to reducer
        this.props.dispatch({ type: 'ADD_INFO', payload: { key: 'comment', value: this.state.response } })
    }
    render() {

        const { classes } = this.props;

        return (
            <div>
                <div className={classes.form}>
                    <h3 style={{ color: '#bbb' }}> - 4 / 5 - </h3>
                    <h1 style={{ color: '#39A094', padding: '40px 0px' }}> Any additional Comments? </h1>
                    <MuiThemeProvider theme={theme}>
                        <TextField
                            id="filled-multiline-flexible"
                            rowsMax="4"
                            value={this.state.multiline}
                            onChange={this.handleChange}
                            className={classes.textField}
                            margin="normal"
                            variant="filled"
                        />
                        <Button style={{ display: 'block', width: '20%', margin: '60px 40%' }} variant="contained" color="primary" className={classes.button} onClick={this.handleNextClick}>
                            Review
                        </Button>
                    </MuiThemeProvider>
                </div>
                <div className={classes.status}>
                    <StatusComponent data={this.props.reducer.feel} />
                    <StatusComponent data={this.props.reducer.understand} />
                    <StatusComponent data={this.props.reducer.support} />
                </div>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(connect(mapReduxToProps)(CommentForm)));