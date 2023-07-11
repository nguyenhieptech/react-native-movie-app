# React Native Movie App

https://github.com/nguyenhieptech/react-native-movie-app/assets/48057064/d71849a4-ee77-429b-bb4b-95d66437facf

This project is set up by following [the official guideline](https://reactnative.dev/docs/environment-setup).

Figma template: https://www.figma.com/community/file/1146369033825819538

**Update 11/07/2023**: The author might delete this Figma community file, so yeah, not found.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Local Development Information](#local-development-information)

## Tech Stack

- [React Native](https://reactnative.dev/docs/getting-started) - [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) - [React Navigation 6](https://reactnavigation.org/docs/getting-started/)
- [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
- [Moti](https://moti.fyi/) (Powered by React Native Reanimated 2)
- [Notifee](https://notifee.app/react-native/docs/overview) (A feature rich notifications library for React Native)

## Setup

1. Clone the project:

```bash
git clone https://github.com/nguyenhieptech/react-native-movie-app
```

2. Install dependencies

```bash
cd react-native-movie-app
yarn install
```

3. Pod install for iOS

```bash
# Update: 17/01/2023
# Currently, macOS 12.5.1 is shipped with Ruby 2.6.8, which is not what is required by React Native.
# You should use a Ruby version manager like rbenv or RVM to install
# and use ruby version '2.7.5' before pod install.
# See more at https://reactnative.dev/docs/environment-setup#ruby
# Choose Development OS: macOS, Target OS: iOS

npx pod-install
```

4. Start Metro Bundler

```bash
yarn start
```

5. Open new terminals, build for iOS/Android

```bash
yarn ios
```

```bash
yarn android
```

# Local Development Information

Macbook Air M1 2020
Ram 16GB
SSD 512GB
