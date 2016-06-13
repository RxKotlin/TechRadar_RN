
'use strict';

import React, { Component, } from 'react';
import {
  AppRegistry,
  Platform,
  View,
} from 'react-native';
var TabBarViewIOS = require("./js/Tab/TabBarView").default

class TechRadar extends Component {
  render() {
    if (Platform.OS === 'ios') {
      return <TabBarViewIOS/>
    } else {
      return <View/>
    }
  }
}

AppRegistry.registerComponent('TechRadar', () => TechRadar);
