/*
  * OBJECTIVE: CREATE A CONTAINER USING COMPONENT.
  */

import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import DummyComponent from '../components/dummyComponent.js';

 
export default class TestContainer extends Component {
    /*
      render the view
    */
    render() {
        return (
           <View style={[style.container]}>
              <DummyComponent/>
          </View>
        );
    }//render-closes
}


/*
  LOCAL STYLING
*/
const style = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        borderTopWidth: 4, 
        borderColor: '#4989A2',
    }
})