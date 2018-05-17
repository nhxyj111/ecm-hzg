import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../../styles/colors";
import { transparentHeaderStyle } from "../../styles/navigation";
import { axiosInstance } from "../../services";
import { VW } from "../../constants";
import { STATIC_BASE } from "../../services";

const IMAGE_WIDTH = (VW - 2 * 20 - 2 * 8) / 3;
const defaultPhoto = "https://dummyimage.com/100x100/FF6347/fff";

export default class ExhibitionSearchResults extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: [transparentHeaderStyle, { paddingLeft: 20 }],
    // tabBarVisible: false,
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="md-close" size={30} color={colors.black} />
      </TouchableOpacity>
    )
  });

  state = {
    results: []
  };

  componentDidMount = async () => {
    let searchUrl = "searchExpo";
    let queryString = "";
    let queryArr = [];
    const { navigation } = this.props;
    const { city, start, end } = navigation.state.params;
    if (city) queryArr.push(`key=${city}`);
    if (start) queryArr.push(`start=${start}`);
    if (end) queryArr.push(`end=${end}`);
    if (queryArr.length > 0) queryString = "?" + queryArr.join("&");
    searchUrl = searchUrl + queryString;
    const response = await axiosInstance.get(searchUrl);
    const results = response.data;
    this.setState({ results });
  };

  render() {
    const { results } = this.state;
    return (
      <View style={styles.wrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollview}
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          {results.map(item => {
            const uri =
              item.LOGOURL !== "" ? STATIC_BASE + item.LOGOURL : defaultPhoto;
            return (
              <TouchableOpacity
                key={item._id}
                style={styles.item}
                onPress={() =>
                  this.props.navigation.navigate("ExhibitionDetail", {
                    expo: item
                  })
                }
              >
                <Image source={{ uri }} style={styles.image} />
                <Text numberOfLines={2} style={styles.name}>
                  {item.NAME}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingTop: 80
  },
  scrollview: {},
  item: {
    width: IMAGE_WIDTH,
    height: "auto"
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH
  },
  name: {
    fontSize: 12,
    color: colors.lightBlack,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 10,
    textAlign: "center"
  }
});
