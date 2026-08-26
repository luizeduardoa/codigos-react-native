import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Pessoa from './src/Pessoa/index';
 
class App extends Component {
 
  constructor(props){
    super(props);
    this.state ={
    feed: [
      {id: "1", nome: "Ana", idade: 36, email: 'ana@senac.com'},
      {id: "2", nome: "Evellyn", idade: 19, email: 'evellyn@gmail.com'},
      {id: "3", nome: "Luiz", idade: 19, email: 'luiz@senac.com'},
      {id: "4", nome: "Adorno", idade: 65, email: 'adorno@senac.com'},
      {id: "5", nome: "Pessoa", idade: 30, email: 'pessoa@senac.com'},
      {id: "6", nome: "Rimbaud", idade: 37, email: 'france@senac.com'}
    ]
  }
  }
 
  render(){
    return(
      <View style={styles.container}>
        <FlatList
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Pessoa data={item} />}
        />
      </View>
    )
  }
}
 

 
export default App;