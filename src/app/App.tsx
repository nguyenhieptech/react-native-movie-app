import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { AppNavigator } from 'src/navigation';
import { AppProvider } from 'src/providers/AppProvider';

function App() {
  return (
    <AppProvider>
      <SafeAreaView className="flex-1 bg-black">
        <AppNavigator />
        <StatusBar barStyle="light-content" backgroundColor="#000" />
      </SafeAreaView>
    </AppProvider>
  );
}

export default App;
