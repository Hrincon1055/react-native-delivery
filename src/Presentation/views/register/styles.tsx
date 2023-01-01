import { StyleSheet } from 'react-native';

export const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '5%',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoImageLoade: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
