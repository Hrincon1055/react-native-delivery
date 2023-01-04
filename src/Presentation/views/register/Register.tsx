import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { useRegisterViewModel } from './viewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import { ModalPickImage } from '../../components/ModalPickImage';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { colors } from '../../theme/AppTheme';
import { RegisterStyles as styles } from './styles';
interface Props
  extends StackScreenProps<RootStackParamList, 'RegisterScreen'> {}
// INICIO
export const RegisterScreen: FC<Props> = ({ navigation, route }) => {
  // STATES
  const [modalVisible, setModalVisible] = useState(false);
  const {
    name,
    lastname,
    email,
    password,
    confirPassword,
    phone,
    image,
    user,
    loading,
    errorMessage,
    onChange,
    register,
    pickImage,
    takePhote,
  } = useRegisterViewModel();
  // EFFECTS
  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);
  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      navigation.replace('ProfileInfoScreen');
    }
  }, [user]);
  // RETURN
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/chef.jpg')}
          style={styles.imageBackground}
        />
        <View style={styles.logoContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            {image === '' ? (
              <Image
                source={require('../../../../assets/user_image.png')}
                style={styles.logoImage}
              />
            ) : (
              <Image
                source={{ uri: image }}
                style={styles.logoImageLoade}
              />
            )}
          </TouchableOpacity>
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
        <ModalPickImage
          openGallery={pickImage}
          openCamera={takePhote}
          modalUseState={modalVisible}
          setModalUseState={setModalVisible}
        />
        {loading && (
          <ActivityIndicator
            size='large'
            color={colors.primary}
            style={styles.loading}
          />
        )}
      </View>
    </>
  );
};
