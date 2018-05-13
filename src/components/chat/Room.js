import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import CustomTag from "../CustomTag";
import colors from "../../styles/colors";

export default class Room extends Component {
  render() {
    const { room, onPress } = this.props;
    const {
      id,
      exhibition,
      isOfficial,
      online,
      total,
      messages,
      lastMessage,
      desc,
      createdAt
    } = room;

    return (
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        {isOfficial && (
          <CustomTag
            gbColor={colors.green01}
            color={colors.white}
            size={60}
            textSize={12}
            position="right-bottom"
            title="官方"
          />
        )}
        <View style={styles.top}>
          <View style={styles.left}>
            <Text numberOfLines={1} style={styles.exhibition}>
              {exhibition}
            </Text>
            <Text numberOfLines={2} style={styles.desc}>
              {desc}
            </Text>
            <Text numberOfLines={1} style={styles.createdAt}>
              创建于: {createdAt}
            </Text>
          </View>
          <View style={styles.right}>
            <View style={styles.numWrapper}>
              <Text style={styles.numHeader}>在线成员:</Text>
              <Text numberOfLines={1} style={styles.numText}>
                {online}
              </Text>
            </View>
            <View style={styles.numWrapper}>
              <Text style={styles.numHeader}>成员数量:</Text>
              <Text numberOfLines={1} style={styles.numText}>
                {total}
              </Text>
            </View>
            <View style={styles.numWrapper}>
              <Text style={styles.numHeader}>消息数量:</Text>
              <Text numberOfLines={1} style={styles.numText}>
                {messages}
              </Text>
            </View>
          </View>
        </View>
        <Text numberOfLines={1} style={styles.lastMessage}>
          最新信息: {lastMessage}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderBottomColor: colors.gray05,
    borderBottomWidth: 1,
    position: "relative",
    overflow: "hidden"
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  left: {
    flex: 1,
    alignItems: "flex-start"
  },
  right: {
    flex: 1,
    alignItems: "flex-end"
  },
  exhibition: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.lightBlack
  },
  desc: {
    fontSize: 12,
    color: colors.lightBlack
  },
  createdAt: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.lightBlack
  },
  lastMessage: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: "600",
    color: colors.green02
  },
  numWrapper: {
    flexDirection: "row"
  },
  numHeader: {
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    flex: 7,
    textAlign: "right",
    fontSize: 12,
    color: colors.lightBlack
  },
  numText: {
    textAlign: "right",
    flex: 3,
    fontSize: 12,
    fontWeight: "600",
    color: colors.lightBlack
  }
});
