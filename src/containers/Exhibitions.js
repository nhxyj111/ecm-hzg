import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

import SearchBar from "../components/SearchBar";
import CitySelector from "../components/CitySelector";
import HotExhibitionList from "../components/exhibitions/HotExhibitionList";

import colors from "../styles/colors";
// TODO: test data
import exhibitionsList from "../data/exhibitions";

export default class Exhibitions extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    showCitySelector: false
  };

  toggleCitySelector = () => {
    alert("xx");
    this.setState({ showCitySelector: !this.state.showCitySelector });
  };

  render() {
    const { showCitySelector } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchBarWrapper}>
          <SearchBar rightIconPress={this.toggleCitySelector} />
        </View>

        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>最近热门展会</Text>

          <View style={styles.exhibitions}>
            <HotExhibitionList
              exhibitions={exhibitionsList}
              navigation={navigation}
            />
          </View>

          {/* <TouchableOpacity onPress={() => {}}>
            <Text>goto 具体展会 ExhibitionDetail</Text>
          </TouchableOpacity> */}
        </ScrollView>

        <CitySelector show={showCitySelector} />
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
    paddingTop: 100
  },
  scrollViewContent: {
    paddingBottom: 80
  },
  heading: {
    color: colors.gray04,
    fontSize: 22,
    fontWeight: "600",
    paddingLeft: 20,
    paddingBottom: 20
  },
  exhibitions: {
    marginBottom: 40
    // marginLeft: 20,
    // marginRight: 20
  }
});
