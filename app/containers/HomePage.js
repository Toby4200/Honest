// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
// material UI touch
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



export default class HomePage extends Component {
  render() {
    return (
      <Home />
    );
  }
}
