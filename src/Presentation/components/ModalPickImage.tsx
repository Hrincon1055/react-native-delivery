import React, { FC, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import { RoundedButton } from './RoundedButton';
interface Props {
  openGallery: () => void;
  openCamera: () => void;
  modalUseState: boolean;
  setModalUseState: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalPickImage: FC<Props> = ({
  openCamera,
  openGallery,
  modalUseState,
  setModalUseState,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalUseState}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalUseState(!modalUseState);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Selecciona una opción</Text>
            <View style={styles.buttonContainer}>
              <RoundedButton
                text='Galeria'
                onPress={() => {
                  openGallery();
                  setModalUseState(false);
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <RoundedButton
                text='Camera'
                onPress={() => {
                  openCamera();
                  setModalUseState(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 250,
    height: 150,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 5,
  },
});
