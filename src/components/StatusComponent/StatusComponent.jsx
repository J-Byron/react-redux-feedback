// *----------*  *----------*
import React, { Component } from 'react';
import { compose } from 'redux'

// *----------* Material UI *----------*
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
 
const styles = {
    card: {
        height: 300,
        width: '20%',
        margin: 10,
        maxWidth: 345,
        display: 'inline-block',
        backgroundColor: 'green',
        boxShadow: '0px 0px 30px rgba(20, 20, 20, 0.3)'
    }
}

class StatusComponent extends Component {
    render(){

        const { classes } = this.props;

        return(
            <div className= {classes.container}>
                <Card className={classes.card}>
                    {'Feel Form'}
                </Card>
                <Card className={classes.card}>
                    {'Comp Form'}
                </Card>
                <Card className={classes.card}>
                    {'Support Form'}
                </Card>
                <Card className={classes.card}>
                    {'Comment Form'}
                </Card>
                <button> Click me </button>
            </div>
        );
    }
}

export default withStyles(styles)(StatusComponent);