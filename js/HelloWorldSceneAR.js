'use strict';

import React, { Component } from 'react';

import {StyleSheet, Button, View} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroImage,
  ViroVideo,
  ViroAnimations,
  ViroSceneNavigator,
  ViroScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroARPlaneSelector,
  ViroNode
} from 'react-viro';

import SmokeEmitter from './components/SmokeEmitter'
// import MLScene from './components/MLScene'
import CYScene from './components/CYScene'
// import BAScene from './components/BAScene'
import ChrisResume from './components/ChrisResume'


class HelloWorldSceneAR extends Component{
constructor(){
  super()
  this.state= {
  }
}

  render() {
    return (
      <ViroARScene onTrackingInitialized={()=>{this.setState({text : "hiAR.me"})}}>
        <ViroAmbientLight color="#ffffff" intensity={200}/>
        {/* <MLScene /> */}
        <CYScene />
        {/* <BAScene /> */}
        <ChrisResume/>
      </ViroARScene>
    )
  }

  _onClick(source) {
      this.setState({text: "Clicked"});
    }

};
module.exports = HelloWorldSceneAR;
