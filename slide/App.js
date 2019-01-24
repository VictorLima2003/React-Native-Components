import React from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      valor:50
    };
  }

  render() {
    return (
      <View style={styles.body}>
        <Slider thumbTintColor="#34495e" minimumTrackTintColor="#2980b9" value={this.state.valor} minimumValue={0} maximumValue={100} onValueChange={(v) => this.setState({valor:v})}/>

        <Text>{this.state.valor.toFixed(0)}%</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex:1,
    paddingTop:40
  },
});
