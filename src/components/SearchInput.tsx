import React from 'react';
import { TextInput, View } from 'react-native';
import { SearchIcon } from 'src/assets/icons';

type SearchInputProps = {
  text: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
};

export function SearchInput({ text, onChangeText }: SearchInputProps) {
  return (
    <View className="mt-4 h-10 flex-row items-center rounded bg-slate-100 px-4">
      <SearchIcon className="h-5 w-5 text-black opacity-50" />
      <TextInput
        className="ml-2.5 h-4"
        placeholder="Search..."
        value={text}
        onChangeText={onChangeText}
      />
    </View>
  );
}
