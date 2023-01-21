import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from 'src/assets/icons';
import {
  CustomSwitch,
  Header,
  HorizontalLine,
  ScreenContainer,
} from 'src/components';
import { SettingsStackParamList } from 'src/navigation/types';
import { theme } from 'src/theme';

type Props = NativeStackScreenProps<SettingsStackParamList, 'SettingsDetail'>;

export function SettingsDetailScreen({ navigation }: Props) {
  const [isVolumeEnabled, setIsVolumeEnabled] = useState(false);
  const [isBrightnessEnabled, setIsBrightnessEnabled] = useState(false);
  const [isSavingNetworkEnabled, setIsSavingNetworkEnabled] = useState(false);
  const [isSleepTimerEnabled, setIsSleepTimerEnabled] = useState(false);

  return (
    <ScreenContainer hasBackground={true}>
      <Header
        headerTitle="Settings"
        headerLeft={
          <TouchableOpacity
            hitSlop={theme.hitSlopIcon}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </TouchableOpacity>
        }
      />
      <HorizontalLine />
      <View className="mt-5">
        <Text className="text-xl font-semibold text-white">Gestures</Text>
        <View className="mt-4 space-y-6">
          <View className="flex-row items-center justify-between">
            <Text className="text-sm text-white">Volume</Text>
            <CustomSwitch
              active={isVolumeEnabled}
              onActiveChange={() =>
                setIsVolumeEnabled((prevState) => !prevState)
              }
            />
          </View>
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-white">Brightness</Text>
              <CustomSwitch
                active={isBrightnessEnabled}
                onActiveChange={() =>
                  setIsBrightnessEnabled((prevState) => !prevState)
                }
              />
            </View>
            <Text className="mt-1 w-4/5 text-white opacity-50">
              Move your finger up or down to change the volume on the right or
              brightness on the left side of the screen
            </Text>
          </View>
        </View>
      </View>

      <HorizontalLine />
      <View className="mt-5">
        <Text className="text-xl font-semibold text-white">Additionally</Text>
        <View className="mt-4 space-y-6">
          <View className="flex-row items-center justify-between">
            <Text className="text-sm text-white">
              Saving mobile network traffic
            </Text>
            <CustomSwitch
              active={isSavingNetworkEnabled}
              onActiveChange={() =>
                setIsSavingNetworkEnabled((prevState) => !prevState)
              }
            />
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="text-sm text-white">Sleep timer</Text>
            <CustomSwitch
              active={isSleepTimerEnabled}
              onActiveChange={() =>
                setIsSleepTimerEnabled((prevState) => !prevState)
              }
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
}
