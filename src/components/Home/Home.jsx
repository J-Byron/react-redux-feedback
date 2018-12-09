// *----------*  *----------*
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// *----------*  *----------*
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const buttonTheme = createMuiTheme({ palette: 
    { primary: {main: '#39A094'} } 
})

const styles = {
    form: {
        width: '80%',
        height: 400,
        margin: '40px 10%',
        backgroundColor: '#eee',
        borderRadius: '6px',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#39A094',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 100,
        width:300,
        fontSize: 30
    }
}

class Home extends Component {
    gotoFeelForm = () => {
        this.props.history.push('/FeelForm')
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.form}>
            <MuiThemeProvider theme={buttonTheme}>
                <Button color="primary" className={classes.button} onClick={this.gotoFeelForm}>
                    Start Feedback
                </Button>
            </MuiThemeProvider>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Home));