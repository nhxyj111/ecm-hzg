import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";

import { transparentHeaderStyle } from "../../styles/navigation";
import GroupButtons2 from "../GroupButtons2";
import colors from "../../styles/colors";
import ExhibitionItem from "./ExhibitionItem";
import MoreButton from "../MoreButton";
import { axiosInstance } from "../../services";
// import ehbData from "../../data/exhibitions";

const PAGE_SIZE = 30;

const GBConfig = [
  {
    key: "1",
    tab: "1月-4月"
  },
  {
    key: "5",
    tab: "5月-8月"
  },
  {
    key: "9",
    tab: "9月-12月"
  }
];

export default class ExhibitionList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: [transparentHeaderStyle, { paddingLeft: 20 }],
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="md-close" size={30} color={colors.black} />
      </TouchableOpacity>
    )
  });

  state = {
    now: moment(new Date()).format("YYYY-MM-DD"),
    results: [],
    page: 1,
    hasMore: true
  };

  componentDidMount = () => {};

  _getStartEndDates = key => {
    const { now } = this.state;
    const year = parseInt(now.split("-")[0]);
    let startDate = [year, "1", "1"].join("-");
    let endDate = [year, "12", "31"].join("-");

    if (key === "1") {
      startDate = [year, "1", "1"].join("-");
      endDate = [year, "4", "30"].join("-");
    } else if (key === "5") {
      startDate = [year, "5", "1"].join("-");
      endDate = [year, "8", "31"].join("-");
    } else {
      startDate = [year, "9", "1"].join("-");
      endDate = [year, "12", "31"].join("-");
    }
    return {
      startDate,
      endDate
    };
  };

  _getDefaultKey = () => {
    const { now } = this.state;
    const month = parseInt(now.split("-")[1]);

    let defaultKey = "1";
    if (month >= 1 && month <= 4) {
      defaultKey = "1";
    } else if (month >= 5 && month <= 8) {
      defaultKey = "5";
    } else {
      defaultKey = "9";
    }
    return defaultKey;
  };

  _loadResult = async (key, page, pageSize) => {
    const { startDate, endDate } = this._getStartEndDates(key);
    const response = await axiosInstance.get(
      `searchExpo?start=${startDate}&end=${endDate}&currentPage=${page}&pageSize=${pageSize}`
    );
    const results = response.data.data;
    const totalCount = response.data.totalCount;
    this.setState(prevState => ({
      results: [...prevState.results, ...results],
      hasMore: totalCount <= PAGE_SIZE * page ? false : true
    }));
    // console.log(results);
  };

  componentDidMount = () => {
    const key = this._getDefaultKey();
    this.setState({ key }, () => {
      this._loadResult(key, 1, PAGE_SIZE);
    });
  };

  _onChange = key => {
    this.setState(
      () => ({ results: [], key }),
      () => {
        this._loadResult(key, 1, PAGE_SIZE);
      }
    );
  };

  _loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1
      }),
      () => {
        this._loadResult(this.state.key, this.state.page, PAGE_SIZE);
      }
    );
  };

  render() {
    const { hasMore } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <GroupButtons2
            config={GBConfig}
            defaultKey={this._getDefaultKey()}
            onChange={this._onChange}
          />
        </View>

        <ScrollView style={styles.content}>
          <FlatList
            data={this.state.results}
            renderItem={({ item, index }) => (
              <ExhibitionItem
                data={item}
                onPress={() =>
                  this.props.navigation.navigate("ExhibitionDetail", {
                    expo: item
                  })
                }
              />
            )}
            keyExtractor={item => item._id}
            scrollToEnd={() => {
              console.log("test for scrollToEnd method");
            }}
          />
          {hasMore && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 15,
                marginBottom: 25,
                width: "100%"
              }}
            >
              <MoreButton
                color={colors.lightBlack}
                size={14}
                title="更多..."
                onPress={this._loadMore}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white
  },
  heading: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center"
  },

  content: {
    marginHorizontal: 0,
    marginTop: 15
  }
});
