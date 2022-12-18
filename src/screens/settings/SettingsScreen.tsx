import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  AvatarIcon,
  EditIcon,
  MailIcon,
  SettingsIcon,
  WarningIcon,
} from 'src/assets/icons';
import { HorizontalLine, ScreenContainer } from 'src/components';
import { SettingsStackParamList } from 'src/navigation/types';

type Props = NativeStackScreenProps<SettingsStackParamList, 'Settings'>;

export function SettingsScreen({ navigation }: Props) {
  return (
    <ScreenContainer>
      <FastImage
        className="absolute inset-0"
        source={require('src/assets/img/background_375_812.png')}
      />
      <View className="mt-6 flex-row space-x-4">
        <FastImage
          className="h-12 w-12 rounded-full"
          source={require('src/assets/img/settings/avatar_50_50.png')}
        />
        <View>
          <Text className="text-xl font-semibold text-white">
            Angelina Suhova
          </Text>
          <Text className="text-sm text-white opacity-50">@angelok</Text>
        </View>
      </View>

      <HorizontalLine />
      <View className="mt-5 space-y-2">
        <TouchableOpacity
          className="flex-row items-center py-2"
          onPress={() => navigation.navigate('UpdateProfile')}
        >
          <AvatarIcon className="h-6 w-6 text-primary" />
          <Text className="ml-3 text-white">Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center py-2"
          onPress={() => navigation.navigate('SettingsDetail')}
        >
          <SettingsIcon className="h-6 w-6 text-primary" />
          <Text className="ml-3 text-white">Settings</Text>
        </TouchableOpacity>
      </View>

      <HorizontalLine />
      <View className="mt-5 space-y-2">
        <TouchableOpacity
          className="flex-row items-center py-2"
          onPress={() => navigation.navigate('Contact')}
        >
          <MailIcon className="h-6 w-6 text-primary" />
          <Text className="ml-3 text-white">Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center py-2"
          onPress={() => navigation.navigate('AboutAuthor')}
        >
          <WarningIcon className="h-6 w-6 text-primary" />
          <Text className="ml-3 text-white">About the author</Text>
        </TouchableOpacity>
      </View>

      <HorizontalLine />
      <View className="mt-5 space-y-2">
        <TouchableOpacity
          className="flex-row items-center py-2"
          onPress={() => navigation.navigate('PreviewAssets')}
        >
          <EditIcon className="h-6 w-6 text-primary" />
          <Text className="ml-3 text-white">Preview Assets</Text>
        </TouchableOpacity>
      </View>

      <HorizontalLine />
      <View className="mt-5 space-y-2">
        <TouchableOpacity>
          <Text className="text-white">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}
