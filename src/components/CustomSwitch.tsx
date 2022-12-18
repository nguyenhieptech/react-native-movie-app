import { MotiView } from 'moti';
import React, { Dispatch, SetStateAction } from 'react';
import { Pressable } from 'react-native';
import { theme } from 'src/theme';

type CustomSwitchProps = {
  active: boolean;
  onActiveChange: Dispatch<SetStateAction<boolean>>;
};

export function CustomSwitch(props: CustomSwitchProps) {
  const { active, onActiveChange } = props;

  return (
    <Pressable onPress={() => onActiveChange(!active)}>
      <MotiView
        className="h-6 w-9 justify-center rounded-full p-0.5"
        animate={{
          backgroundColor: active
            ? theme.colors.primary
            : theme.colors['gray-600'],
        }}
        transition={{ type: 'timing', duration: 300 }}
      >
        <MotiView
          className="h-5 w-5 rounded-full bg-white"
          animate={{ translateX: active ? 12 : 0 }}
          transition={{ type: 'timing', duration: 300 }}
        />
      </MotiView>
    </Pressable>
  );
}
