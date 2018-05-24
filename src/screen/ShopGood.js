import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated
} from "react-native";

import colors from "../styles/colors";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import NavTabbar from "../components/shop/ShopGood/NavTabbar";
import GoodMain from "../components/shop/ShopGood/GoodMain";
import GoodDesc from "../components/shop/ShopGood/GoodDesc";
import GoodComments from "../components/shop/ShopGood/GoodComments";
import FooterBar from "../components/shop/ShopGood/FooterBar";
import TagPopover from "../components/shop/ShopGood/TagPopover";
import Veil from "../components/shop/ShopGood/Veil";

export default class ShopGood extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    selectedTab: 1,
    showTagPopover: false,
    scale: new Animated.Value(1)
  };

  _toggleTagPopover = () => {
    this.setState(
      prevState => ({
        showTagPopover: !prevState.showTagPopover
      }),
      () => {
        if (this.state.showTagPopover) {
          Animated.timing(this.state.scale, {
            toValue: 0.9,
            duration: 500
          }).start();
        } else {
          Animated.timing(this.state.scale, {
            toValue: 1,
            duration: 500
          }).start();
        }
      }
    );
  };

  _onSelect = selectedTab => {
    this.setState({ selectedTab });
  };

  _gotoShop = id => {
    this.props.navigation.navigate("Shop");
  };

  _renderTabContent = () => {
    const { selectedTab } = this.state;
    if (selectedTab === 1) {
      return <GoodMain toggleTagPopover={this._toggleTagPopover} />;
    } else if (selectedTab === 2) {
      return <GoodDesc />;
    } else {
      return <GoodComments />;
    }
  };

  render() {
    const { selectedTab, showTagPopover, scale } = this.state;

    return (
      <Animated.View style={[styles.wrapper, { transform: [{ scale }] }]}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Feather name="arrow-left" color={colors.lightBlack} size={28} />
          </TouchableOpacity>

          <NavTabbar selectedTab={selectedTab} onSelect={this._onSelect} />

          <TouchableOpacity>
            <Entypo
              name="dots-three-horizontal"
              color={colors.lightBlack}
              size={24}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.scrollWrapper}>
          <ScrollView
            style={styles.scrollview}
            contentContainerStyle={{ paddingBottom: 10 }}
            showsVerticalScrollIndicator={false}
          >
            {this._renderTabContent()}
          </ScrollView>
        </View>
        <FooterBar gotoShop={this._gotoShop} />

        {showTagPopover && <Veil />}

        <TagPopover
          scale={1.111}
          toggleTagPopover={this._toggleTagPopover}
          show={showTagPopover}
        />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white
  },
  nav: {
    borderBottomColor: colors.gray06,
    borderBottomWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25
  },
  scrollWrapper: {
    flex: 1,
    marginBottom: 60
  },
  scrollview: {
    // flex: 1
  }
});
