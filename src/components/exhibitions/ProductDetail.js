import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Wrapper from "../CommonWrapper";
import CommentWrapper from "../CommentWrapper";
import { transparentHeaderStyle } from "../../styles/navigation";
import colors from "../../styles/colors";
// TODO: test data
import commentsData from "../../data/comments";
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
    return (
      <Wrapper>
        <Text>HEADING</Text>
        {/* <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={500}
          style={{ flex: 1 }}
        > */}
        <View style={styles.comments}>
          <CommentWrapper comments={commentsData} />
        </View>
        {/* </KeyboardAvoidingView> */}
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  comments: {
    marginHorizontal: 10
  }
});
