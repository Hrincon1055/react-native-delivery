import React, { FC } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import { Rol } from '../../../Domain/entities/Rol';
import { colors } from '../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

interface Props {
  rol: Rol;
  height: number;
  width: number;
  navigation: StackNavigationProp<
    RootStackParamList,
    'RolesScreens',
    undefined
  >;
}
// INICIO
export const RolesItem: FC<Props> = ({
  rol,
  height,
  width,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (rol.name === 'ADMIN') {
          navigation.replace('AdminTabsNavigator');
        } else if (rol.name === 'CLIENTE') {
          navigation.replace('ClentTabsNavigator');
        }
      }}
      style={{ ...styles.conatiner, height, width }}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: rol.image }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{rol.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    alignSelf: 'center',
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 18,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  titleContainer: {
    height: 50,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
  },
});
