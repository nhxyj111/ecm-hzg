import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";

import colors from "../../styles/colors";

export default class ExhibitionCard extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.wrapper}
        source={{ uri: "https://dummyimage.com/400x700/96aa12/fff" }}
        resizeMode="cover"
        borderRadius={5}
      >
        <ScrollView style={styles.card} showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>北京市亚洲动漫展</Text>
          {/* 副标题 */}
          <View style={styles.subHeading}>
            <View style={styles.subTextWrapper}>
              <Text style={styles.subText}>主办: </Text>
              <Text style={styles.subText}>北京市文化局</Text>
            </View>
            <View style={styles.subTextWrapper}>
              <Text style={styles.subText}>活动日期: </Text>
              <Text style={styles.subText}>2018-05-01至2018-05-09</Text>
            </View>
          </View>
          {/* 展会介绍 */}
          <View style={styles.descWrapper}>
            <Text style={styles.desc} numberOfLines={9999}>
              中国国际数码互动娱乐展览会（简称：ChinaJoy）是ChinaJoy品牌最重要的组成部分，是全球数码互动娱乐领域具有影响力的盛会。中国国际数码互动娱乐展览会是由中华人民共和国新闻出版总署等十二个政府部门指导，中国出版工作者协会游戏出版物工作委员会、中华人民共和国商务部外贸发展局、上海市新闻出版局和上海汉威信恒展览有限公司联合主办，上海市浦东新区人民政府协办的国际著名数码互动娱乐大展。
              中国国际数码互动娱乐展览会是继日本东京电玩展之后的又一同类型互动娱乐大展。此展会由中国政府相关行业主管部门支持举办的行业盛会意在逐步加强中国国内电子娱乐产品行业管理，积极规范电子和网络出版物市场，严厉打击盗版及非法复制行为。进一步支持、鼓励正当经营和正版电子娱乐产品的生产、销售。为推动中国电子娱乐产品市场的健康、有序发展提供宣传的平台。
              中国国际数码互动娱乐展览会是继日本东京电玩展之后的又一同类型互动娱乐大展。此展会由中国政府相关行业主管部门支持举办的行业盛会意在逐步加强中国国内电子娱乐产品行业管理，积极规范电子和网络出版物市场，严厉打击盗版及非法复制行为。进一步支持、鼓励正当经营和正版电子娱乐产品的生产、销售。为推动中国电子娱乐产品市场的健康、有序发展提供宣传的平台。
              中国国际数码互动娱乐展览会是继日本东京电玩展之后的又一同类型互动娱乐大展。此展会由中国政府相关行业主管部门支持举办的行业盛会意在逐步加强中国国内电子娱乐产品行业管理，积极规范电子和网络出版物市场，严厉打击盗版及非法复制行为。进一步支持、鼓励正当经营和正版电子娱乐产品的生产、销售。为推动中国电子娱乐产品市场的健康、有序发展提供宣传的平台。
              中国国际数码互动娱乐展览会是继日本东京电玩展之后的又一同类型互动娱乐大展。此展会由中国政府相关行业主管部门支持举办的行业盛会意在逐步加强中国国内电子娱乐产品行业管理，积极规范电子和网络出版物市场，严厉打击盗版及非法复制行为。进一步支持、鼓励正当经营和正版电子娱乐产品的生产、销售。为推动中国电子娱乐产品市场的健康、有序发展提供宣传的平台。
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    flex: 1,
    // TODO:
    // backgroundColor: "tomato",
    // borderRadius: 30,
    padding: 20,
    height: 360
  },
  card: {},
  heading: {
    alignSelf: "center",
    color: colors.white,
    fontSize: 24,
    fontWeight: "600"
  },
  subHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  subTextWrapper: {
    flexDirection: "row"
  },
  subText: {
    color: colors.gray05,
    fontSize: 10
  },
  descWrapper: {
    marginTop: 10
  },
  desc: {
    fontSize: 14,
    color: colors.white
    // height: "auto",
    // lineHeight: 1.5
  }
});
