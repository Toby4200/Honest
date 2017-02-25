import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router';

import Counter from '../components/Counter';
import * as TimerActions from '../actions/timerActions';
import styles from './TimerPage.css';

// node.js imports
var fs = require('fs');
var mysql      = require('mysql');

// material-ui imports
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

console.log('fs ==>', fs)
function mapStateToProps(state) {
  return {
    timerState: state.timerReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    timerActions: bindActionCreators(TimerActions, dispatch)
  }
  // return bindActionCreators(TimerActions, dispatch);
}
// console.log('connect ==>', connect.toString())

// @connect(mapStateToProps, mapDispatchToProps)

// @connect(state => ({
//   counter: state.counter
// }), dispatch => ({
//   action: bindActionCreators(TimerActions, dispatch)
// }))
// @connect(mapStateToProps, mapDispatchToProps)

class TimerPage extends Component {
  // props: {
  //
  // };

  /**
   * Spend Time on task
   * @param e
   */
  setTimer(e) {
    const {
      setIsTimerActive,
      countdownTimer
    } = this.props.timerActions;

    // const {
    //   timeCount
    // } = this.props.timerState;

    const taskName = document.querySelector('[name="taskName"]').value;
    const taskTimeInMinutes = Number(document.querySelector('[name="taskTime"]').value);
    const timestampStart = Date.now();
    const timestampEnd = timestampStart + taskTimeInMinutes * 60 * 1000;
    //block screen with counter
      // disable button

      // set active timer
      // this.props.timerActions.setIsTimerActive(true, taskTimeInMinutes);
      this.props.timerActions.setTimer(true, timestampStart, timestampEnd, taskTimeInMinutes);
    // write to db
    this.timer = setInterval(this.props.timerActions.countdownTimer.bind(this), 1000);
    // log to DB
    // setTimeout(this.logTaskToDatabase, taskTimeInMinutes * 60 * 1000);
    setTimeout(this.props.timerActions.setTaskEnd.bind(this, this.timer), taskTimeInMinutes * 60 * 1000);
  }

  logTaskToDatabase() {
    console.log('==> write to database');

    //show confirm message


    //write to db

    // let success = process.argv[2]
    // let date = process.argv[3]; // date
    // let taskName = process.argv[4]; // task name
    // let minutes = process.argv[5]; // minutes
    // let additional = process.argv[6]; // minutes
    // let beginTaskTime = new Date().getTime(); // begin task time
    // let endTaskTime = new Date().getTime(); // end time

  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  renderCountdown() {
    const {
      timestampEnd
    } = this.props.timerState;
    const minuteLeft = (timestampEnd - Date.now()) / 1000 / 60;

    return (
      <div className={styles.countdown}>
        hi there
        <span className="countdown-numb">
          {minuteLeft}
        </span>
      </div>
    )
  }

  render() {
    console.log('this.props ==>', this.props)
    // const {
    //
    // } = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    const {
      isTimerActive,
      isTaskEnd
    } = this.props.timerState;

    return (
      <div className={styles['c-timer-page']}>
        <span>Enter task:</span>
        <input className={styles.input} name='taskName' type="text"/>
        <input className={styles.input} name="taskTime" type="text"/>
        <button
          onClick={::this.setTimer}
        >
          create Task
        </button>


        <div>
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={true}
            open={isTaskEnd}
          >
            Only actions can close this dialog.
          </Dialog>

          {
            isTimerActive ? this.renderCountdown() : () => {}
          }
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TimerPage);
