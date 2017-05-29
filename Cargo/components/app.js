import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Login from './loginScreen';
import Profile from './profileScreen';

export default class Cargo extends Component {
    constructor(props){
        super(props);
        this._onPressButton = this._onPressButton.bind(this);
        this._navigatorRenderScene = this._navigatorRenderScene.bind(this);
    }
    _onPressButton() {
        fetch('http://127.0.0.1:3000/auth/facebook')
      .then((response) => {
          console.log(response);
      })
      .catch((error) => {
          throw error;
      });
    }
    _navigatorRenderScene (route, navigator) {
        switch (route.id) {
        case 'Login':
            return( <Login navigator = {navigator} /> );
        case 'Profile':
            return (<Profile navigator = {navigator} />);
        }
    }
    render() {
        return (
            <Navigator initialRoute = {{id: 'Login'}}
            renderScene = {this._navigatorRenderScene} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        backgroundColor: '#FF1744',
    },
    welcome: {
        textAlign: 'center',
        margin: 10,
        fontStyle: 'italic',
        color:'#fff',
        width: 160,
        opacity:0.6
    },
    form: {
        flex: 2,
    }
});
