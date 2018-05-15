import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import Comment from "./Comment";
import colors from "../styles/colors";

export default class CommentWrapper extends Component {
  render() {
    const { comments } = this.props;
    return (
      <View style={styles.wrapper}>
        {comments.map((comment, index) => (
          <Comment data={comment} key={comment.id} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderLeftColor: colors.blue,
    borderLeftWidth: 2,
    marginLeft: 10,
    paddingBottom: 15,

    borderBottomColor: colors.gray06,
    borderBottomWidth: 1,
    borderTopColor: colors.gray06,
    borderTopWidth: 1,
    borderRightColor: colors.gray06,
    borderRightWidth: 1
  }
});
