import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Header, HorizontalLine, LinearProgressBar } from 'src/components';

export function HomeHistoryScreen() {
  return (
    <View className="flex-1 px-5">
      <FastImage
        className="absolute inset-0"
        source={require('src/assets/img/background_375_812.png')}
      />

      <Header headerTitle="History" />

      <ScrollView className="mt-3" showsVerticalScrollIndicator={false}>
        {/* Today */}
        <HorizontalLine />
        <View className="mt-6">
          <Text className="text-sm font-semibold text-white">Today</Text>
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

        {/* Yesterday */}
        <HorizontalLine />
        <View className="mt-6">
          <Text className="text-sm font-semibold text-white">Yesterday</Text>
          <ScrollView
            className="mt-5 space-x-5"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {/* History 1 */}
            <TouchableOpacity className="relative h-32 w-44">
              <FastImage
                className="absolute inset-0 h-full w-full rounded"
                source={require('src/assets/img/home_screen/history4_180_130.png')}
              />
              <FastImage
                className="absolute inset-0 h-full w-full"
                source={require('src/assets/img/home_screen/history_gradient_180_130.png')}
              />
              <LinearProgressBar />
              <View className="mt-2 h-full justify-between px-2">
                <View>
                  <Text className="text-xs font-semibold text-white">
                    Excellent students of easy behavior
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

        {/* Last week */}
        <HorizontalLine />
        <View className="mt-6">
          <Text className="text-sm font-semibold text-white">Last week</Text>
          <ScrollView
            className="mt-5 space-x-5"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {/* History 1 */}
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
            {/* History 2 */}
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
            {/* History 3 */}
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
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
