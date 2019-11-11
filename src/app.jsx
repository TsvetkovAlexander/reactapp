import React, { Component } from 'react';
import { createStore } from 'redux';
import ListLine from './components/ListLine';
import reducer from './store/reducers';
import { Provider } from 'react-redux'

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
                  <ListLine />
      </Provider>
    );
  }
}
