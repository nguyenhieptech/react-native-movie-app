import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  HeartIcon,
  HeartInactiveIcon,
  PlusIcon,
  RightArrowIcon,
  SearchIcon,
} from 'src/assets/icons';
import { CustomButton, HorizontalLine, ScreenContainer } from 'src/components';
import { PlaylistStackParamList } from 'src/navigation/types';

type Props = NativeStackScreenProps<PlaylistStackParamList, 'Playlist'>;

export function PlaylistScreen({ navigation }: Props) {
  return (
    <ScreenContainer hasBackground hasHorizontalPadding>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-8 flex-row items-end justify-between">
          <Text className="text-2xl font-semibold text-white">Playlist</Text>
          <SearchIcon className="mb-1 h-5 w-5 text-white" />
        </View>
        <CustomButton
          onPress={() => navigation.navigate('CreatePlaylist')}
          leftIcon={<PlusIcon className="h-4 w-4 text-white" />}
          text="Create a new playlist"
        />
        <HorizontalLine />

        <View className="mt-6 flex-row items-center justify-between">
          <Text className="text-2xl font-semibold text-white">Favorites</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')}>
            <RightArrowIcon className="h-5 w-5 text-primary" />
          </TouchableOpacity>
        </View>
        <ScrollView
          className="mt-4 space-x-5"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {/* Playlist 1 */}
          <View className="relative rounded">
            <TouchableOpacity className="z-10">
              <HeartIcon className="absolute top-2 right-2 h-5 w-5 text-white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailMovie')}
            >
              <FastImage
                className="h-36 w-36 rounded-lg"
                source={require('src/assets/img/home_screen/playlist2_135_135.png')}
              />
            </TouchableOpacity>
            <View className="mt-2.5">
              <View className="flex-row space-x-2">
                <FastImage
                  className="h-4 w-4 rounded-lg"
                  source={require('src/assets/img/playlist/avatar1_14_14.png')}
                />
                <Text className="text-xs text-white opacity-50">Martini</Text>
              </View>
              <Text className="mt-0.5 text-sm font-semibold text-white">
                American School
              </Text>
              <Text className="text-xs font-normal text-white opacity-50">
                1 composition
              </Text>
            </View>
          </View>
        </ScrollView>
        <HorizontalLine />

        <View className="mt-6 flex-row items-center justify-between">
          <Text className="text-2xl font-semibold text-white">
            My playlists
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')}>
            <RightArrowIcon className="h-5 w-5 text-primary" />
          </TouchableOpacity>
        </View>
        <ScrollView
          className="mt-4 space-x-5"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {/* Playlist 2 */}
          <View className="relative rounded">
            <TouchableOpacity className="z-10">
              <HeartInactiveIcon className="absolute top-2 right-2 h-5 w-5 text-white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailMovie')}
            >
              <FastImage
                className="h-36 w-36 rounded-lg"
                source={require('src/assets/img/home_screen/playlist1_135_135.png')}
              />
            </TouchableOpacity>
            <View className="mt-2.5">
              <View className="flex-row space-x-2">
                <FastImage
                  className="h-4 w-4 rounded-lg"
                  source={require('src/assets/img/playlist/avatar2_14_14.png')}
                />
                <Text className="text-xs text-white opacity-50">Angelina</Text>
              </View>
              <Text className="mt-0.5 text-sm font-semibold text-white">
                Love stories
              </Text>
              <Text className="mt-0.5 text-xs font-normal text-white opacity-50">
                2 composition
              </Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </ScreenContainer>
  );
}
