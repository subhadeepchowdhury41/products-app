import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 20,
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
