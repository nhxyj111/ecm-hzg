import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import colors from "../../../styles/colors";

export default class GoodDescSpec extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <View style={styles.cell1}>
            <Text>商品编号</Text>
          </View>
          <View style={styles.cell4}>
            <Text>2898789</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.section}>产品规格</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.cell1}>
            <Text style={styles.cellText}>尺寸(mm)</Text>
          </View>
          <View style={styles.cell4}>
            <Text style={styles.cellText}>290*108*30</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell1}>
            <Text style={styles.cellText}>重量(g)</Text>
          </View>
          <View style={styles.cell4}>
            <Text style={styles.cellText}>530</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.section}>主体</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.cell1}>
            <Text style={styles.cellText}>类型</Text>
          </View>
          <View style={styles.cell4}>
            <Text style={styles.cellText}>有线键盘</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell1}>
            <Text style={styles.cellText}>型号</Text>
          </View>
          <View style={styles.cell4}>
            <Text style={styles.cellText}>Professional2</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell1}>
            <Text style={styles.cellText}>颜色</Text>
          </View>
          <View style={styles.cell4}>
            <Text style={styles.cellText}>白色</Text>
          </View>
        </View>
        <View style={[styles.row, styles.lastRow]}>
          <View style={styles.cell1}>
            <Text style={styles.cellText}>品牌</Text>
          </View>
          <View style={styles.cell4}>
            <Text style={styles.cellText}>其他</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderColor: colors.gray06,
    borderWidth: 1
  },
  row: {
    flexDirection: "row",
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1
  },
  lastRow: {
    borderBottomWidth: 0
  },
  cell1: {
    borderRightColor: colors.gray06,
    borderRightWidth: 1,
    flex: 1,
    paddingVertical: 15,
    paddingLeft: 15
  },
  cell4: {
    flex: 3,
    paddingVertical: 15,
    paddingLeft: 15
  },
  section: {
    paddingVertical: 15,
    paddingLeft: 15,
    fontSize: 12,
    fontWeight: "bold",
    color: colors.lightBlack
  },
  cellText: {
    fontSize: 12,
    color: colors.gray02
  }
});
