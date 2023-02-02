import { StyleSheet } from 'react-native';

export const ProfileInfoStyles = StyleSheet.create({
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
    top: '11%',
  },
  logoImage: {
    width: 180,
    height: 180,
  },
  logout: {
    position: 'absolute',
    top: 30,
    right: 15,
  },
  logoutImage: {
    width: 40,
    height: 40,
  },
  logoImageLoade: {
    width: 180,
    height: 180,
    borderRadius: 100,
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
    height: '45%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  formInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formContent: {
    marginLeft: 15,
  },
  formTextDescription: {
    fontSize: 12,
    color: 'grey',
  },
  formImage: {
    width: 30,
    height: 30,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
