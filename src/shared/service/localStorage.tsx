import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";



export default class localStorage {

    constructor() { }

    static async getdata(key: string){
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch (e) {
            // read error
        }
    }

    static async setdata(key: string, value: any) {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            // save error
        }
    }
}

