import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import { AppStackParamList } from './types';

/**
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop
 */
export const navigationRef = createNavigationContainerRef<AppStackParamList>();

export function navigationRefUtils(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop());
    navigationRef.dispatch(StackActions.popToTop());
    navigationRef.dispatch(StackActions.push(name, params));
    navigationRef.dispatch(StackActions.replace(name, params));
    navigationRef.goBack();
    navigationRef.resetRoot();
  }
}
