import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ChevronLeftIcon } from 'src/assets/icons';
import { Header, HorizontalLine, ScreenContainer } from 'src/components';
import { SettingsStackParamList } from 'src/navigation/types';
import { theme } from 'src/theme';

type Props = NativeStackScreenProps<SettingsStackParamList, 'Contact'>;

export function ContactScreen({ navigation }: Props) {
  return (
    <ScreenContainer hasBackground>
      <Header
        headerTitle="Contacts"
        headerLeft={
          <TouchableOpacity
            hitSlop={theme.hitSlopIcon}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </TouchableOpacity>
        }
      />
      <HorizontalLine />
      <View className="mt-8 space-y-5">
        <TouchableOpacity className="flex-row items-center">
          <FastImage
            className="h-15 w-15"
            source={require('src/assets/img/behance.png')}
          />
          <Text className="ml-4 text-xl font-semibold text-white">
            behance.net
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center">
          <FastImage
            className="h-15 w-15"
            source={require('src/assets/img/pinterest.png')}
          />
          <Text className="ml-4 text-xl font-semibold text-white">
            pinterest.com
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center">
          <FastImage
            className="h-15 w-15"
            source={require('src/assets/img/facebook.png')}
          />
          <Text className="ml-4 text-xl font-semibold text-white">
            facebook.com
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}
