import React, { FC, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { RoundedButton } from '../../components/RoundedButton';
import { useHomeViewModel } from './viewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import { HomeStyles as styles } from './styles';
interface Props
  extends StackScreenProps<RootStackParamList, 'HomeScreen'> {}
// INICIO
export const HomeScreen: FC<Props> = ({ navigation, route }) => {
  const { email, password, user, onChange, login, errorMessage } =
    useHomeViewModel();
  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);
  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      if (user?.roles?.length! > 1) {
        navigation.replace('RolesScreens');
      } else {
        navigation.replace('ClentTabsNavigator');
      }
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/chef.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>FOOD APP</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <CustomTextInput
          image={require('../../../../assets/email.png')}
          placeholder='Correo electronico'
          keyboardType='email-address'
          property='email'
          onChangeText={onChange}
          value={email}
        />
        <CustomTextInput
          image={require('../../../../assets/password.png')}
          placeholder='Contraseña'
          keyboardType='default'
          property='password'
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />
        <View style={{ marginTop: 30 }}>
          <RoundedButton text='LOGIN' onPress={login} />
        </View>
        <View style={styles.formRegister}>
          <Text>No tienes cuenta? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
