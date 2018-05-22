import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import Icon from "react-native-vector-icons/Feather";

import SellerItem from "./SellerItem";
import colors from "../../styles/colors";
import tradeData from "../../data/trade";

export default class SellerList extends Component {
  state = {
    items: null
  };

  componentDidMount() {
    this.setState({ items: tradeData });
  }

  // get Sections() {
  //   return this.state.items.map(c => c);
  // }

  filterSectionList = section => {
    return this.state.items.filter(item => item.id === section.id);
  };

  _renderSectionTitle = (content, index, isActive) => {
    return <View />;
  };

  _renderHeader = (content, index, isActive, sections) => (
    <SellerItem item={sections[index]} isActive={isActive} />
  );

  _renderContent = (content, index, isActive, sections) => {
    const { phone, publisher } = sections[index];
    return (
      <View style={styles.content}>
        <View style={styles.actions}>
          <View>
            <Icon
              name="info"
              size={20}
              color={colors.lightBlack}
              style={styles.actIcon}
            />
            <Text style={styles.actText}>详情</Text>
          </View>
          <View>
            <Icon
              name="delete"
              size={20}
              color={colors.lightBlack}
              style={styles.actIcon}
            />
            <Text style={styles.actText}>忽略</Text>
          </View>
          <View>
            <Icon
              name="heart"
              size={20}
              color={colors.lightBlack}
              style={styles.actIcon}
            />
            <Text style={styles.actText}>关注</Text>
          </View>
          <View>
            <Icon
              name="share"
              size={20}
              color={colors.lightBlack}
              style={styles.actIcon}
            />
            <Text style={styles.actText}>分享</Text>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.item}>
            <Text style={styles.text}>发布人: </Text>
            <Text style={styles.text}>{publisher}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>联系电话: </Text>
            <Text style={styles.text}>{phone}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Email: </Text>
            <Text style={styles.text}>xxx@xxx.xxx</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          {this.state.items && (
            <Accordion
              sections={this.state.items}
              renderSectionTitle={this._renderSectionTitle}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              underlayColor={colors.green01}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden"
  },
  flatlist: {},
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.gray01
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  actIcon: {
    alignSelf: "center"
  },
  actText: {
    alignSelf: "center",
    marginTop: 3,
    color: colors.lightBlack,
    fontSize: 12
  },
  info: {
    marginTop: 5
  },
  item: {
    padding: 10,
    borderTopColor: colors.gray06,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 12,
    color: colors.lightBlack
  }
});
