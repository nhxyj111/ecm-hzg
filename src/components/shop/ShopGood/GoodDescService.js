import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import colors from "../../../styles/colors";

export default class GoodDescService extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <View style={styles.line} />
          <Text style={styles.headText}>包装清单</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            键盘 x 1、USB数据线 x 1、包装袋 x 1、说明书 x 1、注意事项说明 x 1
          </Text>
        </View>

        <View style={styles.heading}>
          <View style={styles.line} />
          <Text style={styles.headText}>售后服务</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            本产品全国联保, 享受三包服务, 保质期为: 一年质保
          </Text>
        </View>

        <View style={styles.heading}>
          <View style={styles.line} />
          <Text style={styles.headText}>价格说明</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            1、会展购价格: 会展购价格为商品的销售价,
            是您最终决定是否购买商品的依据
          </Text>
          <Text style={styles.text}>
            2、折扣: 如无特殊说明,
            折扣指销售商在原价的价格基础上计算出的优惠比例或优惠金额; 如有疑问,
            您可在购买前联系销售商进行咨询
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  heading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  },
  headText: {
    fontSize: 13,
    color: colors.gray02,
    marginHorizontal: 15
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray05
  },
  textWrapper: {
    marginBottom: 20
  },
  text: {
    fontSize: 12,
    color: colors.gray02
  }
});
