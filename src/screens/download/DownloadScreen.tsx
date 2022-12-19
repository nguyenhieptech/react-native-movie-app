import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SliderIcon, VerticalDotsIcon } from 'src/assets/icons';
import { HorizontalLine, SearchInput } from 'src/components';

export function DownloadScreen() {
  const [text, onChangeText] = useState('');

  return (
    <View className="flex-1 bg-black">
      <FastImage
        className="absolute inset-0"
        source={require('src/assets/img/background_375_812.png')}
      />
      <View className="px-5">
        <Text className="mt-8 text-2xl font-semibold text-white">Search</Text>
        <SearchInput
          value={text}
          onChangeText={onChangeText}
          placeholder="Search..."
        />
        {/* Download */}
        <HorizontalLine />
        <ScrollView>
          <View className="mt-6 flex-row items-center justify-between">
            <Text className="text-2xl font-semibold text-white">Download</Text>
            <TouchableOpacity>
              <SliderIcon className="h-5 w-5 text-primary" />
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
        </ScrollView>
      </View>
    </View>
  );
}
