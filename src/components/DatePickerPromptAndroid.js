import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  DatePickerAndroid
} from "react-native";
import moment from "moment";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import colors from "../styles/colors";
import { VW } from "../constants";

export default class DatePickerPromptAndroid extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date()
  };

  _setDate = async dateType => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        const selectedDate = moment(
          [year, month + 1, day].join("-"),
          "YYYY-M-D"
        );
        this.setState(prevState => {
          if (dateType === "start") {
            return { startDate: selectedDate };
          } else {
            return { endDate: selectedDate };
          }
        });
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };

  render() {
    const { show, searchByDate, close } = this.props;
    const { startDate, endDate } = this.state;
    const formattedStartDate = moment(startDate).format("YYYY-MM-DD");
    const formattedEndDate = moment(endDate).format("YYYY-MM-DD");
    if (show)
      return (
        <View style={styles.wrapper}>
          <TouchableOpacity
            style={styles.dateWrapper}
            onPress={() => this._setDate("start")}
          >
            <Text style={styles.date}>{formattedStartDate}</Text>
            <Text style={styles.dateButton}>选择开始日期</Text>
            <FontAwesome name="calendar" size={15} color={colors.lightBlack} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dateWrapper}
            onPress={() => this._setDate("end")}
          >
            <Text style={styles.date}>{formattedEndDate}</Text>
            <Text style={styles.dateButton}>选择结束日期</Text>
            <FontAwesome name="calendar" size={15} color={colors.lightBlack} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => searchByDate(formattedStartDate, formattedEndDate)}
          >
            <Text style={styles.buttonText}>查询展会</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.close} onPress={close}>
            <FontAwesome name="close" size={20} color={colors.darkOrange} />
          </TouchableOpacity>
        </View>
      );
    else return null;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: VW / 2,
    height: 200,
    backgroundColor: "rgba(255,255,255,0.9)",
    // zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginHorizontal: 20
  },
  dateWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  date: {
    fontSize: 16,
    color: colors.lightBlack,
    marginRight: 20
  },
  dateButton: {
    fontSize: 16,
    color: colors.lightBlack,
    marginRight: 10
  },
  button: {},
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.green01
  },
  close: {
    position: "absolute",
    right: 10,
    top: 10
  }
});
