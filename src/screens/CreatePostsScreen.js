import React, { useState } from "react";
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet, Image } from "react-native";

import CameraPreview from "../components/CameraPreview";
import PhotoPreview from "../components/PhotoPreview";


export default function CreatePostsScreen() {


    const [photo, setPhoto] = useState(null)



    return (
        <View style={styles.container}>
            <View style={styles.photoContainer}>
                {photo ? <PhotoPreview photo={photo} onCancel={() => setPhoto(null)} /> : <CameraPreview onCapture={setPhoto} />}
            </View>
            <TextInput
                // value={login}
                // onChangeText={setLogin}
                // style={styles.input}
                placeholder="Name"
            /><TextInput
                // value={login}
                // onChangeText={setLogin}
                // style={styles.input}
                placeholder="Location"
            /><Button title='Post' />
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

});