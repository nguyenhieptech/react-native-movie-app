import React, { forwardRef, ReactNode } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { classNames } from 'src/utils';

// See: https://github.com/react-native-elements/react-native-elements/blob/next/packages/base/src/Button/Button.tsx
// https://github.com/mui/material-ui/blob/master/packages/mui-base/src/ButtonUnstyled/ButtonUnstyled.tsx

interface ButtonProps extends TouchableOpacityProps {
  /** Custom left icon. */
  leftIcon?: ReactNode;

  /** Button children text */
  text: string;

  /** Style for Text */
  classNameText?: string;

  /** Style for TouchableOpacity */
  classNameTouchableOpacity?: string;
}

export const CustomButton = forwardRef<TouchableOpacity, ButtonProps>(
  function CustomButton(props, ref) {
    const {
      leftIcon,
      text = 'Button',
      classNameTouchableOpacity,
      classNameText,
      ...otherProps
    } = props;

    return (
      <TouchableOpacity
        className={classNames(
          'mt-5 h-12 flex-row items-center justify-center overflow-hidden rounded',
          classNameTouchableOpacity ? classNameTouchableOpacity : '',
          leftIcon ? 'space-x-4' : ''
        )}
        ref={ref}
        {...otherProps}
      >
        <View className="absolute inset-0 bg-white opacity-10" />

        {leftIcon ? leftIcon : null}

        <Text
          className={classNames(
            'text-white',
            classNameText ? classNameText : '',
            leftIcon ? 'mr-8 ' : ''
          )}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
);
