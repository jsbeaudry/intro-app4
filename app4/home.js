import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions,
  Text,
  View,
  Image
} from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

import P1 from "./intro1";
import P2 from "./intro2";
import P3 from "./intro3";
export default class Intro1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 1 };
  }
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        index={this.state.index}
        dot={
          <View
            style={{
              backgroundColor: "grey",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: screenHeight - 100
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#fff",
              width: 13,
              height: 13,
              borderRadius: 50,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: screenHeight - 100
            }}
          />
        }
      >
        <View style={styles.slide1}>
          <P1 />
          <TouchableOpacity
            onPress={() => {
              this.setState({ index: 1 });
            }}
            style={{
              marginTop: 20,
              width: screenWidth,
              height: 60,
              borderRadius: 0,
              marginBottom: 0,
              backgroundColor: "#000",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                fontSize: 12,
                fontWeight: "600",
                alignSelf: "center"
              }}
            >
              GET STARTED NOW
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.slide2}>
          <P2 />
          <TouchableOpacity
            onPress={() => {
              this.setState({ index: 1 });
            }}
            style={{
              marginTop: 20,
              width: screenWidth,
              height: 60,
              borderRadius: 0,
              marginBottom: 0,
              backgroundColor: "#000",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                fontSize: 12,
                fontWeight: "600",
                alignSelf: "center"
              }}
            >
              GET STARTED NOW
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.slide3}>
          <P3 />
          <TouchableOpacity
            onPress={() => {
              this.setState({ index: 1 });
            }}
            style={{
              marginTop: 20,
              width: screenWidth,
              height: 60,
              borderRadius: 0,
              marginBottom: 0,
              backgroundColor: "#000",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                fontSize: 12,
                fontWeight: "600",
                alignSelf: "center"
              }}
            >
              GET STARTED NOW
            </Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0841dd"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c8743"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#911122"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
