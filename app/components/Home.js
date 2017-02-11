import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

// get remote
import { remote } from 'electron';
const { BrowserWindow, app } = remote
let timerWindow = null;

// set path by hand, cause problem with react template
// https://github.com/chentsulin/electron-react-boilerplate/issues/374
var path = process.cwd();

export default class Home extends Component {
  setTimer() {
    timerWindow = new BrowserWindow({
      width: 800,
      height: 600,
      modal: true,
    })
    timerWindow.loadURL('file://' + path + '/app/InnerPages/TimerModal/index.html');

  }

  render() {
    return (
      <div>

        <div className={styles.grid}>
          <div className={styles.leftPanel}>
            <div className={`${styles.button} ${styles.addButton}`} ><button onClick={this.setTimer} >Set Timer</button></div>
          </div>
          <div className={styles.firstBlock}>Statistics</div>
          <div className={styles.secondBlock}>Statistics</div>
          <div className={styles.thirdBlock}>Statistics</div>
          <div className={styles.fourthBlock}>Statistics</div>
          <div className={styles.logo}>Honest</div>
        </div>
      </div>
    );
  }
}
