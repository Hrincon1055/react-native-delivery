import React, { FC, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useProfleInfoViewModel } from './viewModel';
import { RootStackParamList } from '../../../../../App';
import { RoundedButton } from '../../../components/RoundedButton';
import { ProfileInfoStyles as styles } from './styles';

interface Props {}
// INICIO
export const ProfileInfoScreen: FC<Props> = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();
  const { user, removeUserSession } = useProfleInfoViewModel();
  useEffect(() => {
    if (user.id === '') {
      navigation.replace('HomeScreen');
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../../assets/city.jpg')}
        style={styles.imageBackground}
      />
      <TouchableOpacity
        style={styles.logout}
        onPress={() => {
          removeUserSession();
        }}>
        <Image
          source={require('../../../../../assets/cerrar-sesion.png')}
          style={styles.logoutImage}
        />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        {user?.image !== '' && (
          <Image
            source={{ uri: user?.image }}
            style={styles.logoImageLoade}
          />
        )}
      </View>
      <View style={styles.form}>
        <View style={styles.formInfo}>
          <Image
            source={require('../../../../../assets/user.png')}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>
              {user?.name} {user?.lastname}
            </Text>
            <Text style={styles.formTextDescription}>
              Nombre del usuario
            </Text>
          </View>
        </View>
        <View style={{ ...styles.formInfo, marginTop: 25 }}>
          <Image
            source={require('../../../../../assets/email.png')}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>{user?.email}</Text>
            <Text style={styles.formTextDescription}>
              Correo electronico
            </Text>
          </View>
        </View>
        <View
          style={{ ...styles.formInfo, marginTop: 25, marginBottom: 70 }}>
          <Image
            source={require('../../../../../assets/phone.png')}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>{user?.phone}</Text>
            <Text style={styles.formTextDescription}>Telefono</Text>
          </View>
        </View>
        <RoundedButton
          onPress={() =>
            navigation.navigate('ProfileUpdateScreen', { user: user! })
          }
          text='actualizar informacion'
        />
      </View>
    </View>
  );
};
