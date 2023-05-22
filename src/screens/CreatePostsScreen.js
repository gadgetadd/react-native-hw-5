import { Text, View, StyleSheet } from 'react-native';


export default function CreatePostsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>CreatePostsScreen</Text>
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