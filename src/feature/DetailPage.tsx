import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
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
    WebView:{
        width: 400,
        height: 200,
        backgroundColor: "black"
    }
});

const DetailPage = (routeParam: { route: any }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Image style={styles.logo} source={{ uri: routeParam.route.params.imgLink }}>

            </Image>
            <Text>{routeParam.route.params.title}</Text> */}
            {/* <Text>{routeParam.route.params.webUrl}</Text> */}
            <WebView source={{ uri: routeParam.route.params.webUrl }} style={styles.WebView} />
        </View>
    );
}

export default DetailPage;