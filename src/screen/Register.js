import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import colors from "../styles/colors";
import InputField from "../components/InputField";
import RoundedButton from "../components/RoundedButton";
import { transparentHeaderStyle } from "../styles/navigation";
export default class Register extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   headerStyle: [transparentHeaderStyle, { paddingLeft: 20 }],
  //   headerLeft: (
  //     <TouchableOpacity
  //       onPress={() => navigation.goBack()}
  //       // style={styles.closeButton}
  //     >
  //       <Icon name="arrow-left" size={30} color={colors.white} />
  //     </TouchableOpacity>
  //   )
  // });

  handleEmailChange = () => {
    alert("email");
  };

  handlePasswordChange = () => {
    // alert("pwd");
  };

  onLogin = () => {
    this.props.navigation.navigate("Login");
  };

  onRegister = () => {
    this.props.navigation.navigate("Register");
  };

  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{ marginLeft: 20 }}
          >
            <Icon name="arrow-left" size={30} color={colors.white} />
          </TouchableOpacity>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>用户注册</Text>
            <InputField
              labelText="EMAIL/手机"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              marginBottom={30}
              onChangeText={this.handleEmailChange}
              autoFocus={true}
              autoCapitalize="none"
            />
            <InputField
              labelText="密码"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              marginBottom={30}
              onChangeText={this.handlePasswordChange}
              autoFocus={true}
              autoCapitalize="none"
            />

            <InputField
              labelText="密码确认"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              marginBottom={30}
              onChangeText={this.handlePasswordChange}
              autoFocus={true}
              autoCapitalize="none"
            />

            <View>
              <RoundedButton
                text="确认注册"
                textColor={colors.green01}
                background={colors.white}
                handleOnPress={this.onRegister}
              />
              <RoundedButton
                text="已有账号, 进入登录界面"
                textColor={colors.white}
                background={colors.green01}
                handleOnPress={this.onLogin}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.green01
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
  },
  loginHeader: {
    fontSize: 34,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  }
});
