import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function Signup({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hi there! sign up now to start using soundblast.</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='full name' />
        <TextInput style={styles.input} placeholder='phone number' />
        <TextInput style={styles.input} placeholder='username' />
        <TextInput style={styles.input} placeholder='password' secureTextEntry={true} />
      </View>
      <Text style={{marginTop: 20}}>already have an account? <Text onPress={() => navigation.navigate('login')} style={{textDecorationLine: 'underline'}}>log in</Text></Text>
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
  },
  form: {
    marginTop: 30,
    flex: 0,
    gap: 8
  }
});