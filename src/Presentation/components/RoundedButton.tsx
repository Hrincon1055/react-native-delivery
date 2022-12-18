import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../theme/AppTheme';

interface Props {
  text: string;
  onPress: () => void;
}
export const RoundedButton: FC<Props> = ({ text = 'Login', onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.roundedButton}>
      <Text style={styles.textButton}>{text.toUpperCase().trim()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
});
