import React from "react";
import { AsyncStorage, Alert } from "react-native";

import { axiosInstance } from "./src/services";
import AppNav from "./src/navigators/AppNav";

export default class App extends React.Component {
  componentDidMount = async () => {
    const response = await axiosInstance.get("getMerchandiseTypeList");
    const merchandiseTypeList = response.data.merchandiseTypeList;
    const subTypeList = merchandiseTypeList.filter(
      item => item.PARENT_NAME !== ""
    );
    const parentTypeList = merchandiseTypeList.filter(
      item => item.PARENT_NAME === ""
    );
    let parentTypeDict = {};
    const categories = [];

    for (let item of parentTypeList) {
      parentTypeDict[item.MERCHANDISE_TYPE_NAME] = [];
    }

    for (let item of subTypeList) {
      parentTypeDict[item.PARENT_NAME].push(item);
    }

    for (let key in parentTypeDict) {
      categories.push({
        section: key,
        list: parentTypeDict[key]
      });
    }

    AsyncStorage.setItem("@categories", JSON.stringify(categories));
  };

  // showNetWorkErrorAlert = () => {
  //   Alert.alert("网络异常", "是否重新加载程序", [
  //     { text: "否", onPress: () => {}, style: "cancel" },
  //     { text: "是", onPress: () => this.forceUpdate() }
  //   ]);
  // };

  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("INFO:", info);
    // this.showNetWorkErrorAlert();
  }
  render() {
    return <AppNav />;
  }
}
