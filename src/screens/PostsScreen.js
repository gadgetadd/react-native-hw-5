import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function PostsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>PostsScreen</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 36,
        textAlign: 'center',
    }
});