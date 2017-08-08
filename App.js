import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { Provider } from 'react-redux';
import Test from './Test';

function reducer(state = { f: 1 }, action) {
  switch (action.type) {
    case 'TEST':
      return { ...state, example: Math.random() };
    default:
      return state;
  }
}

const store = compose(autoRehydrate())(createStore)(reducer);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  componentWillMount() {
    persistStore(store, { storage: AsyncStorage }, () => {
      this.setState({ rehydrated: true });
      console.log(store.getState());
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Test />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
