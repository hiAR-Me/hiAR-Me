'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARPlane,
  ViroARScene,
  ViroText,
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
  ViroNode,
  ViroSpotLight
} from 'react-viro';

// import SmokeEmitter from './SmokeEmitter'
import MLufo from './MLufo'
import MLportal from './MLportal'


export default class MLScene extends Component {
  render() {
    return (
      <ViroNode position={[0, .5, -4]}>
        <MLufo />
        <MLportal />
      </ViroNode>
    )
  }
}

ViroAnimations.registerAnimations({

  rotate:{properties:{rotateY:"+=90"}, duration:1000},

});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
  fontFamily: 'Arial',
  fontSize: 30,
  color: '#ffffff',
  textAlignVertical: 'center',
  textAlign: 'center',
  }
});
