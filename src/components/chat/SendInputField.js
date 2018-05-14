import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../../styles/colors";

export default class SendInputField extends Component {
  static navigationOptions = ({ navigation }) => ({});

  render() {
    const { pickImage, image } = this.props;
    return (
      <View style={styles.wrapper}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <TouchableOpacity style={styles.picture} onPress={pickImage}>
            <Icon name="picture-o" size={28} color={colors.green01} />
          </TouchableOpacity>
        )}
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.sender}>
          <Icon name="send-o" size={28} color={colors.green01} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingHorizontal: 20
    // paddingTop: 15,
    // paddingBottom: 10,
    // marginBottom: 10
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.lightBlack,
    borderBottomColor: colors.green01,
    borderBottomWidth: 1,
    paddingTop: 10,
    marginRight: 5,
    marginLeft: 5
  },
  sender: {
    flexDirection: "column",
    alignItems: "flex-end"
  },
  picture: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  image: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: 30,
    height: 30,
    borderColor: colors.green01,
    borderWidth: 1
  }
});
