import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';

import Animated, { SlideInDown, SlideInUp } from 'react-native-reanimated';
export default function Home({navigation}) {
  const login = () => {
    navigation.navigate('login');
  };

  const signup = () => {
    navigation.navigate('signup');
  };
  
  return (
    <Animated.View style={styles.container}>
      <Animated.View entering={SlideInDown} exiting={SlideInUp} style={styles.content}>
        <Text style={styles.text}>sound<Text style={styles.subtext}>blast</Text></Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={{fontSize: 16}} onPress={login}>log in</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={{fontSize: 16}} onPress={signup}>sign up</Text>
          </Pressable>
        </View>
      </Animated.View>
      <StatusBar style="auto" />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  },
  button: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 84,
    paddingVertical: 8,
    borderRadius: 25
  },
  text: {
    color: '#FFF',
    fontSize: 24
  },
  subtext: {
    color: '#000'
  },
  buttonContainer: {
    
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  }
});
