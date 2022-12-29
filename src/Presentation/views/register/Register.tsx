import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, ToastAndroid } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';
import { useRegisterViewModel } from './viewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import { RegisterStyles as styles } from './styles';

export const RegisterScreen = () => {
  const {
    name,
    lastname,
    email,
    password,
    confirPassword,
    phone,
    errorMessage,
    onChange,
    register,
  } = useRegisterViewModel();

  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/chef.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/user_image.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>
      <ScrollView style={styles.form}>
        <Text style={styles.formText}>REGISTRARSE</Text>
        <CustomTextInput
          image={require('../../../../assets/user.png')}
          placeholder='Nombre'
          keyboardType='default'
          property='name'
          onChangeText={onChange}
          value={name}
        />
        <CustomTextInput
          image={require('../../../../assets/my_user.png')}
          placeholder='Apellidos'
          keyboardType='default'
          property='lastname'
          onChangeText={onChange}
          value={lastname}
        />
        <CustomTextInput
          image={require('../../../../assets/phone.png')}
          placeholder='Telefono'
          keyboardType='numeric'
          property='phone'
          onChangeText={onChange}
          value={phone}
        />
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
        <CustomTextInput
          image={require('../../../../assets/confirm_password.png')}
          placeholder='Confirmar Contraseña'
          keyboardType='default'
          property='confirPassword'
          onChangeText={onChange}
          value={confirPassword}
          secureTextEntry={true}
        />
        <View style={{ marginTop: 30 }}>
          <RoundedButton text='CONFIRMAR' onPress={() => register()} />
        </View>
      </ScrollView>
    </View>
  );
};
