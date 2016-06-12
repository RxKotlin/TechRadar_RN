'use strict';

import React, { Component, } from 'react'
import { View,
        Text,
        TabBarIOS,
       } from 'react-native'

class TabBarViewIOS extends Component {
  displayName: 'TabBarViewIOS'

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: "Home",
    }
  }

  render() {
    return (
    <TabBarIOS
      tintColor="red"
      >
     <TabBarIOS.Item
       title='Home'
       renderAdOrigin
       systemIcon="favorites"
       selected={this.state.selectedTab === 'Home'}
       onPress={()=> {
            this.setState({selectedTab:"Home"});
        }}>
        <Text> Text </Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="bookmarks"
          selected={this.state.selectedTab === 'tabTwo'}
          onPress={()=>{
            this.setState({
              selectedTab:"tabTwo",
            });
          }}>
          <Text> Text </Text>
        </TabBarIOS.Item>
    </TabBarIOS>
    )
  }
}

export default TabBarViewIOS
