import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';
import styles from './CounterPage.css';
console.log('styles ==>', styles)

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}
// console.log('connect ==>', connect.toString())

// @connect(mapStateToProps, mapDispatchToProps)

// @connect(state => ({
//   counter: state.counter
// }), dispatch => ({
//   action: bindActionCreators(CounterActions, dispatch)
// }))
// @connect(mapStateToProps, mapDispatchToProps)

class CounterPage extends Component {
  props: {
    increment: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    counter: number
  };

  render() {
    console.log('this.props ==>', this.props)
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`}>
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={increment}>
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={decrement}>
            <i className="fa fa-minus" />
          </button>
          <button className={styles.btn} onClick={incrementIfOdd}>odd</button>
          <button className={styles.btn} onClick={() => incrementAsync()}>async</button>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
