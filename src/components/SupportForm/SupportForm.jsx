// *----------*  *----------*
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// *----------*  *----------*
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


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
    }
}


class SupportForm extends Component {

    state = {
        response: 0
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
        this.props.dispatch({ type: 'ADD_INFO', payload: { key: 'support', value: this.state.response } })
    }
    render() {

        const { classes } = this.props;

        return (
            <div className={classes.form}>
                    <h1 style={{ color: '#39A094', padding:'40px 0px' }}> How supported did you feel? </h1>
                    <MuiThemeProvider theme={theme}>
                        <FormControl style ={{width: '300px'}} variant="filled" className={classes.formControl}>
                            <Select
                                value={this.state.response}
                                onChange={this.handleChange}
                                input={<FilledInput name="age" id="filled-age-simple" />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>1 - I feel abandoned </MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5 - I feel completely supported </MenuItem>
                            </Select>
                        </FormControl>
                        <Button style = {{display:'block',width:'20%',margin:'60px 40%'}} color="primary" className={classes.button} onClick={this.handleNextClick}>
                            Next
                        </Button>
                    </MuiThemeProvider>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(connect()(SupportForm)));