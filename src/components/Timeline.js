import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

import colors from "../styles/colors";

export default class Timeline extends Component {
  render() {
    const { data } = this.props;
    // console.log(data);
    return (
      <View style={styles.wrapper}>
        <View style={styles.timeline}>
          {data.map((item, index) => {
            const now = moment();
            const flag =
              now >= moment(item.START_TIME) && now <= moment(item.END_TIME);
            return (
              <View style={styles.point} key={item.EXHIBITION_ID}>
                <View style={styles.left}>
                  <View
                    style={[
                      styles.circle,
                      {
                        borderColor: flag ? colors.tlGreen : colors.tlBlue
                      }
                    ]}
                  />
                </View>
                <View style={styles.right}>
                  <Text style={styles.date}>
                    参展时间: {moment(item.START_TIME).format("YYYY-MM-DD")} -{" "}
                    {moment(item.END_TIME).format("YYYY-MM-DD")}
                  </Text>
                  <Text style={styles.exhibition}>{item.SHORT_NAME}</Text>
                  <Text style={styles.host}>{item.NAME}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20
  },
  timeline: {
    borderLeftColor: colors.gray05,
    borderLeftWidth: 3,
    marginLeft: 5
  },
  point: {
    flexDirection: "row"
  },
  left: {
    width: 18,
    height: 18,
    borderRadius: 18,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10.5
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 14,
    backgroundColor: colors.white,
    // borderColor: colors.tlGreen,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  right: {
    backgroundColor: colors.gray05,
    borderLeftColor: "white",
    borderTopColor: colors.gray05,
    borderLeftWidth: 6,
    borderTopWidth: 6,
    paddingHorizontal: 6,
    paddingBottom: 6,
    marginTop: 9
  },
  date: {
    fontSize: 11,
    color: colors.lightBlack
  },
  exhibition: {
    fontSize: 13,
    color: colors.lightBlack,
    fontWeight: "600"
  },
  host: {
    fontSize: 11,
    color: colors.lightBlack
  }
});
