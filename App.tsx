import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-700">
      <Text className="font-bold text-5xl text-white">
        Hi, I'm Hiep, a Pullstack Developer.
      </Text>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

export default App;
