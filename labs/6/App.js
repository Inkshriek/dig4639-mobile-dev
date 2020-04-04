import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QuestionList from "./components/QuestionList/index.js";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <QuestionList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  }
});
