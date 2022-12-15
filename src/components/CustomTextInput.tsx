import React, { forwardRef } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

interface CustomInputProps extends TextInputProps {}

export const CustomTextInput = forwardRef<TextInput, CustomInputProps>(
  function CustomTextInput(props, ref) {
    return (
      <View className="mt-4 h-10 flex-row items-center rounded bg-slate-100 pr-1">
        <TextInput className="ml-2.5 h-4" ref={ref} {...props} />
      </View>
    );
  }
);
