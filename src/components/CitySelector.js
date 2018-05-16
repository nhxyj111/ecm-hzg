import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PickerIOS as Picker
} from "react-native";
import cityData from "../data/city.json";
import colors from "../styles/colors";

export default class CitySelector extends Component {
  // TODO 根据地理位置设置
  // static defaultProps = {
  //   selectedProvince: "北京",
  //   selectedCity: "北京"
  // };

  state = {
    province: [],
    city: [],
    selectedProvince: this.props.selectedProvince,
    selectedCity: this.props.selectedCity
  };

  getProvince = () => {
    return cityData.provinces.map(data => data.provinceName);
  };

  getProvinceCity = province => {
    return cityData.provinces
      .filter(data => data.provinceName === province)[0]
      .citys.map(c => c.citysName);
  };

  componentDidMount = () => {
    // console.log(JSON.stringify(this.getProvinceCity("浙江省")));
    const province = this.getProvince();
    const selectedProvince = province[0];
    const city = this.getProvinceCity(selectedProvince);
    const selectedCity = city[0];
    this.setState({
      province,
      selectedProvince,
      city,
      selectedCity
    });
    // console.log(JSON.stringify(city));
  };

  updateProvince = selectedProvince => {
    const city = this.getProvinceCity(selectedProvince);
    const selectedCity = city[0];
    this.setState({
      city,
      selectedCity,
      selectedProvince
    });
  };

  updateProvinceCity = selectedCity => {
    this.setState({ selectedCity });
  };

  renderPicker = (key, i) => <Picker.Item key={i} label={key} value={key} />;

  render() {
    const { show, rightBtnPress } = this.props;
    return (
      <View
        style={[
          styles.pickerViewContainer,
          { display: show ? "flex" : "none" }
        ]}
      >
        <TouchableOpacity
          style={styles.rightBtn}
          onPress={() => rightBtnPress(this.state.selectedCity)}
        >
          <Text style={styles.rightBtnText}>确定查询</Text>
        </TouchableOpacity>

        <Picker
          style={{ height: 50, width: 100 }}
          selectedValue={this.state.selectedProvince}
          onValueChange={(itemValue, itemIndex) =>
            this.updateProvince(itemValue)
          }
          mode="dropdown"
        >
          {this.state.province.map((key, i) => this.renderPicker(key, i))}
        </Picker>
        <Picker
          style={{ height: 50, width: 100 }}
          selectedValue={this.state.selectedCity}
          onValueChange={(itemValue, itemIndex) =>
            this.updateProvinceCity(itemValue)
          }
          mode="dropdown"
        >
          {this.state.city.map((key, i) => this.renderPicker(key, i))}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerViewContainer: {
    // position: "relative",
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // height: 200,
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingBottom: 160
  },
  pickerItem: {
    flex: 1
  },
  rightBtn: {
    position: "absolute",
    right: 8,
    top: 8
  },
  rightBtnText: {
    color: colors.green01,
    fontSize: 20,
    fontWeight: "bold"
  }
});
