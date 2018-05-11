import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

import colors from "../styles/colors";
import LinkButton from "../components/LinkButton";
import NoneBorderButton from "../components/NoneBorderButton";
export default class Setting extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.wrapper}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: "https://dummyimage.com/100x100/FF6347/fff" }}
              style={styles.image}
            />
            <View style={styles.avatar}>
              <TouchableOpacity>
                <Text style={styles.avatarText}>设置头像</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.links}>
            <LinkButton
              title="登录"
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
            <LinkButton
              title="注册"
              onPress={() => {
                navigation.navigate("Register");
              }}
              style={{ marginLeft: 10 }}
            />
          </View>

          <View style={styles.system}>
            <NoneBorderButton title="系统设置" />
            <NoneBorderButton title="关于我们" />
            <NoneBorderButton title="政策与隐私" />
            <Text style={styles.version}>版本: 1.0.0</Text>
          </View>

          <View style={styles.social}>
            <NoneBorderButton title="微信" />
            <NoneBorderButton title="微博" />
            <NoneBorderButton title="官方网站" />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>北京维鼎森通信技术有限公司</Text>
            <Text style={styles.footerText}>
              增值电信业务经营许可证B2-20080122号
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: colors.white,
    alignItems: "center"
  },
  scrollContent: {
    width: "100%",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 80
  },
  imageWrapper: {
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: "hidden",
    position: "relative"
  },
  image: {
    height: 100,
    width: 100
  },
  avatar: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "rgba(162,181,205,0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  avatarText: {
    color: colors.gray06,
    fontSize: 12
  },
  links: {
    flexDirection: "row",
    marginTop: 15
  },
  system: {
    marginTop: 25,
    alignItems: "center"
  },
  social: {
    marginTop: 25
  },
  version: {
    fontSize: 12,
    color: colors.green01
  },
  footer: {
    alignItems: "center",
    marginTop: 80
  },
  footerText: {
    color: colors.green02,
    fontSize: 12
  }
});
