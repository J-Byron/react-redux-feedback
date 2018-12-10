// *----------*  *----------*
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';

// *----------*  *----------*
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';




const styles = {
    form: {
        width: '60%',
        height: 700,
        margin: '40px 10% 10px 10%',
        backgroundColor: 'white',
        borderRadius: '6px',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#39A094',
        display: 'inline-block',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        display: 'inline-block'
    },
    success: {
        backgroundColor: '#39A094'
    },
    message:{
        display: 'flex',
        alignItems: 'center',
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: '20px',
      }
}

// The entire store is passed in to this function
const mapReduxToProps = (reduxStore) => ({
    reducer: reduxStore.reviewReducer
});

function MySnackbarContent(props) {
    const { classes, className, message, onClose, variant, ...other } = props;
    const Icon = CheckCircleIcon;

    return (
        <SnackbarContent
            className={classNames(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={classNames(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={onClose}
                >
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

const MySnackbarContentWrapper = withStyles(styles)(MySnackbarContent);

class ReviewForm extends Component {

    state = {
        feelResponse: '',
        understandResponse: '',
        supportResponse: '',
        commentResponse: '',
        open:false
    }

    componentDidMount() {
        this.setState({
            feelResponse: this.props.reducer.feel,
            understandResponse: this.props.reducer.understand,
            supportResponse: this.props.reducer.support,
            commentResponse: this.props.reducer.comment
        })
    }

    handleChange = (event) => {
        console.log(event.target);
        this.props.dispatch({ type: 'ADD_INFO', payload: { key: event.target.name, value: event.target.value } })
    }

    handleSubmitClick = () => {
        // send reducer to DB
        Axios.post('/feedback', this.props.reducer).then(response => {
            this.setState({ open: true });
            // clear state and reducer
            this.props.dispatch({ type: 'CLEAR_INFO'})
            // go to home :)
            setTimeout(()=>{
                this.props.history.push('/');
            },3000)
        }).catch(err => {
            console.log(`Error from server in post: ${err}`);
        })
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ open: false });
      };

    render() {

        const { classes } = this.props;

        return (
            <div>
                <div className={classes.form}>
                    <h3 style={{ color: '#bbb' }}> - 5 / 5 - </h3>
                    <h1 style={{ color: '#39A094', padding: '40px 0px' }}> Review </h1>
                    <div>
                        <form className={classes.container} noValidate autoComplete="off">
                            <FormControl style={{ width: '20%', margin: '0px ' }} variant="filled" className={classes.formControl}>
                                <InputLabel>Feeling</InputLabel>
                                <Select
                                    value={this.props.reducer.feel}
                                    onChange={this.handleChange}
                                    input={<FilledInput name="feel" id="filled-age-simple" />}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1 - I'm feeling stressed </MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5 - I'm feeling stellar!</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl style={{ width: '20%', margin: '10px 40%' }} variant="filled" className={classes.formControl}>
                                <InputLabel>Understanding</InputLabel>
                                <Select
                                    value={this.props.reducer.understand}
                                    onChange={this.handleChange}
                                    input={<FilledInput name="understand" id="filled-age-simple" />}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1 - I'm Completely lost </MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5 - I'm underwhelmed </MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl style={{ width: '20%', margin: '10px 40%' }} variant="filled" className={classes.formControl}>
                                <InputLabel>Support</InputLabel>
                                <Select
                                    value={this.props.reducer.support}
                                    onChange={this.handleChange}
                                    input={<FilledInput name="support" id="filled-age-simple" />}
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
                            <TextField
                                name="comment"
                                label="Comments"
                                className={classes.textField}
                                value={this.props.reducer.comment}
                                onChange={this.handleChange}
                                margin="normal"
                            />
                        </form>
                    </div>
                    <Button style={{ display: 'block', width: '20%', margin: '60px 40%' }} variant="contained" color="primary" className={classes.button} onClick={this.handleSubmitClick}>
                        Submit
                        </Button>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                >
                    <MySnackbarContentWrapper
                        onClose={this.handleClose}
                        variant="success"
                        message="Submitted Successfully!"
                    />
                </Snackbar>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(connect(mapReduxToProps)(ReviewForm)));