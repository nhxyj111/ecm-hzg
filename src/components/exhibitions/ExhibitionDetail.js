import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../../styles/colors";
import { transparentHeaderStyle } from "../../styles/navigation";
import { axiosInstance } from "../../services";

import ExhibiterList from "./ExhibiterList";
import ExhibitionCard from "./ExhibitionCard";
import MoreButton from "../MoreButton";

// import exhibiters from "../../data/exhibiters";
const PAGE_SIZE = 30;

export default class ExhibitionDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: [transparentHeaderStyle, { paddingLeft: 20 }],
    // tabBarVisible: false,
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Icon name="md-close" size={30} color={colors.black} />
      </TouchableOpacity>
    )
  });

  state = {
    exhibiters: [],
    hasMore: true,
    page: 1
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const { expo } = navigation.state.params;
    this.setState({ expo }, () => {
      this.loadExhibiters(this.state.page, PAGE_SIZE);
    });
  };

  _loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1
      }),
      () => {
        this.loadExhibiters(this.state.page, PAGE_SIZE);
      }
    );
  };

  loadExhibiters = async (page, pageSize) => {
    const { expo } = this.state;
    // console.log(expo.EXHIBITION_ID);
    const response = await axiosInstance.get(
      `searchShopListByexpoid/${
        expo.EXHIBITION_ID
      }?&currentPage=${page}&pageSize=${pageSize}`
    );
    const exhibiters = response.data.data;
    const totalCount = response.data.totalCount;
    this.setState(prevState => ({
      exhibiters: [...prevState.exhibiters, ...exhibiters],
      hasMore: totalCount <= PAGE_SIZE * page ? false : true
    }));
  };

  _gotoExhibiter = exhibiter => {
    this.props.navigation.navigate("Exhibiter", { exhibiter });
  };

  render() {
    const { navigation } = this.props;
    const { expo } = navigation.state.params;
    const { exhibiters, hasMore } = this.state;
    if (!!exhibiters) {
      return (
        <View style={styles.wrapper}>
          <ScrollView style={styles.scrollViewWrapper}>
            <ExhibitionCard expo={expo} />
            <ExhibiterList
              exhibiters={exhibiters}
              gotoExhibiter={this._gotoExhibiter}
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
    } else {
      // TODO: loading component
      return null;
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
    display: "flex",
    flex: 1
    // backgroundColor: colors.white
  },
  scrollViewWrapper: {
    marginTop: 40,
    padding: 0,
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});
