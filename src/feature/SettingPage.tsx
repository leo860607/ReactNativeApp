import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { newsInfo } from "../shared/model/news";
import DetailPage from "./DetailPage";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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


const SettingPage = () => {
  const news: newsInfo = {
    id: "1",
    title: "test",
    imgLink: "https://i.scdn.co/image/ab6761610000e5eb006ff3c0136a71bfb9928d34",
    likes: 0,
    isFavorite: true,
  }
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={styles.logo} source={{ uri: news.imgLink }}></Image>
      <Text>Settings2!</Text>
      <Button
        title="go to detail"
        onPress={() => navigation.navigate("detail" as never, {} as never)}
      />
      {/* <Stack.Navigator>
        <Stack.Screen name="settings" component={SettingPage} />
        <Stack.Screen name="detail" component={DetailPage} />
      </Stack.Navigator> */}
    </View>
  );
}

export default SettingPage;