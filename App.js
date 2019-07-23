import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={ styles.container }>
        <Text style={ styles.red }>Bitcoin { this.props.name }</Text>


        <Greeting name='183.26b' />
        <Greeting name='6.35b' />
        <Greeting name='$10,300.00' />
        {/* <Blink text='I love to blink' />
        <Blink text='Blinking is fun!' /> */}
        {/* <View style={ { width: 50, height: 50, backgroundColor: 'powderblue' } } />
        <View style={ { width: 100, height: 100, backgroundColor: 'skyblue' } } />
        <View style={ { width: 150, height: 150, backgroundColor: 'steelblue' } } /> */}


        <View style={ { backgroundColor: 'skyblue' } } />

      </View >

    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <View style={ { alignItems: 'center' } }>
        <Text> { this.props.name }</Text>
      </View>
    );
  }
}

class Blink extends Component {
  componentDidMount() {
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={ styles.bigBlue }>{ this.props.text }</Text>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    direction: 'ltr'
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
});
