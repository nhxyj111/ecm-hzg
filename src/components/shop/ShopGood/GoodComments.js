import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import StarRating from "react-native-star-rating";

import CommentFilter from "./CommentFilter";
import colors from "../../../styles/colors";
import { VW } from "../../../constants";
import shopGoodComments from "../../../data/shopGoodComments";

const GAP = 3;
const AVATAR_WIDTH = 40;
const ADDED_3_IMAGE_WIDTH = (VW - 10 * 4 - AVATAR_WIDTH - GAP * 2) / 3;
const ADDED_1_IMAGE_WIDTH = (VW - 10 * 4 - AVATAR_WIDTH) * 0.7;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.gray01
  },
  comments: {
    backgroundColor: colors.white,
    marginTop: 10,
    borderTopColor: colors.gray06,
    borderTopWidth: 1
  },
  comment: {
    flexDirection: "row",
    padding: 10,
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  right: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
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
    alignItems: "center"
  },

  buyerText: {
    fontSize: 12,
    color: colors.lightBlack,
    marginBottom: 5
  },
  dateText: {
    fontSize: 12,
    color: colors.gray05
  },
  buyDateText: {
    fontSize: 12,
    color: colors.gray05
  },
  iconText: {
    fontSize: 12,
    color: colors.lightBlack,
    marginLeft: 5
  },
  contentText: {
    fontSize: 14,
    color: colors.lightBlack
  },
  pictures: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap"
    // justifyContent: "space-between"
  },
  picture1: {
    width: ADDED_1_IMAGE_WIDTH,
    height: ADDED_1_IMAGE_WIDTH
  },
  picture3: {
    width: ADDED_3_IMAGE_WIDTH,
    height: ADDED_3_IMAGE_WIDTH,
    marginRight: GAP
  }
});

const Comment = ({ comment }) => (
  <View style={styles.comment}>
    <Image source={{ uri: comment.avatar }} style={styles.avatar} />
    <View style={styles.right}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.buyerText}>{comment.buyer}</Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={comment.rate}
            starSize={10}
            fullStarColor={colors.darkOrange}
          />
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.dateText}>{comment.date}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentText}>{comment.content}</Text>
        {comment.pictures.length > 0 && (
          <View style={styles.pictures}>
            {comment.pictures.length === 1 ? (
              <Image
                source={{ uri: comment.pictures[0] }}
                style={styles.picture1}
              />
            ) : (
              comment.pictures.map((pic, index) => (
                <Image
                  key={index}
                  source={{ uri: pic }}
                  style={styles.picture3}
                />
              ))
            )}
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Text style={styles.buyDateText}>购买日期: {comment.buyDate}</Text>
        </View>
        <View style={styles.footerRight}>
          <View style={styles.thumbsUpWrapper}>
            <FeatherIcon name="thumbs-up" size={16} color={colors.gray02} />
            <Text style={styles.iconText}>{comment.likes}</Text>
          </View>
          <View style={styles.messageWrapper}>
            <FeatherIcon
              name="message-square"
              size={16}
              color={colors.gray02}
            />
            <Text style={styles.iconText}>{comment.comments.length}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

// TODO:
let star45 = 0;
let star24 = 0;
let star02 = 0;
let hasPictures = 0;
let addcomments = 0;
shopGoodComments.forEach(comment => {
  const { rate, pictures, comments } = comment;
  if (rate >= 4 && rate <= 5) {
    star45++;
  }
  if (rate >= 2 && rate < 4) {
    star24++;
  }
  if (rate < 2) {
    star02++;
  }
  if (pictures.length > 0) {
    hasPictures++;
  }
  if (addcomments.length > 0) {
    addcomments++;
  }
});
let COMMENT_FILTER_CONFIG = [
  {
    key: "all",
    filter: "全部",
    count: shopGoodComments.length
  },
  {
    key: "star45",
    filter: "好评", // 4-5
    count: star45
  },
  {
    key: "star24",
    filter: "中评", // 2-4
    count: star24
  },
  {
    key: "star02",
    filter: "差评", // 0-2
    count: star02
  },
  {
    key: "hasPictures",
    filter: "有图",
    count: hasPictures
  },
  {
    key: "addcomments",
    filter: "追加评论",
    count: addcomments
  }
];

export default class GoodComments extends Component {
  render() {
    return (
      <ScrollView style={styles.wrapper} contentContainerStyle={{}}>
        <CommentFilter config={COMMENT_FILTER_CONFIG} selectedKey={"all"} />
        <View style={styles.comments}>
          {shopGoodComments.map(comment => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </View>
      </ScrollView>
    );
  }
}
