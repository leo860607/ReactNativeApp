import React from "react";
import notifee, { EventType, TimestampTrigger, TriggerType } from '@notifee/react-native';
import { AppRegistry } from "react-native";
import HomePage from "../../feature/HomePage";


export default class notifyService {

    constructor() {

    }
    //即時推播
    static onDisplayNotification(channelId: any) {
        // Display a notification
        notifee.displayNotification({
            title: '知恩寶貝',
            body: '親愛的該起床囉!!!<3',
            android: {
                channelId,
                smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
                pressAction: {
                    id: 'default',
                    mainComponent: 'custom-component',
                },
            },
        });
    }
    //定時推播
    static onClockNotification(channelId: any, date: Date): any {
        date.setSeconds(0);
        const trigger: TimestampTrigger = {
            type: TriggerType.TIMESTAMP,
            timestamp: date.getTime(),
            alarmManager: {
                allowWhileIdle: true,
            },
        };
        notifee.createTriggerNotification(
            {
                title: '知恩老婆大人',
                body: '親愛的該起床囉!!!<3',
                android: {
                    channelId: channelId,
                },
            },
            trigger,
        ).then(resp => {
            console.log('resp: ', resp);
            return resp;
        }).catch(err => {
            console.log('err: ', err);
        });
    }

}

