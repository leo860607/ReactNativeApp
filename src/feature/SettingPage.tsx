import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Button, AppRegistry, Platform } from "react-native";
import { newsInfo } from "../shared/model/news";
import { useNavigation } from "@react-navigation/native";
import notifee, { EventType, TimestampTrigger, TriggerType } from '@notifee/react-native';
import HomePage from "./HomePage";
import notifyService from "../shared/service/notification";
import DateTimePicker from '@react-native-community/datetimepicker';

let tmp = "";//用來記錄定時推播ID(之後可能要存DB?)

//產生即時推播
async function onDisplayNotification() {
  // Create a channel
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Display a notification
  await notifyService.onDisplayNotification(channelId)
}
//設定定時推播
async function timeTriggerNotification(date: Date) {

  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });
  tmp = notifyService.onClockNotification(channelId, date)
}
//取消定時推播
async function cancleTimeTrigger() {
  //要使用Create產生的ID才能取消
  console.log(tmp)
  notifee.cancelTriggerNotification(tmp).then(resp => {
    console.log('resp: ', resp);
  }).catch(err => {
    console.log('err: ', err);
  });
}

AppRegistry.registerComponent('custom-component', () => HomePage);
notifee.onBackgroundEvent(async ({ type, detail }) => {
  if (type === EventType.DISMISSED) {
    // Update remote API
  }
});

const SettingPage = () => {

  const [date, setDate] = useState(new Date(Date.now()));
  let mode: 'date' | 'time' = 'time';
  const [show, setShow] = useState(false);
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(selectedDate);
    timeTriggerNotification(selectedDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    mode = currentMode as ('date' | 'time');
  };
  //日期picker
  const showDatepicker = () => {
    showMode('date');
  };
  //時鐘picker
  const showTimepicker = () => {
    showMode('time');
  };
  const news: newsInfo = {
    id: "1",
    title: "test",
    imgLink: "https://i.scdn.co/image/ab6761610000e5eb006ff3c0136a71bfb9928d34",
    likes: 0,
    isFavorite: true,
    webUrl: "test",
  }

  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginBottom: 10 }}>
        <Image style={styles.logo} source={{ uri: news.imgLink }}></Image>
        {/* <Text>鬧鐘</Text> */}
        <Button title="推播" onPress={() => onDisplayNotification()} />
      </View>
      <View style={{ width: 300, marginBottom: 10 }}>
        <Button title="鬧鐘" onPress={showTimepicker} />
      </View>
      <View style={{ width: 300 }}>
        <Button title="取消" onPress={() => cancleTimeTrigger()} />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

export default SettingPage;

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
  btn: {
    width: "100%",
    marginTop: 10
  }
});