import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router';

import Counter from '../components/Counter';
import * as TimerActions from '../actions/counter';
import styles from './TimerPage.css';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TimerActions, dispatch);
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

  render() {
    console.log('this.props ==>', this.props)
    // const {
    //
    // } = this.props;
    return (
      <div className={styles['c-timer-page']}>
        Timer
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TimerPage);
