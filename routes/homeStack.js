import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from '../src/screens/login/Login';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return ( 
    <Stack.Navigator>
      <Stack.Screen name="Home" />
      <Stack.Screen name='login' component={login} />
    </Stack.Navigator>
  )
}