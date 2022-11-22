import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from 'src/screens/SplashScreen';
import { AppStackParamList } from '../types';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function CommonScreensStackNavigator() {
  return (
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Group>
  );
}
