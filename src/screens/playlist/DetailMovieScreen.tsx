import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {
  ChevronLeftIcon,
  HeartIcon,
  PlayIcon,
  ShareIcon,
  SliderIcon,
  VerticalDotsIcon,
} from 'src/assets/icons';
import { Header, HorizontalLine } from 'src/components';
import { PlaylistStackParamList } from 'src/navigation/types';
import { theme } from 'src/theme';
import { classNames } from 'src/utils';

type Props = NativeStackScreenProps<PlaylistStackParamList, 'DetailMovie'>;

export function DetailMovieScreen({ navigation }: Props) {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <View className="flex-1 bg-black">
      <FastImage
        className="absolute inset-0"
        source={require('src/assets/img/background_375_812.png')}
      />

      <View className="px-5">
        <Header
          headerTitle="Playlist"
          headerLeft={
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              hitSlop={theme.hitSlopIcon}
            >
              <ChevronLeftIcon className="h-5 w-5 text-white" />
            </TouchableOpacity>
          }
          headerRight={
            <TouchableOpacity>
              <HeartIcon className="h-5 w-5 text-white" />
            </TouchableOpacity>
          }
        />
        <HorizontalLine />
      </View>

      <View>
        <FastImage
          className="absolute top-0 h-50 w-full opacity-70"
          source={require('src/assets/img/playlist/playlist_detail_movie_375_200.png')}
        />
        <View className="h-36" />
        <LinearGradient
          useAngle={true}
          angle={140}
          className="absolute top-0 h-50 w-full opacity-[0.05]"
          colors={[
            theme.colors.primary,
            theme.colors.primary,
            'black',
            'black',
            theme.colors.primary,
            theme.colors.primary,
          ]}
        />
      </View>

      <ScrollView className="space-y-5 px-5">
        <View className="space-y-1">
          <View className="flex-row space-x-2">
            <FastImage
              className="h-4 w-4 rounded-lg"
              source={require('src/assets/img/playlist/avatar1_14_14.png')}
            />
            <Text className="text-xs text-white opacity-50">Martini</Text>
          </View>
          <Text className="text-2xl font-semibold text-white">
            Love stories
          </Text>
          <Text
            className={classNames(
              'w-2/3 text-xs text-white opacity-50'
              // isShowMore ? '' : 'truncate'
            )}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            From our parents' favorite movies to the best melodramas of the last
            five years. We have collected pictures about love, which are ideal
            for the evening of February 14.
          </Text>
        </View>
        <View className="mt-2 flex-row space-x-10">
          <TouchableOpacity>
            <PlayIcon className="h-5 w-5 text-white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <ShareIcon className="h-5 w-5 text-white" />
          </TouchableOpacity>
        </View>
        <HorizontalLine />
        <View className="mt-6 flex-row items-center justify-between">
          <Text className="text-2xl font-semibold text-white">Movies</Text>
          <TouchableOpacity hitSlop={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <SliderIcon className="h-5 w-5 text-primary" />
          </TouchableOpacity>
        </View>
        <View className="mt-4 space-y-4">
          {/* Movie 1 */}
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
            <TouchableOpacity hitSlop={theme.hitSlopIcon}>
              <VerticalDotsIcon className="h-5 w-5 text-white" />
            </TouchableOpacity>
          </View>
          {/* Movie 2 */}
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
            <TouchableOpacity hitSlop={theme.hitSlopIcon}>
              <VerticalDotsIcon className="h-5 w-5 text-white" />
            </TouchableOpacity>
          </View>
          {/* Movie 3 */}
          <View className="flex-row items-center justify-between">
            <TouchableOpacity className="flex-row">
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
            </TouchableOpacity>
            <TouchableOpacity hitSlop={theme.hitSlopIcon}>
              <VerticalDotsIcon className="h-5 w-5 text-white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
