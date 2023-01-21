import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon, SaveIcon, UploadImageIcon } from 'src/assets/icons';
import {
  CustomButton,
  CustomTextInput,
  FormErrorMessage,
  Header,
  HorizontalLine,
  ScreenContainer,
} from 'src/components';
import { SettingsStackParamList } from 'src/navigation/types';
import { theme } from 'src/theme';
import { z } from 'zod';

type UpdateProfileFormData = z.infer<typeof UpdateProfileFormSchema>;

const UpdateProfileFormSchema = z.object({
  user_name: z.string().min(1, { message: 'User name cannot be empty.' }),
  user_surname: z.string().min(1, {
    message: 'User surname cannot be empty.',
  }),
  user_nickname: z
    .string()
    .min(1, { message: 'User nickname cannot be empty.' }),
});

type Props = NativeStackScreenProps<SettingsStackParamList, 'UpdateProfile'>;

export function UpdateProfileScreen({ navigation }: Props) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(UpdateProfileFormSchema),
    defaultValues: {
      user_name: '',
      user_surname: '',
      user_nickname: '',
    },
  });

  function handleOnSubmit(data: UpdateProfileFormData) {
    Alert.alert(JSON.stringify(data));
  }

  return (
    <ScreenContainer hasBackground={true}>
      <Header
        headerTitle="Profile"
        headerLeft={
          <TouchableOpacity
            hitSlop={theme.hitSlopIcon}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </TouchableOpacity>
        }
        headerRight={
          <TouchableOpacity hitSlop={theme.hitSlopIcon}>
            <SaveIcon className="h-5 w-5 text-white" />
          </TouchableOpacity>
        }
      />
      <View className="mt-5 space-y-4">
        <TouchableOpacity className="overflow-hidden rounded p-3">
          <View className="absolute inset-0 bg-white opacity-10" />
          <View className="flex-row space-x-4">
            <UploadImageIcon className="h-5 w-5 text-primary" />
            <Text className="text-sm text-white opacity-90">
              Photo uploaded
            </Text>
          </View>
        </TouchableOpacity>
        <View className="overflow-hidden rounded p-3">
          <View className="absolute inset-0 bg-white opacity-10" />
          <Text className="text-sm text-white opacity-50">Name</Text>
          <Controller
            control={control}
            name="user_name"
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
          {errors.user_name ? (
            <FormErrorMessage>{errors.user_name.message}</FormErrorMessage>
          ) : null}
        </View>
        <View className="overflow-hidden rounded p-3">
          <View className="absolute inset-0 bg-white opacity-10" />
          <Text className="text-sm text-white opacity-50">Surname</Text>
          <Controller
            control={control}
            name="user_surname"
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Surname"
                placeholderTextColor={theme.colors.placeholderTextColorInput}
              />
            )}
          />
          {errors.user_surname ? (
            <FormErrorMessage>{errors.user_surname.message}</FormErrorMessage>
          ) : null}
        </View>
        <View className="overflow-hidden rounded p-3">
          <View className="absolute inset-0 bg-white opacity-10" />
          <Text className="text-sm text-white opacity-50">Nickname</Text>
          <Controller
            control={control}
            name="user_nickname"
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Nickname"
                placeholderTextColor={theme.colors.placeholderTextColorInput}
              />
            )}
          />
          {errors.user_nickname ? (
            <FormErrorMessage>{errors.user_nickname.message}</FormErrorMessage>
          ) : null}
        </View>

        <CustomButton
          onPress={() => handleSubmit(handleOnSubmit)}
          text="Update profile"
        />

        <HorizontalLine />
        <View className="mt-5 space-y-2">
          <TouchableOpacity>
            <Text className="text-white">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
}
