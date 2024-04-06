import React from 'react';
import {StyleSheet, Text, Button, SafeAreaView, TextInput} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>text</Text>
      <Button title="버튼" />
      <TextInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

export default App;
