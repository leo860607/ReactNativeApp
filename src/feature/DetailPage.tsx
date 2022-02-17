import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { newsInfo } from "../shared/model/news";


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 300,
        height: 300,
    },
});

const DetailPage = () => {
    const news: newsInfo = {
        id: "1",
        title: "test",
        imgLink: "https://i.scdn.co/image/ab6761610000e5eb006ff3c0136a71bfb9928d34",
        likes: 0,
        isFavorite: true,
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.logo} source={{ uri: news.imgLink }}>

            </Image>
            <Text>SettingsDetail!</Text>
        </View>
    );
}

export default DetailPage;