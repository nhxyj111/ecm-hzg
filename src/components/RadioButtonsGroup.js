import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RadioButtons } from "react-native-radio-buttons";

import colors from "../styles/colors";

export default class RadioButtonGroup extends Component {
  state = {
    selectedOption: null
  };

  setSelectedOption = selectedOption => {
    this.setState({
      selectedOption
    });
  };

  renderOption = (option, selected, onSelect, index) => {
    const style = selected
      ? { fontWeight: "bold", fontSize: 20 }
      : { fontSize: 18 };

    return (
      <TouchableOpacity onPress={onSelect} key={index}>
        <Text style={[styles.optionText, style]}>{option}</Text>
      </TouchableOpacity>
    );
  };

  renderContainer = optionNodes => {
    return <View style={styles.optionsWrapper}>{optionNodes}</View>;
  };

  render() {
    const { options, title } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.heading}>{title}</Text>
        <RadioButtons
          options={options}
          onSelection={this.setSelectedOption}
          selectedOption={this.state.selectedOption}
          renderOption={this.renderOption}
          renderContainer={this.renderContainer}
        />
        {/* <Text>Selected option: {this.state.selectedOption || "none"}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    marginTop: 20
  },
  heading: {
    fontSize: 20,
    color: colors.lightBlack,
    fontWeight: "600",
    marginBottom: 15
  },
  optionsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  optionText: {
    // fontSize: 18,
    color: colors.lightBlack,
    marginLeft: 25,
    marginBottom: 15
  }
});
