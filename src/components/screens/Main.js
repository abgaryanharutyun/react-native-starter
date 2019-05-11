import React from 'react';
import Input from '../UI/Input';
import { Text, View, StyleSheet, Button } from 'react-native'

export default (props) => console.log(props) || (<View style={Styles.container}>
  <Text> Login</Text>
  <Input placeholder={'Username'} />
  <Button
    style={Styles.aa}
    onPress={() => props.navigation.navigate('Details')} title={'ssss'} />
</View>);


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    padding: 20
  },
  aa: {
    margin: 59
  }
});