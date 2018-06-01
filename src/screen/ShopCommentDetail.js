import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  KeyboardAvoidingView
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import StarRating from "react-native-star-rating";

import colors from "../styles/colors";

export default class ShopCommentDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: "评论详情",
      headerStyle: {
        backgroundColor: colors.white
      },
      headerTintColor: colors.lightBlack,
      headerTitleStyle: {
        fontWeight: "normal"
      }
    };
  };
  render() {
    const { navigation } = this.props;
    const { comment } = navigation.state.params;
    return (
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior="padding"
        keyboardVerticalOffset={60} // TODO: only test for iphone X and iphone 7
      >
        <View style={styles.header}>
          <View style={styles.buyerInfo}>
            <View style={styles.buyerInfoRight}>
              <Image source={{ uri: comment.avatar }} style={styles.avatar} />
              <Text style={styles.buyerText}>{comment.buyer}</Text>
            </View>
            <Text style={styles.buyDateText}>{comment.date}</Text>
          </View>

          <View style={styles.stars}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={comment.rate}
              starSize={14}
              fullStarColor={colors.darkOrange}
            />
          </View>

          <View>
            <Text style={styles.contentText}>{comment.content}</Text>
          </View>
        </View>

        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.commentHeader}>
            <Text style={styles.buyerText}>
              {comment.comments.length} 条评论
            </Text>
          </View>
          {comment.comments.map(item => (
            <View style={styles.addedComment} key={item.id}>
              <View style={styles.addedCommentInfo}>
                <View style={styles.addedCommentInfoLeft}>
                  <Image
                    source={{ uri: item.avatar }}
                    style={styles.addedCommentAvatar}
                  />
                  <Text style={styles.buyerText}>{item.username}</Text>
                </View>
                <Text style={styles.buyDateText}>{item.date}</Text>
              </View>
              <View style={styles.addedCommentContent}>
                <Text style={styles.contentText}>{item.comment}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="说点什么呗~"
              style={styles.input}
            />
          </View>

          <View style={styles.footerRight}>
            <View style={styles.thumbsUpWrapper}>
              <FeatherIcon name="thumbs-up" size={20} color={colors.gray02} />
              <Text style={styles.iconText}>{comment.likes}</Text>
            </View>
            <View style={styles.messageWrapper}>
              <FeatherIcon
                name="message-square"
                size={20}
                color={colors.gray02}
              />
              <Text style={styles.iconText}>{comment.comments.length}</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    backgroundColor: colors.gray01,
    flex: 1
  },
  header: {
    backgroundColor: colors.white,
    padding: 10
  },
  buyerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  buyerInfoRight: {
    flexDirection: "row",
    alignItems: "center"
  },
  buyerText: {
    fontSize: 12,
    color: colors.lightBlack
  },
  buyDateText: {
    fontSize: 12,
    color: colors.gray05
  },
  contentText: {
    fontSize: 14,
    color: colors.lightBlack
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5
  },
  stars: {
    maxWidth: 100,
    marginBottom: 10
  },
  scrollview: {
    flex: 1,
    borderTopColor: colors.gray06,
    borderTopWidth: 1
  },
  commentHeader: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: colors.white
  },
  addedComment: {
    backgroundColor: colors.white,
    borderTopColor: colors.gray06,
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  addedCommentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  addedCommentInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  addedCommentInfoLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  addedCommentContent: {
    paddingLeft: 40
  },
  footer: {
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopColor: colors.gray06,
    borderTopWidth: 1
  },
  footerLeft: {
    flex: 1
  },
  footerRight: {
    flexDirection: "row",
    alignItems: "center"
  },
  thumbsUpWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20
  },
  messageWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20
  },
  input: {
    fontSize: 12,
    color: colors.lightBlack,
    backgroundColor: colors.gray01,
    padding: 8,
    marginRight: 20,
    borderRadius: 2
  },
  iconText: {
    fontSize: 12,
    color: colors.lightBlack,
    marginLeft: 5
  }
});
