import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { transparentHeaderStyle } from "../../styles/navigation";
import colors from "../../styles/colors";
import { VW } from "../../constants";
import NewsList from "./NewsList";
import SearchBar2 from "../SearchBar2";
import SearchPrompt from "../SearchPrompt";
// TODO: test data
import newsData from "../../data/news";

const PROMPT_WIDTH = VW - 2 * 20;

const prompt_config = [
  {
    section: "热门搜索",
    badges: [
      {
        text: "北京车展",
        bgColor: colors.darkOrange,
        color: colors.white
      },
      {
        text: "广交会",
        bgColor: colors.pink,
        color: colors.white
      },
      {
        text: "车展",
        bgColor: colors.starYellow,
        color: colors.white
      },
      {
        text: "北京",
        bgColor: colors.gray04,
        color: colors.white
      },
      {
        text: "广州",
        bgColor: colors.gray02,
        color: colors.white
      },
      {
        text: "惠州",
        bgColor: colors.gray03,
        color: colors.white
      },
      {
        text: "test for Wrap",
        bgColor: colors.gray03,
        color: colors.white
      }
    ]
  },
  {
    section: "最近搜索",
    badges: [
      {
        text: "惠州",
        bgColor: colors.gray03,
        color: colors.white
      },
      {
        text: "会展购",
        bgColor: colors.gray03,
        color: colors.white
      },
      {
        text: "展会购",
        bgColor: colors.gray03,
        color: colors.white
      },
      {
        text: "不落幕",
        bgColor: colors.gray03,
        color: colors.white
      },
      {
        text: "会展购App",
        bgColor: colors.gray03,
        color: colors.white
      }
    ]
  }
];

export default class NewsMore extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: [transparentHeaderStyle, { paddingLeft: 20 }],
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="md-close" size={30} color={colors.black} />
      </TouchableOpacity>
    )
  });

  state = {
    showPrompt: true
  };

  _onSearch = () => {
    alert("on search");
  };

  _onFocus = () => {
    this.setState({ showPrompt: true });
    // alert("on focus");
  };

  _onClose = () => {
    this.setState({ showPrompt: false });
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <SearchBar2
            onSearch={this._onSearch}
            rightIcon={
              <Icon name="ios-search" size={20} color={colors.gray05} />
            }
            placeholder="搜索展会资讯"
            bgColor={colors.gray01}
            onFocus={this._onFocus}
          />
        </View>
        <View style={styles.content}>
          <NewsList data={newsData} />
        </View>

        {this.state.showPrompt && (
          <View style={styles.prompt}>
            <SearchPrompt onClose={this._onClose} config={prompt_config} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 120
  },
  heading: {
    marginTop: 80,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {},
  prompt: {
    zIndex: 11,
    width: PROMPT_WIDTH,
    height: "auto",
    backgroundColor: colors.gray01,
    borderRadius: 3,
    position: "absolute",
    top: 125,
    left: 0,
    marginHorizontal: 20,
    padding: 10
  }
});
