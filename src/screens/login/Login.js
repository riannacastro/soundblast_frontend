import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>welcome back! please sign in.</Text>
      <TextInput style={styles.input} placeholder='username' />
      <TextInput style={styles.input} placeholder='password' secureTextEntry={true} />
      <Text style={{marginTop: 20}}>need an account? <Text onPress={() => navigation.navigate('signup')} style={{textDecorationLine: 'underline'}}>sign up</Text></Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16
  },
  text: {
    color: '#FFF',
    fontSize: 24
  },
  input: {
    backgroundColor: '#FFF',
    paddingHorizontal: 82,
    paddingVertical: 10,
    borderRadius: 25
  }
});