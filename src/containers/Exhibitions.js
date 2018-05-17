import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import NewsList from "../components/exhibitions/NewsList";
// TODO: test data
import newsData from "../data/news";
// import exhibitionsList from "../data/exhibitions";
// import PickerTest from "../components/PickerTest";

import SearchBar from "../components/SearchBar";
import CitySelector from "../components/CitySelector";
import DatePickerPrompt from "../components/DatePickerPrompt";
import HotExhibitionList from "../components/exhibitions/HotExhibitionList";

import colors from "../styles/colors";
import { axiosInstance } from "../services";

export default class Exhibitions extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    showCitySelector: false,
    showDatePicker: false,
    expoList: [],
    key: ""
  };

  _toggleCitySelector = () => {
    // alert("xx");
    this.setState({ showCitySelector: !this.state.showCitySelector });
  };

  _toggleDatePicker = () => {
    // alert("_toggleDatePicker");
    this.setState({ showDatePicker: !this.state.showDatePicker });
  };

  componentDidMount = async () => {
    const expoList = await axiosInstance.get("searchExpo");
    // console.log(JSON.stringify(expoList.data));
    this.setState({ expoList: expoList.data });
  };
  _searchByCity = selectedCity => {
    this.setState(
      () => ({ showCitySelector: false }),
      () => {
        // alert(selectedCity);
        this.props.navigation.navigate("ExhibitionSearchResults", {
          city: selectedCity
        });
      }
    );
  };

  _searchByDate = (start, end) => {
    this.setState(
      () => ({ showDatePicker: false }),
      () => {
        // alert(start + "<>" + end);
        this.props.navigation.navigate("ExhibitionSearchResults", {
          start,
          end
        });
      }
    );
  };

  _onSearch = () => {
    this.props.navigation.navigate("ExhibitionSearchResults", {
      city: this.state.key
    });
  };

  _onChangeText = key => {
    this.setState({ key });
  };

  render() {
    const { showCitySelector, showDatePicker, expoList, key } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchBarWrapper}>
          <SearchBar
            rightIconPress={this._toggleCitySelector}
            leftIconPress={this._toggleDatePicker}
            onSearch={this._onSearch}
            onChangeText={this._onChangeText}
            value={key}
          />
        </View>

        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>最近热门展会</Text>
            <TouchableOpacity
              style={styles.moreWrapper}
              onPress={() => navigation.navigate("ExhibitionList")}
            >
              <Text style={styles.more}>展会动态</Text>
              <FeatherIcon name="arrow-right" size={16} color={colors.gray04} />
            </TouchableOpacity>
          </View>
          <View style={styles.exhibitions}>
            <HotExhibitionList exhibitions={expoList} navigation={navigation} />
          </View>

          <Text style={styles.heading}>附近城市展会</Text>
          <View style={styles.exhibitions}>
            <HotExhibitionList exhibitions={expoList} navigation={navigation} />
          </View>

          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>展会资讯</Text>
            <TouchableOpacity
              style={styles.moreWrapper}
              onPress={() => navigation.navigate("NewsMore")}
            >
              <Text style={styles.more}>更多资讯</Text>
              <FeatherIcon name="arrow-right" size={16} color={colors.gray04} />
            </TouchableOpacity>
          </View>

          <NewsList data={newsData.slice(0, 5)} />
        </ScrollView>

        <CitySelector
          show={showCitySelector}
          searchByCity={this._searchByCity}
        />
        <DatePickerPrompt
          show={showDatePicker}
          searchByDate={this._searchByDate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
    // backgroundColor: colors.white
  },
  searchBarWrapper: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    zIndex: 99
  },
  scrollview: {
    paddingTop: 100,
    paddingBottom: 0
  },
  scrollViewContent: {
    paddingBottom: 100
  },
  headingWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  heading: {
    color: colors.gray04,
    fontSize: 22,
    fontWeight: "600",
    paddingLeft: 20,
    paddingBottom: 20
  },
  moreWrapper: {
    flexDirection: "row",
    marginRight: 20
  },
  more: {
    paddingBottom: 20,
    marginRight: 5,
    color: colors.gray04,
    fontSize: 16
  },
  exhibitions: {
    marginBottom: 20
    // marginLeft: 20,
    // marginRight: 20
  }
});
