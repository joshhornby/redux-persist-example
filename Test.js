import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

class Test extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'TEST'
    });
  }

  render() {
    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  }
}

export default connect()(Test);
