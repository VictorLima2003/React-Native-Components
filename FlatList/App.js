import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      flatData:[
        {key:"1", nome:'Victor', idade:'15'},
        {key:"2", nome:'Guilherme', idade:'15'},
        {key:"3", nome:'Rosália', idade:'52'},
        {key:"4", nome:'Ivan', idade:'52'},
        {key:"5", nome:'Maria', idade:'16'},
        {key:"6", nome:'Carlos', idade:'24'},
        {key:"7", nome:'Rodrigo', idade:'71'},
        {key:"8", nome:'Saulo', idade:'14'},
        {key:"9", nome:'João Pedro', idade:'19'},
        {key:"10", nome:'Luiza', idade:'87'},
        {key:"11", nome:'Zéca', idade:'76'},
        {key:"12", nome:'Ivan', idade:'52'}
      ]
    };
  }

  flatRender(item){
    return(
      <View style={styles.flatItem}>
        <Text style={styles.flatNome}>{item.nome}</Text>
        <Text style={styles.flatIdade}>{item.idade} anos</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.body}>
        <FlatList data={this.state.flatData} renderItem={({item}) => this.flatRender(item)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop:20,
  },
  flatItem:{
    padding:10,
  },
  flatNome: {
    fontSize:26,
  },
  flatIdade: {
    fontSize:14
  }
});
