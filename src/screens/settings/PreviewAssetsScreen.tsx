import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MotiView } from 'moti';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  AddToPlaylistIcon,
  AvatarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  DownloadIcon,
  EditIcon,
  HeartIcon,
  HeartInactiveIcon,
  HomeIcon,
  MailIcon,
  PlayIcon,
  PlaylistIcon,
  PlusIcon,
  RadioButtonIcon,
  RadioButtonInactiveIcon,
  RightArrowIcon,
  SaveIcon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  SliderIcon,
  TrashIcon,
  UploadImageIcon,
  VerticalDotsIcon,
  WarningIcon,
  XDeleteTextInputIcon,
  XIcon,
} from 'src/assets/icons';
import { Header, ScreenContainer } from 'src/components';
import { SettingsStackParamList } from 'src/navigation/types';
import { theme } from 'src/theme';

type Props = NativeStackScreenProps<SettingsStackParamList, 'PreviewAssets'>;

export function PreviewAssetsScreen({ navigation }: Props) {
  return (
    <ScreenContainer>
      <FastImage
        className="absolute inset-0"
        source={require('src/assets/img/background_375_812.png')}
      />
      <Header
        headerTitle="Preview Assets"
        headerLeft={
          <TouchableOpacity
            hitSlop={theme.hitSlopIcon}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </TouchableOpacity>
        }
      />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-1 items-center justify-center">
          <Text className="mt-16 text-4xl font-bold text-slate-100">
            Preview Icons
          </Text>
          <Text className="mt-4 text-base font-medium italic text-slate-100">
            Scroll horizontally to see more
          </Text>
          <MotiView
            className="mt-8 flex-1"
            from={{ opacity: 0.8, translateX: -40 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 500 }}
          >
            <ScrollView
              className="flex-1 space-x-4"
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <AddToPlaylistIcon className="h-5 w-5 text-primary" />
              <AddToPlaylistIcon className="h-5 w-5 text-slate-100" />
              <AvatarIcon className="h-5 w-5 text-slate-100" />
              <ChevronLeftIcon className="h-5 w-5 text-slate-100" />
              <ChevronDownIcon className="h-5 w-5 text-slate-100" />
              <DownloadIcon className="h-5 w-5 text-primary" />
              <DownloadIcon className="h-5 w-5 text-slate-100" />
              <EditIcon className="h-5 w-5 text-slate-100" />
              <HeartIcon className="h-5 w-5 text-primary" />
              <HeartInactiveIcon className="h-5 w-5 text-slate-100" />
              <HomeIcon className="h-5 w-5 text-primary" />
              <HomeIcon className="h-5 w-5 text-slate-100" />
              <MailIcon className="h-5 w-5 text-primary" />
              <PlayIcon className="h-5 w-5 text-slate-100" />
              <PlaylistIcon className="h-5 w-5 text-primary" />
              <PlaylistIcon className="h-5 w-5 text-slate-100" />
              <PlusIcon className="h-4 w-5 text-slate-100" />
              <RadioButtonIcon className="h-5 w-5 text-primary" />
              <RadioButtonInactiveIcon className="h-5 w-5 text-slate-100" />
              <RightArrowIcon className="h-5 w-5 text-slate-100" />
              <SaveIcon className="h-5 w-5 text-slate-100" />
              <SearchIcon className="h-5 w-5 text-slate-100" />
              <SettingsIcon className="h-5 w-5 text-primary" />
              <SettingsIcon className="h-5 w-5 text-slate-100" />
              <ShareIcon className="h-5 w-5 text-primary" />
              <ShareIcon className="h-5 w-5 text-slate-100" />
              <SliderIcon className="h-5 w-5 text-primary" />
              <TrashIcon className="h-5 w-5 text-slate-100" />
              <VerticalDotsIcon className="h-4 w-5 text-slate-100" />
              <UploadImageIcon className="h-5 w-5 text-slate-100" />
              <WarningIcon className="h-5 w-5 text-primary" />
              <XDeleteTextInputIcon className="h-5 w-5 text-slate-100" />
              <XIcon className="h-4 w-5 text-slate-100" />
            </ScrollView>
          </MotiView>
          <Text className="mt-16 text-4xl font-bold text-slate-100">
            Preview Images
          </Text>
          <Text className="mt-4 text-base font-medium italic text-slate-100">
            Scroll horizontally to see more
          </Text>
          <MotiView
            className="mt-8 flex-1"
            from={{ opacity: 0.8, translateX: 40 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 500 }}
          >
            <ScrollView
              className="flex-row space-x-4"
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <FastImage
                className="h-15 w-15"
                source={require('src/assets/img/behance.png')}
              />
              <FastImage
                className="h-15 w-15"
                source={require('src/assets/img/dribbble.png')}
              />
              <FastImage
                className="h-15 w-15"
                source={require('src/assets/img/facebook.png')}
              />
              <FastImage
                className="h-15 w-15"
                source={require('src/assets/img/link.png')}
              />
              <FastImage
                className="h-15 w-15"
                source={require('src/assets/img/messenger.png')}
              />
              <FastImage
                className="h-15 w-15"
                source={require('src/assets/img/pinterest.png')}
              />
              <FastImage
                className="h-15 w-15"
                source={require('src/assets/img/telegram.png')}
              />
              <FastImage
                className="h-15 w-15"
                source={require('src/assets/img/tumblr.png')}
              />
              <FastImage
                className="h-15 w-15"
                source={require('src/assets/img/twitter.png')}
              />
              <FastImage
                className="h-15 w-15"
                source={require('src/assets/img/whatsapp.png')}
              />
              <FastImage
                className="h-15 w-15"
                source={require('src/assets/img/youtube.png')}
              />
            </ScrollView>
          </MotiView>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
