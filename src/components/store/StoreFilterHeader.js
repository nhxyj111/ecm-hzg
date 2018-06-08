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
import FeatherIcon from "react-native-vector-icons/Feather";
import IconBadge from "react-native-icon-badge";

import InputTag from "../InputTag";
import colors from "../../styles/colors";

export default class StoreFilterHeader extends Component {
  state = {
    value: ""
  };
  render() {
    // const { routeName } = this.props.navigation;
    // console.log(JSON.stringify(this.props.navigation));
    const { showBackIcon, navigation, onFilter } = this.props;

    return (
      <View style={styles.wrapper}>
        <View style={styles.leftWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate("StoreFilterModal")}
          >
            <Icon name="md-list" size={20} color={colors.lightBlack} />
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => navigation.navigate("StoreFilterModal")}
            style={styles.leftBackIcon}
            onPress={() => navigation.navigate("ProductFilterModal")}
          >
            <FeatherIcon name="filter" size={20} color={colors.lightBlack} />
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
          placeholder="搜索商品(展会展品)"
          underlineColorAndroid="transparent"
          onChangeText={value => this.setState({ value })}
          value={this.state.value}
          onSubmitEditing={() => {
            onFilter(this.state.value);
          }}
        />

        <View style={{ marginRight: 10 }}>
          <InputTag title="零食" />
        </View>

        <View style={styles.rightWrapper}>
          <TouchableOpacity>
            <Icon name="md-heart" size={20} color={colors.lightBlack} />
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.rightShopIcon}>
            <FontAwesome
              name="shopping-basket"
              size={20}
              color={colors.lightBlack}
            />
          </TouchableOpacity> */}

          <IconBadge
            MainElement={
              <TouchableOpacity
                style={styles.rightShopIcon}
                onPress={() => navigation.navigate("Shopcart")}
              >
                <FontAwesome
                  name="shopping-basket"
                  size={20}
                  color={colors.lightBlack}
                />
              </TouchableOpacity>
            }
            BadgeElement={<Text style={{ color: "#FFFFFF" }}>{11}</Text>}
            IconBadgeStyle={styles.IconBadge}
            Hidden={1 == 0}
          />
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
    flex: 1,
    fontSize: 16,
    color: colors.lightBlack,
    paddingHorizontal: 15
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
  },
  IconBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    minWidth: 18,
    height: 18,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.starYellow
  }
});
