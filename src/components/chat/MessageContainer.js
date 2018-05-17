import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import { ImagePicker, Permissions } from "expo";

import MessageHeader from "./MessageHeader";
import Message from "./Message";
import SendInputField from "./SendInputField";
import colors from "../../styles/colors";
// TODO: test data
import messageData from "../../data/messages";

export default class MessageContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    image: null
  };

  componentDidMount() {
    // this.flatList.scrollToEnd();
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._scrollEnd
    );
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidHide",
      this._scrollEnd
    );
    // this._scrollEnd();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidShowListener.remove();
    // Keyboard.removeListener("keyboardDidShow");
    // Keyboard.removeListener("keyboardDidHide");
  }

  _scrollEnd = evt => {
    this.flatList.scrollToEnd();
  };

  _pickImage = async () => {
    const permission = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    const { status } = permission;
    if (status !== "granted") {
      alert("无权访问相册");
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View style={styles.wrapper}>
          <MessageHeader />
          <View>
            <FlatList
              // ref="flatList"
              ref={ref => (this.flatList = ref)}
              data={messageData}
              renderItem={({ item, index }) => <Message message={item} />}
              keyExtractor={item => item.id}
              // onLayout={this._scrollEnd}
              style={styles.flatlist}
            />
          </View>
          <SendInputField
            pickImage={this._pickImage}
            image={this.state.image}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 120
  },
  flatlist: {
    // flex: 1,
    // flexGrow: 1
  }
});
