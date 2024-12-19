import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hihihihih</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#98FB98',
    },
    text: {
      fontWeight: '500',
      fontSize: 20,
      color: 'hsl(0, 0%, 20%)',
      textAlign: 'center',
    },
  });