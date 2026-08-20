import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            nome: 'Ana'
        };

        //deixando a função acessar as propriedades
        this.entrar = this.entrar.bind(this)

    }
     entrar(){
            this.setState({
                nome: 'Ana Claudia'
            })
        }

    render(){
        return (
            <View style={{marginTop: 20}}>
                <Button style={{ marginTop: 50 }} title="Entrar" onPress={this.entrar} />

                <Text style={{fontSize: 23, color: 'orange', textAlign: 'center'}}>
                    {this.state.nome}
                </Text>
            </View>

        );
    }
}

export default App;