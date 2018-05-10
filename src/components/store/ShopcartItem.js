import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import Swipeout from "react-native-swipeout";

import colors from "../../styles/colors";

export default class ShopcartItem extends Component {
  state = {
    activeRowKey: null
  };

  render() {
    const { id, name, desc, photo, price, quantity, spec } = this.props.data;
    const { onDelete } = this.props;

    const swipeoutSettings = {
      autoClose: true,
      onClose: (sectionID, rowId, direction) => {
        if (this.state.activeRowKey !== null)
          this.setState({
            activeRowKey: null
          });
      },
      onOpen: (sectionID, rowId, direction) => {
        this.setState({
          activeRowKey: id
        });
      },
      right: [
        {
          onPress: () => {
            Alert.alert(
              "移除商品",
              "是否要移除该商品 ?",
              [
                { text: "否", onPress: () => {}, style: "cancel" },
                {
                  text: "是",
                  onPress: () => {
                    onDelete(id);
                  }
                }
              ],
              { cancelable: true }
            );
          },
          text: "移除",
          type: "delete",
          backgroundColor: colors.gray04,
          color: colors.white
        }
      ],
      rowId: id,
      sectionID: 1
    };

    return (
      <Swipeout {...swipeoutSettings}>
        <View style={styles.wrapper}>
          <View style={styles.main}>
            <Image source={{ uri: photo }} style={styles.image} />
            <View style={styles.nameDesc}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.desc}>{desc}</Text>
            </View>
          </View>
          <View style={styles.others}>
            <Text style={styles.other}>{spec}</Text>
            <Text style={styles.other}>{quantity}</Text>
            <Text style={styles.other}>{price}</Text>
          </View>
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    padding: 20,
    borderBottomColor: colors.gray01,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 6
  },
  nameDesc: {
    flex: 1,
    flexWrap: "wrap"
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.lightBlack
  },
  desc: {
    fontSize: 12,
    color: colors.lightBlack
  },
  others: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 4
  },
  other: {
    // alignSelf: "center"
    fontSize: 16,
    fontWeight: "600",
    color: colors.lightBlack
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 5
  }
});
