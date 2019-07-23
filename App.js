import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={ { flex: 1, flexDirection: 'row', justifyContent: 'space-between' } }>
        <Text style={ styles.container }>Bitcoin </Text>

        {/* <Blink text='I love to blink' />
        <Blink text='Blinking is fun!' /> */}
        {/* <View style={ { width: 50, height: 50, backgroundColor: 'powderblue' } } />
        <View style={ { width: 100, height: 100, backgroundColor: 'skyblue' } } />
        <View style={ { width: 150, height: 150, backgroundColor: 'steelblue' } } /> */}
        <Text style={ styles.numbers }>183.26b</Text>
        <Text style={ styles.numbers }>6.35b</Text>
        <Text style={ styles.numbers }>$10,300.00</Text>

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

    flexDirection: 'row',
    backgroundColor: '#fff',
    top: 50,
    color: 'gold',


    direction: 'ltr'
  },
  numbers: {
    color: 'blue',

    flexDirection: 'row',

    backgroundColor: '#fff',
    top: 50,



    direction: 'ltr'

  },
  red: {
    color: 'red',
  }
});
