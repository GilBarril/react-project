import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, TextInput, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      text:''
    }
  }
  handlePressExample = () => {
    alert(20);
  };

  handleChangeExample = text => {
    this.setState({text});
  }

  render(){  
    return (
      <ScrollView>
      <View style={styles.container}>
        <TextInput style={styles.input} value={this.state.text} onChangeText={this.handleChangeExample}/>
          <Button title="Pixa!" onPress={this.handlePressExample}/>          
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  input:{
    height:20,
    width:200,
    fontSize:20,
    backgroundColor:'#fff',
  }
});


/*
export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.item1}>
          <Text>Open u p App.js cagarrufa your app!</Text>
        </View>
        <View style={styles.item2}>
          <Text>Open u p App.js cagarrufa your app!</Text>
        </View>
        <View style={styles.item3}>
          <Text>Open u p App.js cagarrufa your app!</Text>
        </View>
        <View style={styles.item4}>
          <Text>Open up App.js cagarrufa your app!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fce4ec',
    //alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  item1:{
    flex:1,
    backgroundColor:'#bc477b',
  },
  item2:{
    flex:2,
    backgroundColor:'#880e4f',
  },
  item3:{
    flex:3,
    backgroundColor:'#ba2d65',
  },
  item4:{
    flex:4,
    backgroundColor:'#560027',
  }, 
});


export default function App() {
  
  const [value, onChangeText] = React.useState('useles');
  
  
    return (
      <ScrollView>
      <View style={styles.container}>
          <Text style={{fontSize:20}}>Bienvenido</Text>
          <ActivityIndicator size="large" color="#f05545"/>
          <Image 
            source={{uri:'https://images-na.ssl-images-amazon.com/images/I/919WOjzOY6L._AC_SX466_.jpg'}}
            style={styles.image}/>

          <TextInput style={styles.input}
            onChangeText = {text => onChangeText(text)} value={value}
            />
          <TextInput style={styles.input}
            onChangeText = {text => onChangeText(text)} value={value}
            />
          <TextInput style={styles.input}
            onChangeText = {text => onChangeText(text)} value={value}
            />
          <Button title="Pixa!" onPress={() => alert(10)}/>          

      </View>
      </ScrollView>
    );

}



*/