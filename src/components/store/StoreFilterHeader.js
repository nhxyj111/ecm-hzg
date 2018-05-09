import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import colors from "../../styles/colors";

export default class StoreFilterHeader extends Component {
  render() {
    // const { routeName } = this.props.navigation;
    // console.log(JSON.stringify(this.props.navigation));
    const { showBackIcon, navigation } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.leftWrapper}>
          <TouchableOpacity>
            <Icon name="md-list" size={20} color={colors.lightBlack} />
          </TouchableOpacity>
          {showBackIcon && (
            <TouchableOpacity
              style={styles.leftBackIcon}
              onPress={() => navigation.goBack()}
            >
              <Icon name="ios-arrow-back" size={20} color={colors.lightBlack} />
            </TouchableOpacity>
          )}
        </View>

        <TextInput
          style={styles.inputText}
          keyboardType="web-search"
          placeholder="搜索展会"
        />

        <View style={styles.rightWrapper}>
          <TouchableOpacity>
            <Icon name="md-heart" size={20} color={colors.lightBlack} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.rightShopIcon}>
            <FontAwesome
              name="shopping-basket"
              size={20}
              color={colors.lightBlack}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    //TODO: should post customized styles as props
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 40,
    paddingBottom: 10,
    borderBottomColor: colors.gray01,
    borderBottomWidth: 1
  },
  inputText: {
    fontSize: 20,
    color: colors.lightBlack
  },

  leftWrapper: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  leftBackIcon: {
    marginLeft: 10
  },
  rightWrapper: {
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  rightShopIcon: {
    marginLeft: 10
  }
});
