import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

export default class Profile extends Component {
    render() {
        return (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
            />
            <TextInput
              style={styles.input}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
    },
    input: {
        height:40,
        backgroundColor: '#F8BBD0',
        marginBottom: 20
    }
});