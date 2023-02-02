import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ChevronLeftIcon } from 'src/assets/icons';
import { Header, HorizontalLine, ScreenContainer } from 'src/components';
import { SettingsStackParamList } from 'src/navigation/types';
import { theme } from 'src/theme';

type Props = NativeStackScreenProps<SettingsStackParamList, 'AboutAuthor'>;

export function AboutAuthorScreen({ navigation }: Props) {
  return (
    <ScreenContainer hasBackground hasHorizontalPadding>
      <Header
        headerTitle="About the author"
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
      <View className="mt-5 flex-row items-center space-x-6">
        <FastImage
          className="h-36 w-36 rounded-md"
          source={require('src/assets/img/settings/author_133_132.png')}
        />

        <View>
          <Text className="text-xl font-semibold text-white">
            Angelina Suhova
          </Text>
          <Text className="text-sm text-white">UX/UI Designer</Text>
        </View>
      </View>

      <HorizontalLine />
      <View className="mt-5">
        <Text className="text-sm text-white opacity-80">
          Hi, my name is Angelina. I have been designing since 2019, I know
          well: Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Figma.
        </Text>

        <Text className="mt-2 text-sm text-white opacity-80">
          This is my first experience in designing full-fledged mobile
          applications.
        </Text>
        <Text className="mt-2 text-sm text-white opacity-80">
          This application is completely made by me. The following tasks were
          solved: development of application logic, prototype, design,
          prototyping and animation customization.
        </Text>
        <Text className="mt-2 text-sm text-white opacity-80">
          I want to get a job in an IT company as a UX /UI designer and develop
          further in this direction.
        </Text>
      </View>
    </ScreenContainer>
  );
}
