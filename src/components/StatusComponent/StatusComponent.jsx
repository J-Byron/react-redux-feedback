// *----------*  *----------*
import React, { Component } from 'react';

// *----------* Material UI *----------*
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';



const styles = {
    card: {
        height: '100px',
        width: '20%',
        margin: '0px 1%',
        maxWidth: 345,
        display: 'inline-block',
        backgroundColor: '#39A094',
        boxShadow: '0px 0px 30px rgba(20, 20, 20, 0.3)',
        color: '#eee',
        fontSize: '50px',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '100px'
    }
}

class StatusComponent extends Component {
    render() {

        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                {this.props.data}
            </Card>
        );
    }
}

export default withStyles(styles)(StatusComponent);