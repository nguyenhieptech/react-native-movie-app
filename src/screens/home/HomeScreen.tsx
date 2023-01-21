import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  HeartIcon,
  HeartInactiveIcon,
  RightArrowIcon,
  VerticalDotsIcon,
} from 'src/assets/icons';
import {
  HorizontalLine,
  LinearProgressBar,
  ScreenContainer,
  SearchInput,
} from 'src/components';
import { navigationRef } from 'src/navigation';
import { HomeStackParamList } from 'src/navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const [text, onChangeText] = useState('');

  function navigateToPlaylistStack() {
    navigationRef.navigate('MainBottomTabs', {
      screen: 'PlaylistStack',
      params: {
        screen: 'Playlist',
      },
    });
  }

  return (
    <ScreenContainer hasBackground={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="mt-8 text-2xl font-semibold text-white">Research</Text>
        <SearchInput
          value={text}
          onChangeText={onChangeText}
          placeholder="Search..."
        />

        {/* Playlists */}
        <HorizontalLine />
        <View>
          <View className="mt-6 flex-row items-center justify-between">
            <Text className="text-2xl font-semibold text-white">Playlists</Text>
            <TouchableOpacity onPress={() => navigateToPlaylistStack()}>
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
              <FastImage
                className="h-36 w-36 rounded-lg"
                source={require('src/assets/img/home_screen/playlist1_135_135.png')}
              />
              <View className="mt-2.5">
                <Text className="text-sm font-semibold text-white">
                  Love stories
                </Text>
                <Text className="text-xs font-normal text-white opacity-50">
                  1 composition
                </Text>
              </View>
            </View>
            {/* Playlist 2 */}
            <View className="relative rounded">
              <TouchableOpacity className="z-10">
                <HeartInactiveIcon className="absolute top-2 right-2 h-5 w-5 text-white" />
              </TouchableOpacity>
              <FastImage
                className="h-36 w-36 rounded-lg"
                source={require('src/assets/img/home_screen/playlist2_135_135.png')}
              />
              <View className="mt-2.5">
                <Text className="text-sm font-semibold text-white">
                  American schools
                </Text>
                <Text className="text-xs font-normal text-white opacity-50">
                  2 composition
                </Text>
              </View>
            </View>
            {/* Playlist 3 */}
            <View className="relative rounded">
              <TouchableOpacity className="z-10">
                <HeartIcon className="absolute top-2 right-2 h-5 w-5 text-white" />
              </TouchableOpacity>
              <FastImage
                className="h-36 w-36 rounded-lg"
                source={require('src/assets/img/home_screen/playlist1_135_135.png')}
              />
              <View className="mt-2.5">
                <Text className="text-sm font-semibold text-white">Mafia</Text>
                <Text className="text-xs font-normal text-white opacity-50">
                  1 composition
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* New */}
        <HorizontalLine />
        <View>
          <View className="mt-6 flex-row items-center justify-between">
            <Text className="text-2xl font-semibold text-white">New</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeNewMovie')}
            >
              <RightArrowIcon className="h-5 w-5 text-primary" />
            </TouchableOpacity>
          </View>
          <View className="mt-4 space-y-4">
            {/* New 1 */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row">
                <FastImage
                  className="h-24 w-16 rounded"
                  source={require('src/assets/img/home_screen/new_65_90.png')}
                />
                <View className="ml-4 max-w-[65%]">
                  <Text className="text-xs uppercase text-white opacity-50">
                    Film
                  </Text>
                  <Text className="mt-2.5 text-sm font-semibold text-white">
                    High School: The worst years of my life
                  </Text>
                  <Text className="mt-1 text-xs text-white opacity-50">
                    2016, 92 minutes
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
              >
                <VerticalDotsIcon className="h-5 w-5 text-white" />
              </TouchableOpacity>
            </View>
            {/* New 2 */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row">
                <FastImage
                  className="h-24 w-16 rounded"
                  source={require('src/assets/img/home_screen/new2_65_90.png')}
                />
                <View className="ml-4 max-w-[65%]">
                  <Text className="text-xs uppercase text-white opacity-50">
                    Serial
                  </Text>
                  <Text className="mt-2.5 text-sm font-semibold text-white">
                    Peacemaker
                  </Text>
                  <Text className="mt-1 text-xs text-white opacity-50">
                    2 seasons
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
              >
                <VerticalDotsIcon className="h-5 w-5 text-white" />
              </TouchableOpacity>
            </View>
            {/* New 3 */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row">
                <FastImage
                  className="h-24 w-16 rounded"
                  source={require('src/assets/img/home_screen/new3_65_90.png')}
                />
                <View className="ml-4 max-w-[65%]">
                  <Text className="text-xs uppercase text-white opacity-50">
                    Film
                  </Text>
                  <Text className="mt-2.5 text-sm font-semibold text-white">
                    The Fallout
                  </Text>
                  <Text className="mt-1 text-xs text-white opacity-50">
                    2021, 96 minutes
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
              >
                <VerticalDotsIcon className="h-5 w-5 text-white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* History */}
        <HorizontalLine />
        <View>
          <View className="mt-6 flex-row items-center justify-between">
            <Text className="text-2xl font-semibold text-white">History</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeHistory')}
            >
              <RightArrowIcon className="h-5 w-5 text-primary" />
            </TouchableOpacity>
          </View>
          <ScrollView
            className="mt-5 space-x-5"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {/* History 1 */}
            <TouchableOpacity className="relative h-32 w-44">
              <FastImage
                className="absolute inset-0 h-full w-full rounded"
                source={require('src/assets/img/home_screen/history_180_130.png')}
              />
              <FastImage
                className="absolute inset-0 h-full w-full"
                source={require('src/assets/img/home_screen/history_gradient_180_130.png')}
              />
              <LinearProgressBar />
              <View className="mt-2 h-full justify-between px-2">
                <View>
                  <Text className="text-xs font-semibold text-white">
                    Teen Wolf
                  </Text>
                  <Text className="text-xs text-white opacity-50">
                    Season 1 / Series 3
                  </Text>
                </View>
                <Text className="mb-4 text-right text-primary">41:25</Text>
              </View>
            </TouchableOpacity>
            {/* History 2 */}
            <TouchableOpacity className="relative h-32 w-44">
              <FastImage
                className="absolute inset-0 h-full w-full rounded"
                source={require('src/assets/img/home_screen/history2_180_130.png')}
              />
              <FastImage
                className="absolute inset-0 h-full w-full"
                source={require('src/assets/img/home_screen/history_gradient_180_130.png')}
              />
              <LinearProgressBar />
              <View className="mt-2 h-full justify-between px-2">
                <View>
                  <Text className="text-xs font-semibold text-white">
                    Teen Wolf
                  </Text>
                  <Text className="text-xs text-white opacity-50">
                    Season 1 / Series 2
                  </Text>
                </View>
                <Text className="mb-4 text-right text-primary">26:15</Text>
              </View>
            </TouchableOpacity>
            {/* History 3 */}
            <TouchableOpacity className="relative h-32 w-44">
              <FastImage
                className="absolute inset-0 h-full w-full rounded"
                source={require('src/assets/img/home_screen/history3_180_130.png')}
              />
              <FastImage
                className="absolute inset-0 h-full w-full"
                source={require('src/assets/img/home_screen/history_gradient_180_130.png')}
              />
              <LinearProgressBar />
              <View className="mt-2 h-full justify-between px-2">
                <View>
                  <Text className="text-xs font-semibold text-white">
                    Friends
                  </Text>
                  <Text className="text-xs text-white opacity-50">
                    Season 1 / Series 2
                  </Text>
                </View>
                <Text className="mb-4 text-right text-primary">30:47</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
