import { Text, View, StyleSheet } from 'react-native';

export default function ProgrammingLanguagesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>да</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});
