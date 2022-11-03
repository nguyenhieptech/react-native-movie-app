import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { PreviewAssets } from 'src/screens';

function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-700">
      <PreviewAssets />
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

export default App;
