import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AppStackParamList } from 'src/navigation/types';

type Props = NativeStackScreenProps<AppStackParamList, 'Splash'>;

export function SplashScreen({ navigation }: Props) {
  return (
    <View className="flex-1 items-center justify-center bg-slate-800">
      <Text className="mt-4 text-4xl font-bold text-slate-100">
        Splash Screen
      </Text>
      <TouchableOpacity
        className="mt-6"
        onPress={() =>
          navigation.navigate('MainBottomTabs', {
            screen: 'HomeStack',
            params: {
              screen: 'HomeHistory',
            },
          })
        }
      >
        <Text className="text-center text-white">
          Demo go to specific screen inside HomeStack/HomeHistoryScreen
        </Text>
      </TouchableOpacity>
    </View>
  );
}
