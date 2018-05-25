import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { transparentHeaderStyle } from "../../styles/navigation";
import colors from "../../styles/colors";
import { VW } from "../../constants";
import NewsList from "./NewsList";
import SearchBar2 from "../SearchBar2";
import SearchPrompt from "../SearchPrompt";
import MoreButton from "../MoreButton";
import Loader from "../Loader";
import NoResult from "../NoResult";
import { axiosInstance } from "../../services";
// import newsData from "../../data/news";

const PROMPT_WIDTH = VW - 2 * 20;
const PAGE_SIZE = 30;

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
    showPrompt: false,
    loading: false,
    totalCount: 0,
    page: 1,
    news: [],
    searchKey: "",
    hasMore: false
  };

  _onFocus = () => {
    this.setState({ showPrompt: true });
    // alert("on focus");
  };

  _onClose = () => {
    this.setState({ showPrompt: false });
  };

  loadResults = async (page, key) => {
    this.setState({ loading: true });
    let params = {
      currentPage: page,
      pageSize: PAGE_SIZE
    };
    if (typeof key === "string" && key.trim() !== "" && key !== undefined) {
      params.key = key;
    }
    const response = await axiosInstance.get("searchExpoMsg", { params });
    const results = response.data.data;
    const totalCount = response.data.totalCount;
    this.setState(prevState => ({
      news: [...prevState.news, ...results],
      hasMore: totalCount <= PAGE_SIZE * page ? false : true,
      loading: false,
      totalCount
    }));
  };

  _onFilter = searchKey => {
    this.setState({ searchKey, news: [], page: 1 }, () => {
      this.loadResults(this.state.page, searchKey);
    });
  };

  _loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1
      }),
      () => {
        this.loadResults(this.state.page, this.state.searchKey);
      }
    );
  };

  componentDidMount = () => {
    this.loadResults(this.state.page, "");
  };

  render() {
    const { news, loading, hasMore, totalCount, page } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <SearchBar2
            onSearch={this._onFilter}
            rightIcon={
              <Icon name="ios-search" size={20} color={colors.gray05} />
            }
            placeholder="搜索展会资讯"
            bgColor={colors.gray01}
            onFocus={this._onFocus}
          />
        </View>

        {loading && page === 1 ? (
          <Loader />
        ) : totalCount === 0 ? (
          <NoResult />
        ) : (
          <View style={styles.content}>
            <NewsList data={news} />
          </View>
        )}
        {hasMore && (
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <MoreButton
              color={colors.lightBlack}
              size={14}
              title="更多..."
              onPress={this._loadMore}
              disabled={loading}
            />
          </View>
        )}

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
