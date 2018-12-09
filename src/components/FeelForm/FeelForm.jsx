// *----------*  *----------*
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// *----------*  *----------*
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const theme = createMuiTheme({
    palette:
        { primary: { main: '#39A094' } }
})

const styles = {
    form: {
        width: '80%',
        height: 400,
        margin: '40px 10% 10px 10%',
        backgroundColor: '#eee',
        borderRadius: '6px',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#39A094',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}


class FeelForm extends Component {

    state = {
        response: ''
    }

    handleChange = (event) => {
        this.setState({
            response: event.target.value
        })
    }

    handleNextClick = () => {
        this.props.history.push('/ComprehensionForm');
        //history.goBack()

        // Dispatch state to reducer
        this.props.dispatch({type:'ADD_INFO',payload:{key:'feeling',value:this.state.response}})
    }
    render() {

        const { classes } = this.props;

        return (
            <div className={classes.form}>
                <div style={{height:300,width: 600}}>
                    <h1 style={{ color: '#39A094' }}> How did you feel about today's material? </h1>
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
                        <Button style = {{display:'flex',margin:'20px 45%'}} color="primary" className={classes.button} onClick={this.handleNextClick}>
                            Next
                        </Button>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(connect()(FeelForm)));