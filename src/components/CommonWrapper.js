import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";

// import { transparentHeaderStyle } from "../styles/navigation";
import colors from "../styles/colors";

export default class CommonWrapper extends Component {
  state = {
    scrollBottom: 20
  };
  // _onLayout = event => {
  //   console.log(event);
  // };
  // render() {
  //   return (
  //     <KeyboardAvoidingView
  //       behavior="padding"
  //       style={styles.wrapper}
  //       //keyboardVerticalOffset={500}
  //     >
  //       <View style={styles.scrollViewWrapper}>
  //         <ScrollView
  //           contentContainerStyle={{ paddingBottom: 20 }}
  //           showsVerticalScrollIndicator={false}
  //         >
  //           {this.props.children}
  //         </ScrollView>
  //       </View>
  //     </KeyboardAvoidingView>
  //   );
  // }

  _changeScrollViewBottom = () => {
    this.setState(prevState => {
      if (prevState.scrollBottom == 20) {
        return {
          scrollBottom: 320
        };
      } else {
        return {
          scrollBottom: 20
        };
      }
    });

    // console.log(this.scrollview);
    // this.scrollview.scrollTo({ y: 0 });
  };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._changeScrollViewBottom
    );
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidHide",
      this._changeScrollViewBottom
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidShowListener.remove();
    // Keyboard.removeListener("keyboardDidShow");
    // Keyboard.removeListener("keyboardDidHide");
  }

  render() {
    const { scrollBottom } = this.state;
    return (
      <View style={styles.wrapper}>
        <ScrollView
          // ref={ref => (this.scrollview = ref)}
          style={styles.scrollViewWrapper}
          contentContainerStyle={{ paddingBottom: scrollBottom }}
          showsVerticalScrollIndicator={false}
        >
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 40,
    display: "flex",
    flex: 1,
    backgroundColor: colors.white
  },
  scrollViewWrapper: {
    marginTop: 80,
    padding: 0,
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});
