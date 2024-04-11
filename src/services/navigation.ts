import {CommonActions} from '@react-navigation/native';

let navigator: any;

export const setTopLevelNavigator = (navigatorRef: any) => {
  navigator = navigatorRef;
};

export const navigate = (routeName: string, params?: any) => {
  if (!navigator) {
    return;
  }
  navigator.dispatch(CommonActions.navigate({name: routeName, params}));
};
