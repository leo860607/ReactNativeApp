import { useNavigation } from "@react-navigation/native";
import React, { cloneElement, Fragment } from "react";
import { Button, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native";
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import { newsInfo } from "../shared/model/news";





const Section: React.FC<{
  title: string;
}> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const HomePage = () => {
  const news: newsInfo[] = [{
    id: "1",
    title: "李知恩",
    imgLink: "https://i.scdn.co/image/ab6761610000e5eb006ff3c0136a71bfb9928d34",
    likes: 0,
    isFavorite: true,
    webUrl:"https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU"
  },
  {
    id: "2",
    title: "IU老婆",
    imgLink: "https://i.discogs.com/T0yZ16BMznGeiyv4Q2eMgOoRlUmM_iRLBECCDXANPYU/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWltYWdlcy9BLTIy/MjYzMDYtMTU5NzMz/MjM5Mi03MzMwLmpw/ZWc.jpeg",
    likes: 0,
    isFavorite: true,
    webUrl:"https://www.marieclaire.com.tw/fashion/feature/57046/iu",
  }
  ]
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.titleContent}>
            <Text style={styles.title}>最新消息</Text>
          </View>
          {news.map(element => {
            const url = element.imgLink;
            return <View key={element.id} style={styles.card}>
              <Image source={{ uri: url }}
                style={{ width: 300, height: 300 }}

              ></Image>
              <Button
                title={element.title}
                color="#f194ff"
                onPress={() => navigation.navigate("detail" as never, element as never)}
              />
            </View>
          })}
        </View>
      </ScrollView>
    </SafeAreaView>

    // <SafeAreaView style={backgroundStyle}>
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />

    //     {/* <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.測試2
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View> */}
    //   </ScrollView>
    // </SafeAreaView>
  );
}

export default HomePage;

/*====================
        CSSpart
  ====================*/
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  titleContent: {
    backgroundColor: '#BE77FF',
    borderRadius: 25,
    width: "75%",
    height: 70,
    margin: 20,
    alignItems: "center",
    justifyContent: 'center',
  },
  title: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 30
  },
  card: {
    marginBottom: 10,
  },
  cardBtn: {
    width: "100%",
  },
});