import {StyleSheet} from 'react-native';

export const buttonStyles = {
  justifyContent: 'center',
  height: 46,
  borderRadius: 9,
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 10,
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 45,
    fontWeight: '800',
    color: 'black',
  },
  subtitle: {
    marginVertical: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
