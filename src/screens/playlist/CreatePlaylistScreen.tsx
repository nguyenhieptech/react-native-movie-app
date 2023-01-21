import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import {
  ChevronLeftIcon,
  RadioButtonIcon,
  RadioButtonInactiveIcon,
  UploadImageIcon,
} from 'src/assets/icons';
import {
  CustomButton,
  CustomTextInput,
  FormErrorMessage,
  Header,
  HorizontalLine,
  ScreenContainer,
} from 'src/components';
import { PlaylistStackParamList } from 'src/navigation/types';
import { theme } from 'src/theme';
import { z } from 'zod';

type CreatePlaylistFormData = z.infer<typeof CreatePlaylistFormSchema>;

const CreatePlaylistFormSchema = z.object({
  playlist_name: z
    .string()
    .min(1, { message: 'Playlist name cannot be empty.' }),
  playlist_description: z.string().min(1, {
    message: 'Playlist description cannot be empty.',
  }),
  playlist_type: z
    .string()
    .min(1, { message: 'Playlist type cannot be empty.' }),
});

type Props = NativeStackScreenProps<PlaylistStackParamList, 'CreatePlaylist'>;

export function CreatePlaylistScreen({ navigation }: Props) {
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreatePlaylistFormData>({
    resolver: zodResolver(CreatePlaylistFormSchema),
    defaultValues: {
      playlist_name: '',
      playlist_description: '',
      playlist_type: 'closed',
    },
  });

  function handleOnSubmit(data: CreatePlaylistFormData) {
    Alert.alert(JSON.stringify(data));
    console.log('submit');
  }

  return (
    <ScreenContainer hasBackground={true}>
      <Header
        headerTitle="Create a Playlist"
        headerLeft={
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            hitSlop={theme.hitSlopIcon}
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </TouchableOpacity>
        }
      />
      <HorizontalLine />

      {/* Create a playlist form */}
      <View className="mt-4 space-y-4">
        <View className="overflow-hidden rounded p-3">
          <View className="absolute inset-0 bg-white opacity-10" />
          <Text className="text-sm text-white opacity-50">Playlist Name</Text>
          <Controller
            control={control}
            name="playlist_name"
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Name"
                placeholderTextColor={theme.colors.placeholderTextColorInput}
              />
            )}
          />
          {errors.playlist_name ? (
            <FormErrorMessage>{errors.playlist_name.message}</FormErrorMessage>
          ) : null}
        </View>
        <View className="overflow-hidden rounded p-3">
          <View className="absolute inset-0 bg-white opacity-10" />
          <Text className="text-sm text-white opacity-50">
            Playlist Description
          </Text>
          <Controller
            control={control}
            name="playlist_description"
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Enter what the playlist will be about"
                placeholderTextColor={theme.colors.placeholderTextColorInput}
              />
            )}
          />
          {errors.playlist_description ? (
            <FormErrorMessage>
              {errors.playlist_description.message}
            </FormErrorMessage>
          ) : null}
        </View>
        <TouchableOpacity className="overflow-hidden rounded p-3">
          <View className="absolute inset-0 bg-white opacity-10" />
          <View className="flex-row space-x-4">
            <UploadImageIcon className="h-5 w-5 text-white" />
            <Text className="text-sm text-white opacity-90">
              Upload a playlist avatar
            </Text>
          </View>
        </TouchableOpacity>
        <View className="overflow-hidden rounded p-3">
          <View className="absolute inset-0 bg-white opacity-10" />
          <Text className="text-sm text-white opacity-50">Playlist Type</Text>
          <View className="mt-3 space-y-2">
            <TouchableOpacity
              className="flex-row items-center space-x-4"
              onPress={() => setValue('playlist_type', 'open')}
            >
              {watch('playlist_type') === 'open' ? (
                <RadioButtonIcon className="h-5 w-5 text-primary" />
              ) : (
                <RadioButtonInactiveIcon className="h-5 w-5 text-white" />
              )}

              <View className="">
                <Text className="text-white">Open</Text>
                <Text className="pr-4 text-sm text-white opacity-50">
                  The playlist can be viewed by anyone
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row items-center space-x-4"
              onPress={() => setValue('playlist_type', 'closed')}
            >
              {watch('playlist_type') === 'closed' ? (
                <RadioButtonIcon className="h-5 w-5 text-primary" />
              ) : (
                <RadioButtonInactiveIcon className="h-5 w-5 text-white" />
              )}
              <View>
                <Text className="text-white">Closed</Text>
                <Text className="pr-4 text-sm text-white opacity-50">
                  The playlist can only be viewed by the creator
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <CustomButton
        className=""
        text="Create a playlist"
        onPress={handleSubmit(handleOnSubmit)}
      />
    </ScreenContainer>
  );
}
