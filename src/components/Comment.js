import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput
} from "react-native";

import CommentWrapper from "./CommentWrapper";
import colors from "../styles/colors";

export default class Comment extends Component {
  state = {
    showCommentInput: false
  };

  _onReply = () => {
    this.setState({ showCommentInput: true });
  };

  _onBlur = () => {
    this.setState({ showCommentInput: false });
  };

  render() {
    const { data } = this.props;
    const { id, name, date, avatar, comment, reply } = data;
    const avatarPath = `https://semantic-ui.com/images/avatar2/small/${avatar}`;
    const { showCommentInput } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <Image source={{ uri: avatarPath }} style={styles.image} />
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>{name}: </Text>
            <View style={styles.date}>
              <Text style={styles.dateText}>{date}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.comment}>{comment}</Text>
        <View style={styles.replyWrapper}>
          <TouchableOpacity style={styles.reply} onPress={this._onReply}>
            <Text style={styles.replyText}>回复</Text>
          </TouchableOpacity>
          {showCommentInput && (
            <TextInput
              style={styles.input}
              autoFocus={true}
              onBlur={this._onBlur}
            />
          )}
        </View>
        {reply && reply.length > 0 && <CommentWrapper comments={reply} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // borderLeftColor: colors.blue,
    // borderLeftWidth: 3,
    // marginHorizontal: 10
    padding: 5
  },
  heading: {
    flexDirection: "row"
  },
  image: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: colors.gray01
  },
  nameWrapper: {
    marginLeft: 3,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  name: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.lightBlack
  },
  date: {
    borderBottomColor: colors.blue,
    borderBottomWidth: 1,
    marginBottom: 3
  },
  dateText: {
    fontSize: 10,
    color: colors.lightBlack
  },

  comment: {
    fontSize: 12,
    color: colors.lightBlack,
    marginLeft: 38
  },
  replyWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 38,
    marginTop: 10,
    marginBottom: 5
  },
  reply: {
    // borderBottomColor: colors.starYellow,
    // borderBottomWidth: 1,
    alignSelf: "flex-start",
    paddingBottom: 2
  },
  input: {
    // height: 40,
    flex: 1,
    borderBottomColor: colors.starYellow,
    borderBottomWidth: 1,
    fontWeight: "600",
    fontSize: 12,
    marginLeft: 5
  },
  replyText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.green02
  }
});
