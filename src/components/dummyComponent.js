/**
   * Objective: To create a dummy component.
   */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class dummyComponent extends Component {
	
	 constructor(){
	     super();	 
	 }
	
	 /*
		render the data
	 */
	 render() {
	 	return(
	 		<View style={style.container}>
	 			<Text style={style.textStyle} >Dummy Component</Text>
	 		</View>
	 		);
	 }
}//class-closes
/*
  Local style of the class
*/
const style = StyleSheet.create({
    container: {
        backgroundColor:'transparent',
        borderColor: '#90CBE3'
    },
    textStyle:{
    fontSize :30,
    color :'#4989A2' 
    }
})