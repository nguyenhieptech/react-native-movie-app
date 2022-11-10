import React, { forwardRef, ReactNode } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { classNames } from 'src/utils';

// See: https://github.com/react-native-elements/react-native-elements/blob/next/packages/base/src/Button/Button.tsx
interface ButtonProps extends TouchableOpacityProps {
  /** Custom left icon. */
  leftIcon?: ReactNode;

  /** Button children text */
  text: string;
}

export const CustomButton = forwardRef<TouchableOpacity, ButtonProps>(
  ({ leftIcon, text = 'Button', children, ...props }, ref) => {
    return (
      <TouchableOpacity
        className={classNames(
          'mt-5 h-12 flex-row items-center justify-center overflow-hidden rounded',
          leftIcon ? 'space-x-4' : ''
        )}
        ref={ref}
        {...props}
      >
        <View className="absolute inset-0 bg-white opacity-10" />

        {leftIcon ? leftIcon : null}

        <Text className={classNames('text-white', leftIcon ? 'mr-8 ' : '')}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
);
