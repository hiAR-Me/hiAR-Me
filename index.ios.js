/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  Image,
  Modal
} from 'react-native';

import {
  ViroSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

import axios from 'axios'

var sharedProps = {
  apiKey:"E177B403-DA0B-40C8-99A3-E390C500B559",
}

// Sets the default scene you want for AR and VR
var InitialARScene = require('./js/HelloWorldSceneAR');
var InitialVRScene = require('./js/HelloWorldScene');

var UNSET = "UNSET";
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  constructor() {
    super();


// DONT FORGET TO MAKE COMMENTS INPUT FIELD
    this.state = {
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps,
      modalVisible : false,
      typedName: "",
      typedEmail: "",
      typedComment: "",
      visitor: {
        visitorEmail: "",
        visitorName: "",
        visitorComments: ""
      }
    }
    this._getARNavigator = this._getARNavigator.bind(this);
  }

  // axios.post('http://localhost:8080/send_simple_email', {
  //     visitor: {
  //       visitorEmail: "",
  //       visitorName: "",
  //       visitorComments: ""
  //     }
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });


  // Setup the onPress method for displaying a form for users to receive email with team member contact information.
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  _handleSubmit = () => {
    console.log('hello?')
    this.setState({
      visitor: {
        visitorName: this.state.typedName,
        visitorEmail: this.state.typedEmail
      },
      modalVisible: false
  })
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
      return this._getARNavigator();
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {

    return (
      <View style={localStyles.outer} >
        <ViroARSceneNavigator {...this.state.sharedProps}
          initialScene={{scene: InitialARScene}} />
        <View style={{position: 'absolute', top: 20, right: 20, alignItems: 'center'}}>
          <TouchableHighlight style={localStyles.formBtn}
            onPress={() => {
              this.setModalVisible(true)
            }}
            underlayColor={'#00000000'} >
            <Text style={localStyles.buttonText}>+</Text>
          </TouchableHighlight>

          {/* This is invisible until the btn above is pressed  */}
          <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text style={{textAlign: 'center', margin: 20}}>Share your email address and name to recieve our team's contact information!</Text>

            {/* Name */}
            <TextInput
              autoFocus= {true}
              style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, margin: 10}}
              placeholder="Name"
              label="name"
              onChangeText={(name) => this.setState({typedName: name})}
              value={this.state.typedName}
            />

            {/* Email */}
            <TextInput
              style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
              placeholder="Email Address"
              label="email"
              onChangeText={(email) => this.setState({typedEmail: email})}
              value={this.state.typedComment}
            />

            {/* Comments */}
              <TextInput
                style={{height: 100, width: 300, marginTop: 10, borderColor: 'gray', borderWidth: 1}}
                placeholder="Any additional comments?"
                multiline= {true}
                label="email"
                onChangeText={(email) => this.setState({typedEmail: email})}
                value={this.state.typedEmail}
              />

            {/* Submit */}
            <TouchableHighlight style={localStyles.buttons} onPress={this._handleSubmit}>
              <Text style={localStyles.buttonText}>Submit</Text>
            </TouchableHighlight>
            {/* Cancel */}
            <TouchableHighlight style={localStyles.buttons} onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={localStyles.buttonText}>Cancel</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>
        </View>
      </View>
    );
  }

  // Returns the ViroSceneNavigator which will start the VR experience
  _getVRNavigator() {
    return (
      <ViroSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialVRScene}} />
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType : navigatorType
      })
    }
  }
}

var localStyles = StyleSheet.create({
  outer : {
    flex : 1,
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 50,
    width: 150,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  formBtn : {
    flex : 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    height: 40,
    width: 40,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

AppRegistry.registerComponent('testinghiarme', () => ViroSample);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('ViroSample', () => ViroSample);
