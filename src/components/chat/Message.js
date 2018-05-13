import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../../styles/colors";

export default class Message extends Component {
  static navigationOptions = ({ navigation }) => ({});

  render() {
    const { message } = this.props;
    const { id, msg, me, createdAt, name, avatar } = message;
    return (
      <View
        style={[styles.wrapper, { flexDirection: me ? "row-reverse" : "row" }]}
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
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 10
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
  }
});
