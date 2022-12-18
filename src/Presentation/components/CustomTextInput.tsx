import React, { FC } from 'react';
import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native';
interface Props {
  image: any;
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: any) => void;
}
export const CustomTextInput: FC<Props> = ({
  image,
  placeholder,
  value,
  keyboardType,
  secureTextEntry = false,
  property,
  onChangeText,
}) => {
  return (
    <View style={styles.formInput}>
      <Image style={styles.formIcon} source={image} />
      <TextInput
        placeholder={placeholder}
        style={styles.formTextInput}
        keyboardType={keyboardType}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={(text) => onChangeText(property, text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  formIcon: {
    width: 25,
    height: 25,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#aaaaaa',
    marginLeft: 15,
  },
});
