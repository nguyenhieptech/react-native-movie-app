import React, { useState, forwardRef, useRef } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { SearchIcon } from 'src/assets/icons';

interface SearchInputProps extends TextInputProps {
  value: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchInput = forwardRef<TextInput, SearchInputProps>(
  (props, ref) => {
    const { value, onChangeText, ...otherProps } = props;

    return (
      <View className="mt-4 h-10 flex-row items-center rounded bg-slate-100 px-4">
        <SearchIcon className="h-5 w-5 text-black opacity-50" />
        <TextInput
          className="ml-2.5 h-4"
          placeholder="Search..."
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          {...otherProps}
        />
      </View>
    );
  }
);

function DemoUsingCustomInput() {
  const [text, setOnChangeText] = useState('');
  const inputRef = useRef<TextInput>(null);

  return (
    <SearchInput value={text} onChangeText={setOnChangeText} ref={inputRef} />
  );
}
