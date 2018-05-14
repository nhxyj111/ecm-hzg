import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../../styles/colors";

export default class Message extends Component {
  static navigationOptions = ({ navigation }) => ({});

  render() {
    const { message } = this.props;
    const { id, msg, me, createdAt, name, avatar, photo } = message;
    return (
      <View style={styles.container}>
        <View style={styles.createdAtWrapper} />
        <Text style={styles.createdAt}>{createdAt}</Text>

        <View
          style={[
            styles.wrapper,
            { flexDirection: me ? "row-reverse" : "row" }
          ]}
        >
          <Image
            source={{ uri: avatar }}
            style={[styles.image, me ? { marginLeft: 5 } : { marginRight: 5 }]}
          />
          <View>
            <Text style={[styles.name, { textAlign: me ? "right" : "left" }]}>
              {name}
            </Text>
            <View
              style={[
                styles.content,
                { backgroundColor: me ? "lightgreen" : "lightblue" },
                me
                  ? {
                      borderRightColor: "white",
                      borderTopColor: "lightgreen",
                      borderRightWidth: 6,
                      borderTopWidth: 6
                    }
                  : {
                      borderLeftColor: "white",
                      borderTopColor: "lightblue",
                      borderLeftWidth: 6,
                      borderTopWidth: 6
                    }
              ]}
            >
              <Text style={styles.msg}>{msg}</Text>
              {photo && <Image source={{ uri: photo }} style={styles.photo} />}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginBottom: 10,
    marginHorizontal: 10
  },
  createdAtWrapper: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  createdAt: {
    textAlign: "center",
    fontSize: 10,
    color: colors.gray03,
    marginBottom: 2,
    // backgroundColor: colors.gray01,
    marginHorizontal: 0,
    padding: 1
  },
  wrapper: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    width: 40,
    height: 40
  },
  name: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.lightBlack,
    marginBottom: 5
  },
  content: {
    padding: 5,
    paddingTop: 0
  },
  msg: {
    fontSize: 16,
    color: colors.lightBlack
  },
  photo: {
    width: "100%",
    // maxHeight: 40,
    // width: 100,
    height: 100
  }
});
