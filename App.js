import React, { Component } from 'react';


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,

  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';

import {
  Alert,
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [20, 45, 28, 80, 99, 43],
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
  }]
}

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2 // optional, default 3
}



export default class Touchables extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }



  render() {
    return (
      <View >
        <View style={ styles.container }>
          <View style={ { height: 33 } } />
          <Text style={ { height: 20, color: 'white', justifyContent: 'center' } } > CryptoNative </Text>
          <View style={ { height: 20 } } />
        </View>

        <View style={ { padding: 10 } }>
          <TextInput
            style={ { height: 40 } }
            placeholder="Type the symbol here!"
            onChangeText={ (text) => this.setState({ text }) }
            value={ this.state.text }
          />
        </View>

        <View style={ styles.container }>
          <View style={ { height: 1 } } />
        </View>

        <TouchableHighlight onPress={ this._onPressButton } onLongPress={ this._onLongPressButton } underlayColor="white">
          <View style={ styles.button }>
            <Text style={ styles.buttonTextName }>Bitcoin</Text>
            <LineChart
              data={ data }
              width={ 100 }
              height={ 40 }
              chartConfig={ chartConfig }
            />
            <Text style={ styles.buttonTextData }>$ 10,000</Text>
            <Text style={ styles.buttonTextData }>$ 10,000</Text>
            <Text style={ styles.buttonTextData }>$ 10,000</Text>
          </View>
        </TouchableHighlight>

        <View style={ styles.container }>
          <View style={ { height: 1 } } />
        </View>

        <View>
          <Text>
            Bezier Line Chart
          </Text>
          <LineChart
            data={ {
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [{
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }]
            } }
            width={ Dimensions.get('window').width } // from react-native
            height={ 220 }
            yAxisLabel={ '$' }
            chartConfig={ {
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              }
            } }
            bezier
            style={ {
              marginVertical: 8,
              borderRadius: 16
            } }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  button: {
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  buttonTextName: {
    padding: 5,
    color: 'black'
  },
  buttonTextData: {
    padding: 5,
    color: 'black'
  }
});
