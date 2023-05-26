import { useState, useEffect } from "react";

// import placeholder from '../assets/images/temp.jpg'


import PostItem from "../components/PostItem";
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

import { StatusBar } from 'expo-status-bar';


export default function DefaultScreen({ }) {


    const posts = [{
        id: "0de784e2-fb9c-11sds-b6a8-95e8d9a77962",
        location: {
            latitude: 50.270661346473034,
            longitude: 28.64287955441887
        },
        photo: placeholder,
        place: "Zhytomyr",
        title: "Post 1",
    }, {
        id: "0de784e2-fb9c-11sdsed-b6a8-95e8d9a77962",
        location: {
            latitude: 49.838046163646524,
            longitude: 23.790965139155038
        },
        photo: placeholder,
        place: "Lviv",
        title: "Post 2",
    }, {
        id: "0de784e2-fb9c-11ed-b6asds8-95e8d9a77962",
        location: {
            latitude: 50.468385675565784,
            longitude: 30.46573293483189
        },
        photo: placeholder,
        place: "Kyiv",
        title: "Post 3",
    }]



    return (

        <View style={styles.container}>

            <FlatList
                data={posts}
                renderItem={({ item }) => <PostItem item={item} />}
                keyExtractor={(item) => item.id}
            />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },


});