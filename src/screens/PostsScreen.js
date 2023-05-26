import { useState, useEffect } from "react";



import DefaultScreen from "./NestedScreens/DefaultScreen";

import { Text, View, StyleSheet, FlatList, Image } from 'react-native';




export default function PostsScreen({ }) {

    const { Navigator, Screen } = createStackNavigator();




    return (

        <Navigator initialRouteName={"Default"}>
            <Screen name="Default" component={DefaultScreen} />
            <Screen name="Map" component={DefaultScreen} />
            <Screen name="Comments" component={DefaultScreen} />
        </Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },


});