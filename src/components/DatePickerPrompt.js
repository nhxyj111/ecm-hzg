import React, { Component } from "react";
import {
  DatePickerIOS as DatePicker,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import moment from "moment";

import colors from "../styles/colors";

export default class DatePickerPrompt extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    flag: "start"
  };

  setDate = newDate => {
    this.setState(prevState => {
      if (prevState.flag === "start") {
        return { startDate: newDate };
      } else {
        return { endDate: newDate };
      }
    });
  };

  _toggleDateType = () => {
    this.setState(prevState => ({
      flag: prevState.flag === "start" ? "end" : "start"
    }));
  };

  render() {
    const { show, searchByDate } = this.props;
    const { startDate, endDate, flag } = this.state;
    const formattedStartDate = moment(startDate).format("YYYY-MM-DD");
    const formattedEndDate = moment(endDate).format("YYYY-MM-DD");
    // console.log(endDate);

    return (
      <View style={[styles.container, { display: show ? "flex" : "none" }]}>
        <DatePicker
          date={flag === "start" ? startDate : endDate}
          onDateChange={this.setDate}
          mode="date"
        />
        <View style={styles.buttonWrapper}>
          <View>
            <TouchableOpacity
              style={styles.leftBtnWrapper}
              onPress={this._toggleDateType}
            >
              <Text
                style={[
                  styles.leftBtnText,
                  { color: flag === "start" ? colors.pink : colors.gray02 }
                ]}
              >
                选择开始日期({formattedStartDate})
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.leftBtnWrapper}
              onPress={this._toggleDateType}
            >
              <Text
                style={[
                  styles.leftBtnText,
                  { color: flag === "end" ? colors.pink : colors.gray02 }
                ]}
              >
                选择结束日期({formattedEndDate})
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => searchByDate(formattedStartDate, formattedEndDate)}
          >
            <Text style={styles.search}>确定查询</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingBottom: 160
  },
  buttonWrapper: {
    position: "absolute",
    right: 0,
    left: 0,
    top: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8
  },
  search: {
    color: colors.green01,
    fontSize: 20,
    fontWeight: "bold"
  },
  leftBtnWrapper: {
    marginBottom: 5
  },
  leftBtnText: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
