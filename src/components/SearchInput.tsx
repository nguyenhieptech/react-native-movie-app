import React, { forwardRef } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { SearchIcon } from 'src/assets/icons';
import { classNames } from 'src/utils';

interface SearchInputProps extends TextInputProps {
  /** Style for Text */
  classNameInput?: string;
}

export const SearchInput = forwardRef<TextInput, SearchInputProps>(
  function SearchInput(props, ref) {
    const { classNameInput } = props;

    return (
      <View className="mt-4 h-10 flex-row items-center rounded bg-slate-100 px-4">
        <SearchIcon className="h-5 w-5 text-black opacity-50" />
        <TextInput
          className={classNames(
            'ml-2.5 h-4',
            classNameInput ? classNameInput : ''
          )}
          ref={ref}
          {...props}
        />
      </View>
    );
  }
);
