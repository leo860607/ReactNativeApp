import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";


interface Imageinfo {
    title: string;
    imgUrl:ImageSourcePropType;
}

const ImageDetail = (props: Imageinfo) => {
    return (
        <View>
            <Image source={props.imgUrl} style={styles.imgstyle}></Image>
            <Text>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imgstyle:{
        width:300,
        height:300
    }
});

export default ImageDetail;