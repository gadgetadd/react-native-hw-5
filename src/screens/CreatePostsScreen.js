import React, { useState, useEffect } from "react";
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet, Image } from "react-native";

import CameraPreview from "../components/CameraPreview";
import PhotoPreview from "../components/PhotoPreview";
import * as Location from "expo-location";
import uuid from 'react-native-uuid';


export default function CreatePostsScreen({ }) {


    const [photo, setPhoto] = useState(null);
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('')

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
            }


        })();
    }, []);


    const handleAddNewPost = async () => {
        const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest, maximumAge: 10000 });

        const newPost = {
            id: uuid.v1(),
            photo,
            title,
            place,
            location: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            }
        }
        console.log(newPost);

    }

    return (
        <View style={styles.container}>
            <View style={styles.photoContainer}>
                {photo ? <PhotoPreview photo={photo} onCancel={() => setPhoto(null)} /> : <CameraPreview onCapture={setPhoto} />}
            </View>
            <TextInput
                value={title}
                onChangeText={setTitle}
                style={styles.input}
                placeholder="Name"
            /><TextInput
                value={place}
                onChangeText={setPlace}
                style={styles.input}
                placeholder="Location"
            /><Button title='Post' onPress={handleAddNewPost} />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    photoContainer: {
        aspectRatio: 3 / 4,
    },
    input: {
        marginVertical: 5,
        borderWidth: 1,
        padding: 4,
    },

});