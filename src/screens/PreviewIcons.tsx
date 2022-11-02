import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import {
  AddToPlaylistIcon,
  AvatarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  DownloadIcon,
  EditIcon,
  HeartIcon,
  HeartInactiveIcon,
  HomeIcon,
  MailIcon,
  PlayIcon,
  PlaylistIcon,
  PlusIcon,
  RadioButtonIcon,
  RadioButtonInactiveIcon,
  RightArrowIcon,
  SaveIcon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  SliderIcon,
  TrashIcon,
  UploadImageIcon,
  VerticalDotsIcon,
  WarningIcon,
  XDeleteTextInputIcon,
  XIcon,
} from 'src/assets/icons';

/**
 * This screen for previewing icons.
 * Màn hình xem trước icon.
 */
export function PreviewIcons() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1 items-center justify-center">
        <Text className="font-bold text-5xl text-slate-100 mt-16">
          Preview Icons
        </Text>
        <View className="mt-8 space-y-4">
          <AddToPlaylistIcon className="text-primary w-5 h-5" />
          <AddToPlaylistIcon className="text-slate-100 w-5 h-5" />
          <AvatarIcon className="text-slate-100 w-5 h-5" />
          <ChevronLeftIcon className="text-slate-100 w-5 h-5" />
          <ChevronDownIcon className="text-slate-100 w-5 h-5" />
          <DownloadIcon className="text-primary w-5 h-5" />
          <DownloadIcon className="text-slate-100 w-5 h-5" />
          <EditIcon className="text-slate-100 w-5 h-5" />
          <HeartIcon className="text-primary w-5 h-5" />
          <HeartInactiveIcon className="text-slate-100 w-5 h-5" />
          <HomeIcon className="text-primary w-5 h-5" />
          <HomeIcon className="text-slate-100 w-5 h-5" />
          <MailIcon className="text-primary w-5 h-5" />
          <PlayIcon className="text-slate-100 w-5 h-5" />
          <PlaylistIcon className="text-primary w-5 h-5" />
          <PlaylistIcon className="text-slate-100 w-5 h-5" />
          <PlusIcon className="text-slate-100 w-5 h-4" />
          <RadioButtonIcon className="text-primary w-5 h-5" />
          <RadioButtonInactiveIcon className="text-slate-100 w-5 h-5" />
          <RightArrowIcon className="text-slate-100 w-5 h-5" />
          <SaveIcon className="text-slate-100 w-5 h-5" />
          <SearchIcon className="text-slate-100 w-5 h-5" />
          <SettingsIcon className="text-primary w-5 h-5" />
          <SettingsIcon className="text-slate-100 w-5 h-5" />
          <ShareIcon className="text-primary w-5 h-5" />
          <ShareIcon className="text-slate-100 w-5 h-5" />
          <SliderIcon className="text-primary w-5 h-5" />
          <TrashIcon className="text-slate-100 w-5 h-5" />
          <VerticalDotsIcon className="text-slate-100 w-5 h-4" />
          <UploadImageIcon className="text-slate-100 w-5 h-5" />
          <WarningIcon className="text-primary w-5 h-5" />
          <XDeleteTextInputIcon className="text-slate-100 w-5 h-5" />
          <XIcon className="text-slate-100 w-5 h-4" />
        </View>
      </View>
    </ScrollView>
  );
}
