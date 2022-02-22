import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import localStorage from "../shared/service/localStorage";



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
    WebView: {
        width: 400,
        height: 200,
        backgroundColor: "red"
    }
});




const DataPage = (routeParam: { route: any }) => {
    const [tmp, setValue] = useState('Hello World');
    const getData = async () => {
        let data = await localStorage.getdata("Btn")
        setValue(data.data)
    }
    const btnpress = () => {
        localStorage.setdata("Btn", { data: "IU forever" })
    }

    const onMessage = (data: any) => {
        //Prints out data that was passed.
        console.log("TESTmessage");
        console.log(data);
    }
    const webViewRef = useRef(null);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 300, marginBottom: 10 }}>
                <Button title="塞值" onPress={btnpress} />
            </View>
            <View style={{ width: 300, marginBottom: 10 }}>
                <Button title="取值" onPress={getData} />
                <Text>{tmp}</Text>
            </View>
        </View>
    );
}

export default DataPage;