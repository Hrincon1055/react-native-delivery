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
import { StackScreenProps } from '@react-navigation/stack';
import { RoundedButton } from '../../../components/RoundedButton';
import { useProfileUpdateViewModel } from './viewModel';
import { CustomTextInput } from '../../../components/CustomTextInput';
import { ModalPickImage } from '../../../components/ModalPickImage';
import { RootStackParamList } from '../../../../../App';
import { colors } from '../../../theme/AppTheme';
import { ProfileUpdateStyles as styles } from './styles';
interface Props
  extends StackScreenProps<RootStackParamList, 'ProfileUpdateScreen'> {}
// INICIO
export const ProfileUpdateScreen: FC<Props> = ({ navigation, route }) => {
  const { user } = route.params;
  // STATES
  const [modalVisible, setModalVisible] = useState(false);
  const {
    name,
    lastname,
    phone,
    image,
    loading,
    update,
    errorMessage,
    onChange,
    pickImage,
    takePhote,
  } = useProfileUpdateViewModel(user);

  // EFFECTS
  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  // RETURN
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../../../../../assets/city.jpg')}
          style={styles.imageBackground}
        />
        <View style={styles.logoContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            {image === '' ? (
              <Image
                source={{ uri: user?.image }}
                style={styles.logoImageLoade}
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
          <Text style={styles.formText}>ACTUALIZAR USUARIO</Text>
          <CustomTextInput
            image={require('../../../../../assets/user.png')}
            placeholder='Nombre'
            keyboardType='default'
            property='name'
            onChangeText={onChange}
            value={name}
          />
          <CustomTextInput
            image={require('../../../../../assets/my_user.png')}
            placeholder='Apellidos'
            keyboardType='default'
            property='lastname'
            onChangeText={onChange}
            value={lastname}
          />
          <CustomTextInput
            image={require('../../../../../assets/phone.png')}
            placeholder='Telefono'
            keyboardType='numeric'
            property='phone'
            onChangeText={onChange}
            value={phone}
          />
          <View style={{ marginTop: 30 }}>
            <RoundedButton text='ACTUALIZAR' onPress={() => update()} />
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
