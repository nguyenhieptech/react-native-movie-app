import { SafeAreaView, StatusBar } from 'react-native';
import { AppNavigator } from 'src/navigation';
import { useForegroundEvents } from 'src/services/notifications';
import { AppProvider } from 'src/providers/AppProvider';

function App() {
  useForegroundEvents();

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
