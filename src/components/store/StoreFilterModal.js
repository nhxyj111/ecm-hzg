import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../../styles/colors";
import { transparentHeaderStyle } from "../../styles/navigation";
// TODO:
import categories from "../../data/storefiltercategories";

export default class StoreFilterModal extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: [transparentHeaderStyle, { paddingLeft: 20 }],
    // tabBarVisible: false,
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="md-close" size={30} color={colors.black} />
      </TouchableOpacity>
    )
  });

  get Sections() {
    return categories.map(c => c.section);
  }

  filterSectionList = section => {
    return categories.filter(c => c.section === section);
  };

  _renderSectionTitle = (content, index, isActive) => {
    return <View />;
  };

  _renderHeader = (content, index, isActive, sections) => {
    return (
      <View
        style={[
          styles.sectionWrapper,
          { backgroundColor: isActive ? colors.gray05 : colors.iosDefaultBG }
        ]}
      >
        <Text style={styles.sectionTitle}>{sections[index]}</Text>
        <Icon
          name={isActive ? "ios-arrow-down" : "ios-arrow-forward"}
          size={16}
          color={colors.lightBlack}
        />
      </View>
    );
  };

  _renderContent = (content, index, isActive, sections) => {
    return (
      <View style={styles.content}>
        {this.filterSectionList(sections[index])[0].list.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.contentItem}
            // underlayColor={colors.green01}
          >
            <Text style={styles.contentText}>{item}</Text>
          </TouchableOpacity>
        ))}
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
          <Accordion
            sections={this.Sections}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            underlayColor={colors.green01}
          />;
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // position: "absolute",
    // top: 80,
    // left: 0,
    // right: 0,
    marginTop: 80,
    marginHorizontal: 0,
    backgroundColor: colors.iosDefaultBG
  },
  sectionWrapper: {
    margin: 0,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.gray05,
    borderBottomWidth: 1
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.lightBlack
  },
  content: {
    backgroundColor: colors.gray05
  },
  contentItem: {
    paddingLeft: 60,
    marginBottom: 20
  },
  contentText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.lightBlack
  }
});