import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { PropTypes } from "prop-types";

import colors from "../styles/colors";

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput:
        this.props.inputType === "text" || this.props.inputType === "email"
          ? false
          : true
      // scaleCheckmarkValue: new Animated.Value(0)
    };
  }

  toggleShowPassword = () => {
    this.setState({ secureInput: !this.state.secureInput });
  };

  render() {
    const {
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      onChangeText,
      showCheckmark,
      autoFocus,
      autoCapitalize,
      value,
      placeholder,
      inputStyle,
      labelTextWeight,
      ...customStyle
    } = this.props;
    const { secureInput, scaleCheckmarkValue } = this.state;
    const fontSize = labelTextSize || 14;
    const fontWeight = labelTextWeight || "700";
    const color = labelColor || colors.white;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || "transparent";
    const keyboardType = inputType === "email" ? "email-address" : "default";
    let customInputStyle = inputStyle || {};
    if (!inputStyle || (inputStyle && !inputStyle.paddingBottom)) {
      customInputStyle.paddingBottom = 5;
    }

    return (
      <View style={[styles.wrapper, { ...customStyle }]}>
        <Text style={[styles.label, { fontSize, color, fontWeight }]}>
          {labelText}
        </Text>
        {inputType === "password" ? (
          <TouchableOpacity
            onPress={this.toggleShowPassword}
            style={styles.showButton}
          >
            <Text style={styles.showButtonText}>
              {secureInput ? "Show" : "Hide"}
            </Text>
          </TouchableOpacity>
        ) : null}

        <TextInput
          autoCorrec={false}
          style={[
            styles.inputField,
            inputStyle,
            { color: inputColor, borderBottomColor: borderBottom }
          ]}
          secureTextEntry={secureInput}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          // value={value || ""}
          placeholder={placeholder || ""}
        />
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelTextSize: PropTypes.number,
  labelColor: PropTypes.string,
  textColor: PropTypes.string,
  borderBottomColor: PropTypes.string,
  inputType: PropTypes.string,
  onChangeText: PropTypes.func,
  autoFocus: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  labelTextWeight: PropTypes.string,
  inputStyle: PropTypes.object,
  placeholder: PropTypes.string
  // value: PropTypes.string
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  },
  label: {
    // fontWeight: "700",
    marginBottom: 10
  },
  inputField: {
    borderBottomWidth: 1,
    // paddingBottom: 5,
    paddingTop: 5
  },
  showButton: {
    position: "absolute",
    right: 0
  },
  showButtonText: {
    color: colors.white,
    fontWeight: "700"
  }
});
