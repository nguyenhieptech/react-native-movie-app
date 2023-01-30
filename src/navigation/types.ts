/**
 * Organizing types
 *
 * When writing types for React Navigation, there are a couple of things we recommend to keep things organized.
 * 1. It's good to create a separate files (e.g. navigation/types.tsx) which contains the types related to React Navigation.
 * 2. Instead of using CompositeNavigationProp directly in your components, it's better to create a helper type that you can reuse.
 * 3. Specifying a global type for your root navigator would avoid manual annotations in many places.
 *
 * @see https://reactnavigation.org/docs/typescript#organizing-types - v6
 */

/**
 * The types divide into 3 parts:
 * 1. MainBottomTabsNavigatorParamList
 * 2. AppStackParamList
 * 3. CommonScreensStackNavigatorParamList
 *
 * Types được chia thành 3 nhóm chính:
 *
 * 1. MainBottomTabsNavigatorParamList - type navigation cho (những màn sử dụng, những màn nằm trong) Bottom Tab
 * Ví dụ như HomeScreen, HomeMovieScreen, v.v
 *
 * 2. AppStackParamList - type navigation cho toàn bộ app. Sẽ bao gồm CommonScreensStackNavigatorParamList.
 *
 * 3. CommonScreensStackNavigatorParamList - type navigation cho những màn KHÔNG sử dụng hay những màn nằm ngoài Bottom Tab.
 * Ví dụ như màn Hỏi tên ban đầu, trình độ của bạn (có thể hình dung khi dùng các app học ngoại ngữ)
 */

import { NavigatorScreenParams } from '@react-navigation/native';

// * CommonScreensStackNavigatorParamList
export type CommonScreensStackNavigatorParamList = {
  Splash: undefined;
};

// * AppStackParamList
export type AppStackParamList = {
  MainBottomTabs: NavigatorScreenParams<MainBottomTabsNavigatorParamList>;
} & CommonScreensStackNavigatorParamList;

// * MainBottomTabsNavigatorParamList types
export type DownloadStackParamList = {
  Download: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  HomeHistory: undefined;
  HomeNewMovie: undefined;
};

export type PlaylistStackParamList = {
  Playlist: undefined;
  DetailMovie: undefined;
  CreatePlaylist: undefined;
};

export type SettingsStackParamList = {
  AboutAuthor: undefined;
  Contact: undefined;
  PreviewAssets: undefined;
  SettingsDetail: undefined;
  Settings: undefined;
  UpdateProfile: undefined;
  PushNotifications: undefined;
};

/**
 * You can navigate to a screen in a nested navigator by passing screen and params properties for the nested screen:
 * ```tsx
 * navigation.navigate('Home', {
 *   screen: 'Feed',
 *   params: { sort: 'latest' },
 * });
 * ```
 *
 * To be able to type check this, we need to extract the params from
 * the screen containing the nested navigator.
 * This can be done using the NavigatorScreenParams utility:
 *
 * ```tsx
 * import { NavigatorScreenParams } from '@react-navigation/native';
 *
 * type TabParamList = {
 *   Home: NavigatorScreenParams<StackParamList>;
 *   Profile: { userId: string };
 * }
 * ```
 * @see https://reactnavigation.org/docs/typescript#nesting-navigators - v6
 */
export type MainBottomTabsNavigatorParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  PlaylistStack: NavigatorScreenParams<PlaylistStackParamList>;
  DownloadStack: NavigatorScreenParams<DownloadStackParamList>;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
};
