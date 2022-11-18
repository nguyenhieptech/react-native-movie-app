import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import {
  DownloadIcon,
  PlayIcon,
  PlaylistIcon,
  PlusIcon,
  ShareIcon,
  SliderIcon,
  VerticalDotsIcon,
  XIcon,
} from 'src/assets/icons';
import {
  CustomButton,
  Header,
  HorizontalLine,
  SearchInput,
} from 'src/components';

export function HomeNewMovieScreen() {
  const [searchText, setSearchText] = useState('');
  const [isMovieModalVisible, setIsMovieModalVisible] = useState(false);
  const [isAddToPlaylistModalVisible, setIsAddToPlaylistModalVisible] =
    useState(false);
  const [isToShareModalVisible, setIsToShareModalVisible] = useState(false);

  return (
    <View className="flex-1">
      <FastImage
        className="absolute inset-0"
        source={require('src/assets/img/background_375_812.png')}
      />

      <View className="px-5">
        <Header headerTitle="New movies" />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="mt-8 text-2xl font-semibold text-white">
            Research
          </Text>
          <SearchInput value={searchText} onChangeText={setSearchText} />

          {/* Movies */}
          <HorizontalLine />
          <View>
            <View className="mt-6 flex-row items-center justify-between">
              <Text className="text-2xl font-semibold text-white">Movies</Text>
              <TouchableOpacity
                hitSlop={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <SliderIcon className="h-5 w-5 text-primary" />
              </TouchableOpacity>
            </View>
            <View className="mt-4 space-y-4">
              {/* Movie 1 */}
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
                <TouchableOpacity
                  onPress={() => setIsMovieModalVisible(true)}
                  hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
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
                <TouchableOpacity
                  onPress={() => setIsAddToPlaylistModalVisible(true)}
                  hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <VerticalDotsIcon className="h-5 w-5 text-white" />
                </TouchableOpacity>
              </View>
              {/* Movie 3 */}
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
                  onPress={() => setIsToShareModalVisible(true)}
                  hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <VerticalDotsIcon className="h-5 w-5 text-white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <MovieModals
        isMovieModalVisible={isMovieModalVisible}
        setIsMovieModalVisible={setIsMovieModalVisible}
        isAddToPlaylistModalVisible={isAddToPlaylistModalVisible}
        setIsAddToPlaylistModalVisible={setIsAddToPlaylistModalVisible}
        isToShareModalVisible={isToShareModalVisible}
        setIsToShareModalVisible={setIsToShareModalVisible}
      />
    </View>
  );
}

type MovieModalsProps = {
  isMovieModalVisible: boolean;
  setIsMovieModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isAddToPlaylistModalVisible: boolean;
  setIsAddToPlaylistModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isToShareModalVisible: boolean;
  setIsToShareModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MovieModals({
  isMovieModalVisible,
  setIsMovieModalVisible,
  isAddToPlaylistModalVisible,
  setIsAddToPlaylistModalVisible,
  isToShareModalVisible,
  setIsToShareModalVisible,
}: MovieModalsProps) {
  return (
    <View>
      <Modal
        className="m-0 flex-1 justify-end"
        testID={'movie-modal'}
        isVisible={isMovieModalVisible}
        onModalHide={() => setIsMovieModalVisible(false)}
        onBackdropPress={() => setIsMovieModalVisible(false)}
        animationOutTiming={600}
        swipeDirection="down"
        onSwipeComplete={() => setIsMovieModalVisible(false)}
      >
        <FastImage
          className="absolute bottom-0 h-100 w-full"
          source={require('src/assets/img/home_screen/movie_settings_background_375_399.png')}
        />
        <View className="h-100 w-full p-5">
          <View className="overflow-hidden rounded">
            <View className="absolute inset-0 bg-white opacity-5" />

            <View className="px-5 pt-5">
              <View className="flex-row items-center justify-between">
                <View className="max-w-[65%]">
                  <Text className="text-xs uppercase text-white opacity-70">
                    Film
                  </Text>
                  <Text className="mt-1 text-sm font-semibold text-white">
                    High School: The worst years of my life
                  </Text>
                  <Text
                    className="mt-1 text-xs text-white opacity-50"
                    numberOfLines={3}
                  >
                    13-year-old Rafe does not think of life without drawing. And
                    when the director at the new school selects and dissolves
                    his notebook with drawings in acid, the guy decides to take
                    revenge. The school has stupid rules, and Rafe will
                    creatively break them one by one.
                  </Text>
                  <Text className="mt-1 text-xs text-white opacity-50">
                    2016, 92 minutes
                  </Text>
                </View>
                <FastImage
                  className="h-32 w-20 rounded"
                  source={require('src/assets/img/home_screen/movie_1_80_122.png')}
                />
              </View>
            </View>

            <View className="mt-3 border border-white opacity-10" />

            <View className="flex-row items-center justify-center space-x-32 py-6 px-6">
              <TouchableOpacity
                className="items-center"
                hitSlop={{ top: 24, right: 24, bottom: 24, left: 24 }}
              >
                <PlayIcon className="h-5 w-5 text-white" />
              </TouchableOpacity>
              <TouchableOpacity
                className="items-center"
                hitSlop={{ top: 24, right: 24, bottom: 24, left: 24 }}
              >
                <DownloadIcon className="h-5 w-5 text-white" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-5 space-y-4">
            <TouchableOpacity
              className="ml-4 flex-row py-2"
              onPress={() => setIsMovieModalVisible(false)}
            >
              <PlaylistIcon className="h-5 w-5 text-primary" />
              <Text className="ml-5 text-white">Add to playlist</Text>
            </TouchableOpacity>
            <TouchableOpacity className="ml-4 flex-row py-2">
              <ShareIcon className="h-5 w-5 text-primary" />
              <Text className="ml-5 text-white">To share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Cho margin: 0 để modal sẽ bám sát vào màn của thiết bị */}
      <Modal
        className="m-0 flex-1 justify-end"
        testID={'add-to-play-list-modal'}
        isVisible={isAddToPlaylistModalVisible}
        onModalHide={() => setIsAddToPlaylistModalVisible(false)}
        onBackdropPress={() => setIsAddToPlaylistModalVisible(false)}
        animationOutTiming={600}
        swipeDirection="down"
        onSwipeComplete={() => setIsAddToPlaylistModalVisible(false)}
      >
        <FastImage
          className="absolute bottom-0 h-72 w-full"
          source={require('src/assets/img/home_screen/movie_settings_background_375_399.png')}
        />
        <View className="h-72 w-full p-5">
          <Header
            headerLeft={<XIcon className="h-4 w-4 text-white" />}
            headerTitle="Add to Playlist"
          />
          <HorizontalLine />
          <CustomButton
            leftIcon={<PlusIcon className="h-4 w-4 text-white" />}
            text="Create a new Playlist"
            onPress={() => setIsAddToPlaylistModalVisible(true)}
          />
          <View className="mt-5 flex-row items-center space-x-4">
            <FastImage
              className="h-16 w-16 rounded"
              source={require('src/assets/img/home_screen/playlist_preview_68_68.png')}
            />
            <View>
              <View className="flex-row space-x-2">
                <FastImage
                  className="h-3.5 w-3.5 rounded"
                  source={require('src/assets/img/home_screen/profile_preview_14_14.png')}
                />
                <Text className="text-xs text-white opacity-50">Angelok</Text>
              </View>
              <Text className="mt-1 text-sm font-semibold text-white">
                American school
              </Text>
              <Text className="mt-1 text-xs text-white opacity-50">
                1 composition
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        className="m-0 flex-1 justify-end"
        testID={'to-share-modal'}
        isVisible={isToShareModalVisible}
        onModalHide={() => setIsToShareModalVisible(false)}
        onBackdropPress={() => setIsToShareModalVisible(false)}
        animationOutTiming={600}
        scrollHorizontal={true}
        // swipeDirection="down" - không hoạt động cùng với scrollHorizontal
        // onSwipeComplete={() => setIsToShareModalVisible(false)}
        // propagateSwipe={true}
      >
        <FastImage
          className="absolute bottom-0 h-100 w-full"
          source={require('src/assets/img/home_screen/movie_settings_background_375_399.png')}
        />
        <View className="h-100 w-full p-5">
          <Header
            headerLeft={<XIcon className="h-4 w-4 text-white" />}
            headerTitle="To share"
          />
          <HorizontalLine />

          <ScrollView
            className="mt-5 flex-1 space-x-4"
            horizontal
            showsHorizontalScrollIndicator={true}
          >
            <FastImage
              className="h-18 w-18"
              source={require('src/assets/img/behance.png')}
            />
            <FastImage
              className="h-18 w-18"
              source={require('src/assets/img/dribbble.png')}
            />
            <FastImage
              className="h-18 w-18"
              source={require('src/assets/img/facebook.png')}
            />
            <FastImage
              className="h-18 w-18"
              source={require('src/assets/img/link.png')}
            />
            <FastImage
              className="h-18 w-18"
              source={require('src/assets/img/messenger.png')}
            />
            <FastImage
              className="h-18 w-18"
              source={require('src/assets/img/pinterest.png')}
            />
            <FastImage
              className="h-18 w-18"
              source={require('src/assets/img/telegram.png')}
            />
          </ScrollView>
          <View className="mb-8">
            <CustomButton text="Cancel" style={{ marginBottom: 10 }} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
