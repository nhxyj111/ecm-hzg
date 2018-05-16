import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Wrapper from "../CommonWrapper";
import CommentWrapper from "../CommentWrapper";
import { transparentHeaderStyle } from "../../styles/navigation";
import colors from "../../styles/colors";
// TODO: test data
import commentsData from "../../data/comments";

const defaultPhoto =
  "https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png";

export default class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: [transparentHeaderStyle, { paddingLeft: 20 }],
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Icon name="md-close" size={30} color={colors.black} />
      </TouchableOpacity>
    )
  });

  render() {
    const { navigation } = this.props;
    const { product } = navigation.state.params;
    const {
      IMGURL,
      MERCHANDISE_NAME,
      MKTPRICE,
      BRIEF,
      _id,
      EXHIBITOR_ID
    } = product;
    return (
      <Wrapper>
        <View style={styles.heading}>
          <ImageBackground
            style={styles.bgImag}
            source={{
              uri: IMGURL !== "" ? IMGURL : defaultPhoto
            }}
            resizeMode="cover"
            borderRadius={3}
          >
            <View style={styles.descWrapper}>
              <Text style={styles.name}>{MERCHANDISE_NAME}</Text>
              <Text style={styles.desc}>{BRIEF}</Text>
            </View>
          </ImageBackground>

          <View style={styles.newcommentWrapper}>
            <TextInput placeholder="请输入评论" />
          </View>
        </View>

        <View style={styles.comments}>
          <CommentWrapper comments={commentsData} />
        </View>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    marginHorizontal: 20,
    marginBottom: 15
  },
  comments: {
    marginLeft: 10,
    marginRight: 20
  },
  bgImag: {
    width: "100%",
    height: 200,
    position: "relative",
    marginBottom: 15
  },
  descWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: "40%",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    paddingHorizontal: 5
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.white,
    marginBottom: 5
  },
  desc: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.white
  },
  newcommentWrapper: {}
});
