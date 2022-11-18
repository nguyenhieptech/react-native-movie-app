import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Pressable, Text, View } from 'react-native';
import {
  DownloadIcon,
  HomeIcon,
  PlaylistIcon,
  SettingsIcon,
} from 'src/assets/icons';
import { classNames } from 'src/utils';
import DownloadStack from './DownloadStack';
import HomeStack from './HomeStack';
import PlaylistStack from './PlaylistStack';
import SettingsStack from './SettingsStack';

// @see https://reactnavigation.org/docs/tab-based-navigation

export type MainTabsNavigatorParamList = {
  HomeStack: undefined;
  PlaylistStack: undefined;
  DownloadStack: undefined;
  SettingsStack: undefined;
};

const Tabs = createBottomTabNavigator<MainTabsNavigatorParamList>();

export function MainBottomTabsNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarIcon: ({ focused }) => {
        //   return (
        //     <View className="h-full w-full items-center justify-center border border-t-2 border-primary bg-black">
        //       {route.name === 'HomeStack' && (
        //         <HomeIcon
        //           className={classNames(
        //             'h-5 w-5',
        //             focused
        //               ? 'text-primary opacity-100'
        //               : 'text-white opacity-80'
        //           )}
        //         />
        //       )}
        //       {route.name === 'PlaylistStack' && (
        //         <PlaylistIcon
        //           className={classNames(
        //             'h5 w-5',
        //             focused
        //               ? 'text-primary opacity-100'
        //               : 'text-white opacity-80'
        //           )}
        //         />
        //       )}
        //       {route.name === 'DownloadStack' && (
        //         <DownloadIcon
        //           className={classNames(
        //             'h5 w-5',
        //             focused
        //               ? 'text-primary opacity-100'
        //               : 'text-white opacity-80'
        //           )}
        //         />
        //       )}
        //       {route.name === 'SettingsStack' && (
        //         <SettingsIcon
        //           className={classNames(
        //             'h5 w-5',
        //             focused
        //               ? 'text-primary opacity-100'
        //               : 'text-white opacity-80'
        //           )}
        //         />
        //       )}
        //     </View>
        //   );
        // },
      })}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="HomeStack"
        component={HomeStack}
        options={() => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            return (
              <HomeIcon
                className={classNames(
                  'h-5 w-5',
                  focused ? 'text-primary opacity-100' : 'text-white opacity-80'
                )}
              />
            );
          },
        })}
      />
      <Tabs.Screen
        name="PlaylistStack"
        component={PlaylistStack}
        options={() => ({
          tabBarLabel: 'Playlist',
          tabBarIcon: ({ focused }) => {
            return (
              <PlaylistIcon
                className={classNames(
                  'h-5 w-5',
                  focused ? 'text-primary opacity-100' : 'text-white opacity-80'
                )}
              />
            );
          },
        })}
      />
      <Tabs.Screen
        name="DownloadStack"
        component={DownloadStack}
        options={() => ({
          tabBarLabel: 'Download',
          tabBarIcon: ({ focused }) => {
            return (
              <DownloadIcon
                className={classNames(
                  'h-5 w-5',
                  focused ? 'text-primary opacity-100' : 'text-white opacity-80'
                )}
              />
            );
          },
        })}
      />
      <Tabs.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={() => ({
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused }) => {
            return (
              <SettingsIcon
                className={classNames(
                  'h-5 w-5',
                  focused ? 'text-primary opacity-100' : 'text-white opacity-80'
                )}
              />
            );
          },
        })}
      />
    </Tabs.Navigator>
  );
}

/**
 * Custom Bottom Tab Bar
 * @see https://reactnavigation.org/docs/bottom-tab-navigator/#props
 */
export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View className="flex-row">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const tabLabel =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const tabIcon =
          options.tabBarIcon !== undefined ? options.tabBarIcon : () => {};

        const isFocused = state.index === index;

        function onPress() {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name, {
              name: route.name,
              merge: true,
            });
          }
        }

        function onLongPress() {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        }

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
            className="h-20 flex-1 items-center justify-center bg-black"
          >
            <View className="items-center">
              {tabIcon({ focused: isFocused, color: '', size: 0 })}
              {typeof tabLabel === 'string' ? (
                <Text
                  className={classNames(
                    'mt-1',
                    isFocused
                      ? 'text-primary opacity-100'
                      : 'text-white opacity-80'
                  )}
                >
                  {tabLabel}
                </Text>
              ) : null}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
