'use strict';
import React, { Component, } from 'react'
import { View,
       StyleSheet,
       Text,
       } from 'react-native'

var DrawerLayout = require('./DrawerLayout').default

class TabBarView extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <DrawerLayout
        ref="drawer"
        drawerWidth={200}
        drawePostion="center"
        renderNavigationView={this.renderNavigationView}>
          <View/>
        </DrawerLayout>
    );
  }

  renderNavigationView() {
    return(
      <View style={styles.drawer}>
        <Text style={styles.title}>
          bookMark
        </Text>
        <Text style={styles.title}>
          history
        </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 20,
    justifyContent: 'flex-end',
  },
  title: {
    flex: 1,
    fontSize: 17,
    textAlign: 'center',
    color: 'red',
  },

});

export default TabBarView
