
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

var TabBarViewIOS = require("./js/Tab/TabBarView").default

class TechRadar extends Component {
  render() {
    return (
        <TabBarViewIOS/>
    );
  }
}

AppRegistry.registerComponent('TechRadar', () => TechRadar);
