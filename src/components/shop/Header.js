import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import colors from "../../styles/colors";

export default class Header extends Component {
  render() {
    const { goBack } = this.props;
    return (
      <ImageBackground
        style={styles.wrapper}
        source={{ uri: "https://dummyimage.com/300x200/000020/fff" }}
        resizeMode="cover"
        // borderRadius={3}
      >
        <View style={styles.searchBox}>
          <TouchableOpacity onPress={goBack}>
            <FeatherIcon name="arrow-left" size={20} color={colors.gray05} />
          </TouchableOpacity>

          <TextInput
            style={styles.inputText}
            keyboardType="web-search"
            placeholder="搜本店铺"
            onSubmitEditing={() => {}}
          />

          <TouchableOpacity>
            <FeatherIcon name="list" size={20} color={colors.gray05} />
          </TouchableOpacity>
        </View>

        <View style={styles.desc}>
          <View style={styles.left}>
            <Image
              source={{ uri: "https://dummyimage.com/300x200/FF63ff/fff" }}
              style={styles.logo}
            />
            <View style={styles.nameWrapper}>
              <View style={styles.name}>
                <Text style={styles.nameText}>XXXX会展购旗舰店</Text>
              </View>
              <View style={styles.recommend}>
                <Text style={styles.recommendText}>推荐商户</Text>
              </View>
            </View>
          </View>
          <View style={styles.right}>
            <TouchableOpacity style={styles.watch}>
              <FeatherIcon name="heart" size={14} color={colors.white} />
              <Text style={styles.watchText}>关注</Text>
            </TouchableOpacity>
            <View style={styles.watchNum}>
              <Text style={styles.watchNumText}>1999</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 40
  },
  searchBox: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
    borderRadius: 5,
    backgroundColor: colors.gray01,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    padding: 10
  },
  inputText: {
    flex: 1,
    backgroundColor: "transparent",
    fontSize: 15,
    paddingHorizontal: 5
  },
  desc: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom: 5
  },
  left: {
    flexDirection: "row"
  },
  logo: {
    width: 90,
    height: 35,
    alignSelf: "flex-end"
  },
  nameWrapper: {
    marginLeft: 5,
    alignSelf: "flex-end"
  },
  name: {},
  nameText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.white
  },
  recommend: {
    backgroundColor: colors.darkOrange,
    padding: 2,
    borderRadius: 2,
    alignSelf: "flex-start"
  },
  recommendText: {
    fontSize: 12,
    color: colors.white
  },
  right: {
    flexDirection: "column"
  },
  watch: {
    backgroundColor: colors.darkOrange,
    borderTopLeftRadius: 5,
    padding: 5,
    flexDirection: "row"
  },
  watchNum: {
    backgroundColor: colors.lightBlack,
    borderBottomLeftRadius: 5,
    padding: 5
  },
  watchText: {
    color: colors.white,
    fontSize: 12,
    marginLeft: 5
  },

  watchNumText: {
    color: colors.white,
    fontSize: 12,
    textAlign: "center"
  }
});
