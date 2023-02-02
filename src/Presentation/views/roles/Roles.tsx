import React, { FC, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Carousel from 'react-native-reanimated-carousel';
import { useRolesViewModel } from './viewModel';
import { RootStackParamList } from '../../../../App';
import { RolesItem } from './Item';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// CONSTANTES GLOBALES
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props
  extends StackScreenProps<RootStackParamList, 'RolesScreens'> {}
// INICIO
export const RolesScreens: FC<Props> = ({ navigation, route }) => {
  const { user } = useRolesViewModel();
  const [mode] = useState<any>('horizontal-stack');
  const [snapDirection] = useState<'left' | 'right'>('left');
  // RENDER
  return (
    <GestureHandlerRootView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Carousel
          loop={true}
          width={width}
          height={height / 2}
          autoPlay={false}
          data={user?.roles!}
          scrollAnimationDuration={1000}
          // onSnapToItem={(index) => console.log(index)}
          renderItem={({ item }) => (
            <RolesItem
              rol={item}
              height={420}
              width={width - 100}
              navigation={navigation}
            />
          )}
          modeConfig={{ snapDirection, stackInterval: 30 }}
          mode={mode}
        />
      </View>
    </GestureHandlerRootView>
  );
};
