import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {
  HomeScreen,
  HomeHistoryScreen,
  HomeNewMovieScreen,
} from 'src/screens/home';
import { AppProvider } from 'src/providers/AppProvider';

function App() {
  return (
    <AppProvider>
      <SafeAreaView className="flex-1 bg-black">
        <HomeNewMovieScreen />
        <StatusBar barStyle="light-content" backgroundColor="#000" />
      </SafeAreaView>
    </AppProvider>
  );
}

export default App;
