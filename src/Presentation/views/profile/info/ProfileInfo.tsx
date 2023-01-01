import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';
import { useProfleInfoViewModel } from './viewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
interface Props
  extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'> {}
// INICIO
export const ProfileInfoScreen: FC<Props> = ({ navigation, route }) => {
  const { removeSession } = useProfleInfoViewModel();
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ProfileInfoScreen</Text>
      <Button
        title='Cerrar session'
        onPress={() => {
          removeSession();
          navigation.navigate('HomeScreen');
        }}
      />
    </View>
  );
};
