import { Text, View, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PostItem({ item, }) {
    const navigation = useNavigation();

    return (
        <View style={styles.post}>
            <View style={styles.imageWrap}>
                <Image style={styles.image} source={item.photo} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.btnsWrap}>
                <Pressable onPress={() => navigation.navigate("Location")} style={styles.locationBtn}>
                    <EvilIcons name={'location'} size={25} color={'black'} />
                    <Text>{item.place}</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Comments")}>
                    <EvilIcons name={'comment'} size={25} color={'black'} />
                </Pressable>
            </View>


            {/* <Text>{`${item.location.latitude} ${item.location.longitude}`}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 700
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageWrap: {
        aspectRatio: 3 / 4,
        width: 300,
        alignSelf: 'center'
    },
    locationBtn: {
        flexDirection: 'row'
    },
    btnsWrap: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});